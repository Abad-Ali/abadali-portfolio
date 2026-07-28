"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { ArrowRight, Code2, Terminal } from "lucide-react";

const AboutPreview = () => {
  return (
    <section className="px-4 mb-15">
      <motion.div
        initial={{opacity:0,y:40}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.8}}
        viewport={{once:true}}
        className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-6 items-center"
      >
        <motion.div
          initial={{opacity:0,x:-50}}
          whileInView={{opacity:1,x:0}}
          transition={{duration:0.8}}
          viewport={{once:true}}
          whileHover={{scale:1.02}}
          className="rounded-3xl overflow-hidden bg-black/90 border border-slate-700 shadow-xl"
        >
          <div className="flex justify-start gap-3 items-center px-5 py-3 border-b border-slate-700">
            <div className="flex gap-2">
              <span className="w-3 h-3 bg-red-500 rounded-full"/>
              <span className="w-3 h-3 bg-yellow-500 rounded-full"/>
              <span className="w-3 h-3 bg-green-500 rounded-full"/>
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Terminal size={16}/>
              about.js
            </div>
          </div>
          <motion.div
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{delay:0.5,duration:0.8}}
            viewport={{once:true}}
            className="h-[320px] p-6 font-mono text-sm text-gray-300 overflow-hidden"
          >
            <Typewriter
              options={{
                delay:40,
                cursor:"▋"
              }}
              onInit={(typewriter)=>{
                typewriter
                .typeString("$ npm run about")
                .pauseFor(700)
                .typeString("<br/><span style='color:#22c55e'>✔ Loading profile...</span>")
                .pauseFor(600)
                .typeString("<br/><span style='color:#22c55e'>✔ Loading skills...</span>")
                .pauseFor(600)
                .typeString("<br/><span style='color:#22c55e'>✔ Loading projects...</span>")
                .pauseFor(600)
                .typeString("<br/><br/><span style='color:#2563eb'>const</span> developer = {")
                .pauseFor(300)
                .typeString("<br/> name: <span style='color:#86efac'>'Abad Ali'</span>,")
                .pauseFor(700)
                .typeString("<br/> role: <span style='color:#86efac'>[Full Stack Web Developer, Frontend Developer, Backend Developer]</span>")
                .pauseFor(300)
                .typeString("<br/>}")
                .pauseFor(500)
                .typeString("<br/><br/><span style='color:#22c55e'>✔ Build Completed</span>")
                .start();
              }}
            />
          </motion.div>
        </motion.div>
        <motion.div
          initial={{opacity:0,x:50}}
          whileInView={{opacity:1,x:0}}
          transition={{duration:0.8,delay:0.2}}
          viewport={{once:true}}
          whileHover={{scale:1.02}}
          className="rounded-3xl p-7 bg-white/5 border border-gray-200/30 md:backdrop-blur-xl"
        >
          <motion.p
            initial={{opacity:0,y:10}} viewport={{ once: true }} 
            whileInView={{opacity:1,y:0}}
            transition={{delay:0.4}}
            className="text-[#2563eb] font-bold"
          >
            About Me
          </motion.p>
          <motion.h2
            initial={{opacity:0,y:10}} viewport={{ once: true }} 
            whileInView={{opacity:1,y:0}}
            transition={{delay:0.5}}
            className="mt-3 text-3xl font-black"
          >
            Building
            <span className="bg-gradient-to-r from-[#2563eb] to-[#3b82f6] bg-clip-text text-transparent">
              {" "}modern experiences
            </span>
          </motion.h2>
          <motion.p
            initial={{opacity:0,y:10}} viewport={{ once: true}}
            whileInView={{opacity:1,y:0}}
            transition={{delay:0.6}}
            className="mt-5 text-gray-600 leading-7 font-medium"
          >
            I'm Abad Ali, a Full Stack Developer focused on building responsive applications, clean user interfaces, and scalable backend systems using modern technologies.
          </motion.p>
          <motion.div
            initial={{opacity:0,y:20}}
            whileInView={{opacity:1,y:0}}
            transition={{delay:0.6}}
          >
            <Link
              href="/about"
              className="group relative inline-flex items-center gap-3 mt-7 px-6 py-3.5 rounded-2xl overflow-hidden bg-gradient-to-r from-[#2563eb] via-[#3b82f6] to-[#06b6d4] text-white shadow-lg cursor-pointer hover:scale-105 transition duration-300"
            >
              <div className="absolute inset-0 bg-black/20 translate-x-full group-hover:translate-x-0 duration-500"/>
              <div className="relative z-10 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-white/20">
                  <Code2 size={20} className="group-hover:rotate-12 duration-300"/>
                </div>
                <div>
                  <p className="font-bold">
                    Explore About Me
                  </p>
                  <p className="text-xs opacity-80">
                    My Journey & Skills
                  </p>
                </div>
                <ArrowRight size={18} className="group-hover:translate-x-2 duration-300"/>
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
export default AboutPreview;