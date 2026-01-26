import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import chatbotIcon from "@/assets/chatbot-icon.png";
import { startChat, sendBotMessage, endChat } from "@/lib/bot";
import favicon from "@/assets/favicon.png";
import globot from "@/assets/globot.gif";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
}

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [showIntroPopup, setShowIntroPopup] = useState(false);
  const [hasSeenIntro, setHasSeenIntro] = useState(false);
  const [isStartingChat, setIsStartingChat] = useState(false);
  const [chatError, setChatError] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Show intro popup after delay
  useEffect(() => {
    if (!hasSeenIntro && !isOpen) {
      const timer = setTimeout(() => {
        setShowIntroPopup(true);
      }, 5000); // Reduced from 12s to 5s

      return () => clearTimeout(timer);
    }
  }, [isOpen, hasSeenIntro]);

  // Pre-initialize session when intro popup shows
  useEffect(() => {
    if (showIntroPopup && !sessionId && !isStartingChat) {
      initializeSession();
    }
  }, [showIntroPopup]);

  const initializeSession = async () => {
    if (sessionId || isStartingChat) return;

    setIsStartingChat(true);
    setChatError(null);

    try {
      const res = await startChat();
      setSessionId(res.sessionId);
      setMessages([
        {
          id: Date.now(),
          text: res.message,
          sender: "bot",
        },
      ]);
    } catch (err) {
      console.error("Failed to start chat", err);
      setChatError("Unable to connect. Please try again.");
    } finally {
      setIsStartingChat(false);
    }
  };

  const handleToggle = async () => {
    // If opening and no session yet, initialize
    if (!isOpen && !sessionId) {
      await initializeSession();
    }
    setIsOpen(!isOpen);
  };

  const handleIntroAction = async (action: "open" | "dismiss") => {
    setShowIntroPopup(false);
    setHasSeenIntro(true);

    if (action === "open") {
      setIsOpen(true);
    }
  };

  const handleSend = async () => {
    if (!inputValue.trim() || !sessionId || isSending) return;

    const userMessage = inputValue;

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: userMessage,
        sender: "user",
      },
    ]);

    setInputValue("");
    setIsSending(true);

    try {
      const res = await sendBotMessage(sessionId, userMessage);

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: res.reply,
          sender: "bot",
        },
      ]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: "Sorry, I'm having trouble right now. A Globetrek counselor will assist you shortly.",
          sender: "bot",
        },
      ]);
    } finally {
      setIsSending(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleRetry = () => {
    setChatError(null);
    initializeSession();
  };

  return (
    <>
      {/* Intro Popup */}
      <AnimatePresence>
        {showIntroPopup && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-28 right-6 z-50 w-[300px] bg-card border border-border rounded-2xl shadow-xl p-4"
          >
            <div className="flex items-start gap-3">
              <img
                src={globot}
                alt="GlobeBot"
                className="w-10 h-10 rounded-full"
              />

              <div className="flex-1">
                <h4 className="font-semibold text-sm">Meet GlobeBot 👋</h4>
                <p className="text-xs text-muted-foreground mt-1">
                  Here to guide your global journey admissions, visas, and more.
                </p>

                <div className="mt-3 flex gap-2">
                  <Button
                    size="sm"
                    className="text-xs"
                    onClick={() => handleIntroAction("open")}
                    disabled={isStartingChat}
                  >
                    {isStartingChat ? (
                      <>
                        <Loader2 className="w-3 h-3 mr-1 animate-spin" />
                        Loading...
                      </>
                    ) : (
                      "Chat now"
                    )}
                  </Button>

                  <button
                    onClick={() => handleIntroAction("dismiss")}
                    className="text-xs text-muted-foreground hover:text-foreground"
                  >
                    Dismiss
                  </button>
                </div>
              </div>

              <button onClick={() => handleIntroAction("dismiss")}>
                <X className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Toggle Button */}
      <motion.button
        onClick={handleToggle}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-primary shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center overflow-hidden"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open chat"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-7 h-7 text-primary-foreground" />
            </motion.div>
          ) : (
            <motion.img
              key="icon"
              src={chatbotIcon}
              alt="Chat"
              className="w-12 h-12 object-contain"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-24 right-6 z-50 w-[360px] h-[500px] bg-card rounded-2xl shadow-2xl border border-border overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-primary p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <img
                  src={chatbotIcon}
                  alt="Bot"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-primary-foreground font-semibold">
                  GlobeTrek Assistant
                </h3>
                <p className="text-primary-foreground/80 text-xs">
                  {isStartingChat ? "Connecting..." : "Online • Ready to help"}
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="relative flex-1 overflow-y-auto p-4 space-y-4 bg-muted/30">
              {/* Watermark Logo */}
              <div
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                aria-hidden
              >
                <img src={favicon} alt="" className="w-50 opacity-[0.10]" />
              </div>

              {/* Loading State */}
              {isStartingChat && messages.length === 0 && (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <Loader2 className="w-8 h-8 animate-spin mx-auto text-primary mb-2" />
                    <p className="text-sm text-muted-foreground">
                      Connecting to GlobeBot...
                    </p>
                  </div>
                </div>
              )}

              {/* Error State */}
              {chatError && messages.length === 0 && (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center max-w-[250px]">
                    <p className="text-sm text-muted-foreground mb-3">
                      {chatError}
                    </p>
                    <Button size="sm" onClick={handleRetry}>
                      Try Again
                    </Button>
                  </div>
                </div>
              )}

              {/* Messages */}
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                      message.sender === "user"
                        ? "bg-primary text-primary-foreground rounded-br-md"
                        : "bg-card text-card-foreground border border-border rounded-bl-md shadow-sm"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isSending && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-card text-card-foreground border border-border rounded-2xl rounded-bl-md shadow-sm px-4 py-3">
                    <div className="flex gap-1">
                      <span
                        className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      />
                      <span
                        className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      />
                      <span
                        className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-card border-t border-border">
              <div className="flex gap-2">
                <Input
                  type="text"
                  placeholder="Type your message..."
                  value={inputValue}
                  disabled={isSending || !sessionId}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1 bg-muted/50 border-border focus:ring-primary"
                />
                <Button
                  onClick={handleSend}
                  disabled={isSending || !sessionId || !inputValue.trim()}
                  size="icon"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shrink-0"
                >
                  {isSending ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-center">
                Powered by GlobeTrek AI
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatbotWidget;
