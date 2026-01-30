import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import chatbotIcon from "@/assets/chatbot-icon.png";
import userIcon from "@/assets/user-icon.png"; // ADD A SIMPLE USER ICON
import { startChat, sendBotMessage } from "@/lib/bot";
import favicon from "@/assets/favicon.png";

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
  const [isStartingChat, setIsStartingChat] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("globot_popup_seen");

    if (!hasSeenPopup) {
      setShowPopup(true);

      const timer = setTimeout(() => {
        setShowPopup(false);
        sessionStorage.setItem("globot_popup_seen", "true");
      }, 10000); // popup visible for 10s

      return () => clearTimeout(timer);
    }
  }, []);

  /* Auto scroll */
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isSending]);

  /* Start session */
  const initializeSession = async () => {
    if (sessionId || isStartingChat) return;

    setIsStartingChat(true);
    try {
      const res = await startChat();
      setSessionId(res.sessionId);
      setMessages([
        {
          id: Date.now(),
          text: "Hi 👋 I’m GlobeGuide. What’s your name?",
          sender: "bot",
        },
      ]);
    } finally {
      setIsStartingChat(false);
    }
  };

  const toggleChat = async () => {
    if (isOpen) {
      setIsOpen(false);
      return;
    }

    if (!sessionId) {
      await initializeSession();
    }

    setIsOpen(true);
  };

  /* Send message */
  const handleSend = async () => {
    if (!inputValue.trim() || !sessionId || isSending) return;

    const text = inputValue;
    setInputValue("");

    setMessages((prev) => [...prev, { id: Date.now(), text, sender: "user" }]);

    setIsSending(true);

    try {
      const res = await sendBotMessage(sessionId, text);
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, text: res.reply, sender: "bot" },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: "Sorry, something went wrong. Please try again.",
          sender: "bot",
        },
      ]);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {showPopup && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="
        fixed z-50
        bottom-20 right-4 md:bottom-28 md:right-6
        bg-card border shadow-lg
        px-4 py-2 rounded-xl
        text-sm max-w-[220px]
      "
          >
            🚀 Planning to study abroad? Let’s get started.
            {/* Arrow */}
            <div
              className="
          absolute bottom-[-6px] right-6
          w-3 h-3 bg-card
          border-r border-b
          rotate-45
        "
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        onClick={toggleChat}
        className="
          fixed z-50 bg-primary shadow-lg rounded-full
          flex items-center justify-center
          w-14 h-14 bottom-4 right-4
          md:w-16 md:h-16 md:bottom-6 md:right-6
        "
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? (
          <X className="text-primary-foreground w-6 h-6" />
        ) : (
          <img src={chatbotIcon} className="w-10 h-10" />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="
              fixed z-50 bg-card border shadow-2xl flex flex-col overflow-hidden
              bottom-0 left-0 right-0 h-[100dvh]
              md:bottom-24 md:right-6 md:left-auto md:w-[360px] md:h-[500px] md:rounded-2xl
            "
          >
            {/* Header */}
            <div className="bg-primary px-4 py-3 flex items-center gap-3">
              <img src={chatbotIcon} className="w-8 h-8" />
              <div className="flex-1">
                <p className="text-primary-foreground font-semibold">
                  GlobeTrek Assistant
                </p>
                <p className="text-xs text-primary-foreground/80">
                  Online • Ready to help
                </p>
              </div>
              <button onClick={() => setIsOpen(false)}>
                <X className="text-primary-foreground w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="relative flex-1 overflow-y-auto p-4 space-y-4 bg-muted/30">
              {/* watermark */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <img
                  src={favicon}
                  className="w-48 opacity-[0.04] hidden md:block"
                />
              </div>

              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex gap-2 ${
                    m.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {m.sender === "bot" && (
                    <img src={chatbotIcon} className="w-7 h-7 mt-1" />
                  )}

                  <div
                    className={`px-4 py-3 rounded-2xl max-w-[75%] text-sm ${
                      m.sender === "user"
                        ? "bg-primary text-primary-foreground rounded-br-md"
                        : "bg-card border rounded-bl-md"
                    }`}
                  >
                    {m.text}
                  </div>

                  {m.sender === "user" && (
                    <img src={userIcon} className="w-7 h-7 mt-1" />
                  )}
                </div>
              ))}

              {/* Typing Indicator */}
              {isSending && (
                <div className="flex gap-2 items-center">
                  <img src={chatbotIcon} className="w-7 h-7" />
                  <div className="flex gap-1 bg-card px-4 py-2 rounded-2xl border">
                    <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                    <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce delay-150" />
                    <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce delay-300" />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="sticky bottom-0 p-4 bg-card border-t">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                />
                <Button onClick={handleSend} disabled={isSending}>
                  {isSending ? (
                    <Loader2 className="animate-spin w-4 h-4" />
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
