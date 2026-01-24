import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import chatbotIcon from "@/assets/chatbot-icon.png";
import { startChat, sendBotMessage, endChat } from "@/lib/bot";
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

  //new toggle function to start a chat session
  const handleToggle = async () => {
    if (!isOpen && !sessionId) {
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
      }
    }

    setIsOpen(!isOpen);
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
          text: "Sorry, I’m having trouble right now. A Globetrek counselor will assist you shortly.",
          sender: "bot",
        },
      ]);
    } finally {
      setIsSending(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <>
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
                  Online • Ready to help
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
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/30">
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
            </div>

            {/* Input Area */}
            <div className="p-4 bg-card border-t border-border">
              <div className="flex gap-2">
                <Input
                  type="text"
                  placeholder="Type your message..."
                  value={inputValue}
                  disabled={isSending}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1 bg-muted/50 border-border focus:ring-primary"
                />
                <Button
                  onClick={handleSend}
                  disabled={isSending}
                  size="icon"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shrink-0"
                >
                  <Send className="w-4 h-4" />
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
