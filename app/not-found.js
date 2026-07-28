"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Code2, Home, Search } from "lucide-react";

import styles from "@/components/AnimatedBackground.module.css";

export default function NotFound() {
  const router = useRouter();

  return (
    <div
      className=" fixed inset-0 z-50 min-h-screen overflow-hidden flex items-center justify-center text-white px-5 bg-[#0a0a0a]"
      style={{
        background: `
          radial-gradient(
            ellipse 80% 60% at 50% 0%,
            rgba(37,99,235,.18),
            transparent 60%
          ),
          radial-gradient(
            ellipse 60% 50% at 10% 80%,
            rgba(6,182,212,.12),
            transparent 60%
          ),
          #0a0a0a
        `,
      }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className={styles.context}>
          <div className={styles.area}>
            <ul className={styles.circles}>
              {[...Array(10)].map((_, i) => (
                <li key={i} className={styles[`animate-circle-${i + 1}`]} />
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Glow Orbs */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-[150px]" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-6xl flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-xl text-blue-300 text-sm">
            <Search size={15} />
            Page Not Found
          </div>

          {/* 404 */}
          <h1 className=" mt-6 text-[120px] md:text-[160px] leading-none font-black bg-gradient-to-r from-[#2563eb] via-[#3b82f6] to-[#06b6d4] bg-clip-text text-transparent">
            404
          </h1>

          <h2 className="text-3xl md:text-5xl font-bold">
            Lost in{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Digital Space
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-5 max-w-xl text-gray-400 leading-8 text-base md:text-lg"
          >
            The page you're looking for doesn't exist. It may have been removed,
            renamed, or moved to another location.
            <br />
            Don't worry, your journey through my portfolio is still active.
          </motion.p>

          {/* Buttons */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className=" mt-8 flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            {/* Home Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/"
                className="group relative flex items-center gap-3 px-6 py-3.5 rounded-2xl overflow-hidden bg-gradient-to-r from-[#2563eb] via-[#3b82f6] to-[#06b6d4] text-white shadow-lg"
              >
                <div className="absolute inset-0 bg-black/20 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />

                <div className="relative z-10 p-2 rounded-xl bg-white/20">
                  <Home
                    size={20}
                    className="group-hover:rotate-12 transition"
                  />
                </div>

                <div className="relative z-10 text-left">
                  <p className="font-bold">Return Home</p>

                  <p className="text-xs opacity-80">Back to portfolio</p>
                </div>

                <ArrowRight
                  size={18}
                  className="relative z-10 group-hover:translate-x-2 transition"
                />
              </Link>
            </motion.div>

            {/* Projects Button */}

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/projects"
                className="group relative flex items-center gap-3 px-6 py-3.5 rounded-2xl overflow-hidden bg-white/10 border border-white/10 backdrop-blur-xl hover:border-blue-500/50 transition"
              >
                <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition" />

                <div className="relative z-10 p-2 rounded-xl bg-blue-500/20">
                  <Code2
                    size={20}
                    className="text-cyan-300 group-hover:rotate-12 transition"
                  />
                </div>

                <div className="relative z-10 text-left">
                  <p className="font-bold text-white">Explore Projects</p>

                  <p className="text-xs text-gray-400">View my work</p>
                </div>
              </Link>
            </motion.div>
          </motion.div>

          {/* Mini Developer Console */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-8 inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-xl font-mono text-sm text-gray-400">
            <span className="text-blue-400">$</span>
            <span>redirecting_to_homepage</span>
            <span className="w-2 h-4 bg-blue-500 animate-pulse" />
          </motion.div>
        </motion.div>
        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex-1 hidden md:flex items-center justify-center min-h-[420px]">
          {/* Main Glow */}
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.4, 0.25] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 blur-[100px]"/>
          {/* Orbit Circle 1 */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute w-[300px] h-[300px] md:w-[420px] md:h-[420px] rounded-full border border-white/10"/>
          {/* Orbit Circle 2 */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute w-[230px] h-[230px] md:w-[330px] md:h-[330px] rounded-full border border-blue-400/20"/>
          {/* React Badge */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute top-12 right-5 md:right-10 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/40 backdrop-blur-xl text-blue-300 font-semibold text-sm shadow-lg shadow-blue-500/20">
            React.js
          </motion.div>
          {/* Next Badge */}
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 3.5, repeat: Infinity }}
            className="absolute top-32 left-5 md:left-10 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl text-white font-semibold text-sm">
            Next.js
          </motion.div>
          {/* Node Badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute bottom-32 right-0 md:right-5 px-4 py-2 rounded-full bg-green-500/20 border border-green-400/40 backdrop-blur-xl text-green-300 font-semibold text-sm">
            Node.js
          </motion.div>
          {/* Mongo Badge */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute bottom-20 left-5 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-400/40 backdrop-blur-xl text-emerald-300 font-semibold text-sm">
            MongoDB
          </motion.div>
          {/* Avatar */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="relative z-10 flex flex-col items-center">
            <Image
              src="/avator.png"
              alt="Abad Ali"
              width={360}
              height={360}
              priority
              className="w-64 md:w-80 drop-shadow-[0_20px_40px_rgba(37,99,235,.35)]"/>
            {/* Floating Platform */}
            <div className="w-52 h-44 sm:w-60 sm:h-48 bg-gradient-to-r from-[#2563eb] via-[#3b82f6] to-[#06b6d4] rounded-full [transform:rotateX(-70deg)] shadow-[0_20px_40px_rgba(0,0,0,0.4)] -mt-10 border-[5px] border-gray-200/80 hover:scale-110 duration-300 cursor-pointer" />

          </motion.div>
        </motion.div>
        {/* Bottom Floating Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-5 left-1/2 -translate-x-1/2 hidden md:flex items-center gap-2 text-xs text-gray-500 font-mono">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          system_status: online
        </motion.div>
      </div>
      {/* Mobile Bottom Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-blue-500/10 to-transparent pointer-events-none" />
    </div>
  );
}
