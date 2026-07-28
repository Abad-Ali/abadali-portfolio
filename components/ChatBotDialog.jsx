"use client";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bot, Circle, Send, Sparkles, X } from "lucide-react";

const ChatBotDialog = ({ open, setOpen }) => {
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hi, I’m Abad's Concierge. I can help you explore projects, skills, resume, experience, and contact information.",
      time: new Date().toLocaleString("en-IN"),
    },
  ]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [thinking, setThinking] = useState("");
  const chatEndRef = useRef(null);

  const getDateTime = () => {
    return new Date().toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, sending]);

  const reply = (message) => {
    const text = message.toLowerCase();
    if (text.includes("hi") || text.includes("hello") || text.includes("hey")) {
      return (
        <div>
          <p>Hello, welcome to Abad's portfolio.</p>
          <p className="mt-2">
            I can help you explore projects, skills, resume, experience, and
            contact details.
          </p>
        </div>
      );
    }
    if (
      text.includes("contact") ||
      text.includes("email") ||
      text.includes("reach")
    ) {
      return (
        <div>
          <p className="font-semibold">You can connect with Abad here:</p>
          <div className="mt-3 space-y-2">
            <a
              href="mailto:abadali1707@gmail.com"
              className="block text-blue-400 underline"
            >
              Email: abadali1707@gmail.com
            </a>
            <a
              href="https://abadali.vercel.app"
              target="_blank"
              className="block text-blue-400 underline"
            >
              Portfolio: abadali.vercel.app
            </a>
            <a
              href="https://linkedin.com/in/abadali-dev"
              target="_blank"
              className="block text-blue-400 underline"
            >
              LinkedIn: in/abadali-dev
            </a>
            <a
              href="https://github.com/Abad-Ali"
              target="_blank"
              className="block text-blue-400 underline"
            >
              GitHub: Abad-Ali
            </a>
            <a
              href="https://instagram.com/abadali_17"
              target="_blank"
              className="block text-blue-400 underline"
            >
              Instagram: abadali_17
            </a>
          </div>
        </div>
      );
    }
    if (text.includes("resume") || text.includes("cv")) {
      return (
        <div>
          <p>You can view Abad's resume here:</p>
          <a
            href="/resume.pdf"
            target="_blank"
            className="block mt-2 text-blue-400 underline"
          >
            Open Resume
          </a>
        </div>
      );
    }
    if (text.includes("project") || text.includes("work")) {
      return (
        <div>
          <p>Some featured projects:</p>
          <ul className="mt-2 ml-5 list-disc">
            <li>DocMind AI</li>
            <li>NexaConnect</li>
            <li>Enterprise Task Hub</li>
            <li>TaskFlow</li>
          </ul>
          <a href="/projects" className="block mt-3 text-blue-400 underline">
            View All Projects
          </a>
        </div>
      );
    }
    if (
      text.includes("skill") ||
      text.includes("technology") ||
      text.includes("tech")
    ) {
      return (
        <div>
          <p>Abad works with modern full-stack technologies:</p>
          <ul className="mt-2 ml-5 list-disc">
            <li>Next.js & React.js</li>
            <li>Node.js & Express.js</li>
            <li>MongoDB & Mongoose</li>
            <li>Tailwind CSS & shadcn/ui</li>
            <li>JWT, Socket.IO, Google Gemini API</li>
          </ul>
        </div>
      );
    }
    return (
      <div>
        <p>I can help you with:</p>
        <ul className="mt-2 ml-5 list-disc">
          <li>Projects</li>
          <li>Resume</li>
          <li>Skills</li>
          <li>Contact details</li>
        </ul>
      </div>
    );
  };

  const sendMessage = (shortcut) => {
    const userText = shortcut || input;
    if (!userText.trim()) return;
    setMessages((prev) => [
      ...prev,
      { role: "user", text: userText, time: getDateTime() },
    ]);
    setInput("");
    setSending(true);
    setThinking("Thinking");
    let count = 0;
    const thinkingInterval = setInterval(() => {
      count++;
      setThinking("Thinking" + ".".repeat(count % 4));
    }, 400);
    setTimeout(() => {
      clearInterval(thinkingInterval);
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: reply(userText), time: getDateTime() },
      ]);
      setThinking("");
      setSending(false);
    }, 1200);
  };

  const shortcuts = ["Projects", "Resume", "Contact", "Skills"];

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-10 md:bottom-3 right-4 z-50 w-[calc(100vw-32px)] sm:w-[390px] scrollable"
        >
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/95 backdrop-blur-xl shadow-2xl">
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-blue-500/20">
                  <Sparkles size={22} className="text-blue-400" />
                </div>
                <div>
                  <h2 className="font-bold text-white">Abad's Concierge</h2>
                  <div className="flex items-center gap-1">
                    <motion.div animate={{scale: [1, 2, 1], opacity: [1, 0, 1],}} transition={{duration: 1.8,repeat: Infinity,ease: "easeOut",}} className="absolute w-2 h-2 rounded-full bg-green-500"/>
                    <div className="relative w-2 h-2 rounded-full bg-green-500 shadow-[0_0_12px_#22c55e]"/>
                    <p className="text-xs text-gray-400">Available</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="p-2 rounded-xl hover:bg-white/30 transition cursor-pointer"
              >
                <X size={18} className="text-white" />
              </button>
            </div>

            <div className="h-[380px] overflow-y-auto p-4 space-y-4 scroll-smooth">
              <div className="mx-auto w-fit mt-1 px-2.5 py-1 text-[11px] font-medium tracking-wide text-gray-300 rounded-md border border-white/5 bg-black/10 whitespace-nowrap">
                {new Date().toLocaleDateString("en-IN", { weekday: "long" })}
              </div>

              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-t-3xl px-4 py-3 text-sm ${msg.role === "user" ? "bg-blue-600 text-white rounded-l-3xl" : "bg-white/10 text-gray-200 rounded-r-3xl"}`}
                  >
                    <div>{msg.text}</div>
                    <p className="mt-2 text-[10px] opacity-60">{msg.time}</p>
                  </div>
                </div>
              ))}

              {sending && (
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <span>{thinking}</span>
                  <span className="animate-pulse">●</span>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>
            <div className="px-3 pb-2 flex gap-2 overflow-x-auto scrollbar-hide py-2">
              {shortcuts.map((item) => (
                <motion.button
                  key={item}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => sendMessage(item)}
                  className="shrink-0 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 hover:border-blue-500 hover:text-white transition cursor-pointer"
                >
                  {item}
                </motion.button>
              ))}
            </div>

            <div className="flex gap-2 p-3 border-t border-white/10">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask something..."
                className="flex-1 px-4 py-2 rounded-xl bg-white/5 border border-white/10 outline-none text-sm text-white placeholder:text-gray-500 focus:border-blue-500 transition"
              />
              <button
                onClick={() => sendMessage()}
                className="p-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition cursor-pointer"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ChatBotDialog;
