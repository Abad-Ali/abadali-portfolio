"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquareText, X, Mail, Github, Sparkles } from "lucide-react"
import ChatBotDialog from "./ChatBotDialog"

export default function FloatingContact() {
  const [open, setOpen] = useState(false)
  const [chatOpen, setChatOpen] = useState(false)
  const subject = encodeURIComponent("Connecting from your Portfolio Site");
  const body = "Hi%20Abad,%0A%0AI%20just%20finished%20exploring%20your%20portfolio%20platform.%20It%20is%20great%20to%20see%20a%20fresher%20putting%20so%20much%20effort%20into%20building%20functional,%20real-world%20applications%20with%20modern%20stacks.%20%0A%0AI%27m%20always%20excited%20to%20connect%20with%20passionate%20new%20developers%20in the%20tech%20community.%20I%20wanted%20to%20reach%20out,%20say%20great%20work,%20and%20keep%20in%20touch%20for%20the%20future.%0A%0ABest,%0A[Your%20Name]";

  const buttons = [
    {
      name: "Email",
      icon: <Mail className="group-hover:text-red-400 group-hover:rotate-12 duration-300" size={21} />,
      href: `mailto:abadali1707@gmail.com?subject=${subject}&body=${body}`,
      hoverClasses: "hover:border-red-500 hover:text-red-400 group"
    },
    {
      name: "GitHub",
      icon: <Github className="group-hover:text-purple-400 group-hover:rotate-12 duration-300" size={21} />,
      href: "https://github.com/Abad-Ali",
      hoverClasses: "hover:border-purple-500 hover:text-white group"
    },
    {
      name: "Concierge Chat",
      icon: <Sparkles className="group-hover:text-blue-400 group-hover:rotate-12 duration-300" size={21} />,
      chat: true,
      hoverClasses: "hover:border-blue-500 hover:text-blue-400 group"
    }
  ]

  return (
    <>
      <ChatBotDialog open={chatOpen} setOpen={setChatOpen} />

      <div className="fixed right-5 bottom-5 z-15">
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, scale: 0.7, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.7, y: 30 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="absolute bottom-20 right-0 flex flex-col gap-3"
            >
              {buttons.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 40, scale: 0 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 40, scale: 0 }}
                  transition={{ delay: index * 0.08, type: "spring", stiffness: 400 }}
                  whileHover={{ y: -4, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative"
                >
                  <div className="absolute right-14 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition pointer-events-none hidden md:block">
                    <div className="px-3 py-1.5 rounded-xl bg-black/80 border border-white/10 backdrop-blur-xl text-xs text-white whitespace-nowrap">
                      {item.name}
                    </div>
                  </div>

                  {item.chat ? (
                    <button
                      onClick={() => {
                        setChatOpen(true)
                        setOpen(false)
                      }}
                      className={`flex items-center justify-center w-14 h-14 rounded-2xl bg-slate-950/90 backdrop-blur-xl border border-white/10 text-gray-300 shadow-xl transition-all duration-300 cursor-pointer ${item.hoverClasses}`}
                    >
                      {item.icon}
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center w-14 h-14 rounded-2xl bg-slate-950/90 backdrop-blur-xl border border-white/10 text-gray-300 shadow-xl transition-all duration-300 ${item.hoverClasses}`}
                    >
                      {item.icon}
                    </a>
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setOpen(!open)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.9 }}
          animate={{ y: open ? 0 : [0, -6, 0] }}
          transition={{ y: { repeat: Infinity, duration: 3, ease: "easeInOut" } }}
          className="relative flex items-center justify-center w-16 h-16 rounded-3xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white shadow-2xl overflow-hidden cursor-pointer"
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                <X size={27} />
              </motion.div>
            ) : (
              <motion.div
                key="chat-icon"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
              >
                <MessageSquareText size={27} />
              </motion.div>
            )}
          </AnimatePresence>
          <span className="absolute inset-0 rounded-3xl bg-white/20 animate-ping pointer-events-none" />
        </motion.button>
      </div>
    </>
  )
}
