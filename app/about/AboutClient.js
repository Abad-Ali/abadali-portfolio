'use client'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowRight, Code2, FileText, FolderCode, Gauge, GithubIcon, Palette } from 'lucide-react'
import SkillsCarousel from '@/components/SkillsCarousel'
import Typewriter from 'typewriter-effect';
import Link from 'next/link'
import Certifications from '@/components/Certifications'
import EducationSection from '@/components/EducationSection'
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <section className='flex justify-center items-center animate-fade-in'>
        <div className='flex flex-col items-center cursor-pointer lg:mt-[20vh] mt-32'>
            <motion.div initial={{ opacity: 0, x: -70 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: "easeInOut" }} className='flex flex-col md:flex-row justify-center items-center gap-5 mx-1'>
                <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} animate={{ y: [0, -6, 0] }} className="relative w-fit group">
                  <div className="absolute -inset-3 rounded-[28px] bg-gradient-to-br from-violet-600/30 via-fuchsia-500/20 to-cyan-400/30 blur-2xl opacity-60 group-hover:opacity-90 transition-all duration-500" />
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 rounded-[28px] p-[1.5px] bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400">
                    <div className="w-full h-full rounded-[27px] bg-background" />
                  </motion.div>
                  <div className="relative p-2 rounded-[28px] bg-background/70 md:backdrop-blur-xl border border-white/10 shadow-2xl">
                    <Avatar className="w-[130px] h-[150px] rounded-2xl overflow-hidden">
                      <AvatarImage src="https://github.com/Abad-Ali.png" alt="Profile"className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"/>
                      <AvatarFallback>AA</AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
                      <div className="flex items-center gap-2 rounded-full bg-background/90 md:backdrop-blur-md border border-white/20 px-3 py-1 shadow-lg">
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[11px] font-medium whitespace-nowrap">
                          Available for Work
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
    
                <div className="flex justify-center mt-3 px-2">
                  <div>
                    <div className='flex justify-between items-center'>
                      <h1 className='font-black text-3xl bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent'>Abad Ali</h1>
                      <div>
                        <Link href="/resume.pdf" target="_blank" className="group relative flex items-center gap-2 px-4 py-2.5 rounded-xl overflow-hidden backdrop-blur-xl bg-gradient-to-r from-purple-700 to-pink-600 border border-gray-300 shadow-lg cursor-pointer hover:scale-105 transition-all duration-300">
                          <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          <div className="relative z-10 flex items-center gap-2">
                            <div className="p-1.5 rounded-lg bg-white/20 transition-all duration-300">
                              <FileText size={16} className="group-hover:rotate-12 transition-transform duration-300"/>
                            </div>
                            <div>
                              <p className="font-bold text-sm">
                                Resume
                              </p>
                              <p className="text-[10px] opacity-70">
                                Experience & Skills
                              </p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <h2 className='font-extrabold text-[22px] md:text-2xl bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent'>
                      <Typewriter
                        options={{
                          strings: [
                            "Full-Stack Developer",
                            "AI-Powered App Developer",
                            "Next.js Developer",
                            "MERN Stack Developer",
                            "Backend & API Developer",
                            "React.js Developer",
                            "Software Engineer",
                            "Problem Solver"
                          ],
                          autoStart: true,
                          loop: true,
                          pauseFor: 700,
                          typeSpeed: 100, 
                          backSpeed: 50
                        }}
                      />
                    </h2>
    
                    <p className="max-w-lg md:text-[17px]">
                      I’m a Full-Stack Developer focused on building intelligent digital experiences. I specialize in Next.js, MERN stack, and AI-powered applications, creating scalable solutions that combine modern interfaces with robust backend systems.
                    </p>
                  </div>
                </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 70 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="md:ml-[8vw] mt-5 flex flex-wrap justify-center gap-3">
            
              {[
                {
                  title: "Specialty",
                  value: "Full Stack",
                  Icon: Code2,
                  color: "from-violet-500 to-purple-600",
                },
                {
                  title: "Design",
                  value: "User Focus",
                  Icon: Palette,
                  color: "from-pink-500 to-rose-500",
                },
                {
                  title: "Focus",
                  value: "Performance",
                  Icon: Gauge,
                  color: "from-cyan-500 to-blue-500",
                },
              ].map((item, index) => (
                <motion.div key={index} whileHover={{ y: -5, scale: 1.03 }} transition={{ duration: 0.25 }} className="relative group">
                  <div className="relative pt-5 px-7 py-3 min-w-[105px] md:min-w-[135px] rounded-xl border border-gray-200 dark:border-white/10 bg-white/5 md:backdrop-blur-xl shadow-md overflow-hidden group-hover:shadow-xl duration-300">
                    <div className="relative flex items-center gap-2">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br ${item.color}`}>
                        <item.Icon className="w-4 h-4 text-white"/>
                      </div>
                      <div>
                        <h3 className="text-xs md:text-sm font-black whitespace-nowrap">
                          {item.value}
                        </h3>
                        <p className="text-[10px] text-gray-500">
                          {item.title}
                        </p>
                      </div>
                    </div>
                    <div className={`absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r ${item.color}`}/>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 70 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: "easeInOut" }} className='md:ml-[10vw] flex justify-center items-center gap-3 mt-4'>
              <motion.div
                initial={{opacity:0,y:10}}
                whileInView={{opacity:1,y:0}}
                transition={{delay:0.7}}>
                <Link href="/projects" className="group relative flex items-center gap-3 px-2.5 md:px-6 py-3.5 rounded-2xl overflow-hidden bg-gradient-to-r from-purple-700 to-pink-600 text-white shadow-lg cursor-pointer">
                  <div className="absolute inset-0 bg-black/20 translate-x-full group-hover:translate-x-0 duration-500"></div>
                  <div className="relative z-10 flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-white/20">
                    <Code2 size={20}className="group-hover:rotate-12 duration-300"/>
                  </div>
                  <div>
                    <p className="font-bold">Explore Projects</p>
                    <p className="text-xs opacity-80">See My Work</p>
                  </div>
                  <ArrowRight size={18} className="group-hover:translate-x-2 duration-300"/>
                  </div>
                </Link>
              </motion.div>

              <motion.div
                initial={{opacity:0,y:10}}
                whileInView={{opacity:1,y:0}}
                transition={{delay:0.8}}>
                 <Link href='https://github.com/Abad-Ali' target='_blank' className="group flex items-center gap-3 px-2.5 md:px-5 py-3.5 rounded-2xl border border-gray-300 dark:border-white/20 bg-gray-100/60 dark:bg-white/5 backdrop-blur-xl hover:scale-105 transition hover:bg-gradient-to-r from-purple-700 to-pink-600 duration-500">
                   <div className="p-2 rounded-xl bg-white/20 group-hover:rotate-12 duration-300">
                     <GithubIcon size={18}/>
                   </div>
   
                   <div className="leading-tight">
                     <p className="font-bold text-sm">GitHub</p>
                     <p className="text-[11px] opacity-70">Source Code</p>
                   </div>
                 </Link>
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeInOut" }} viewport={{ once: true }} className="flex flex-col md:flex-row items-center justify-between gap-6 mt-10 bg-black/5 backdrop-blur-lg px-6 py-7 rounded-3xl border border-gray-200/40 shadow-xl m-2 hover:-translate-y-1 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <h3 className="font-black text-2xl">
                  Career Goals
                </h3>
                <div className="w-14 h-1 bg-green-600 rounded-full"/>
              </div>
            
              <p className="max-w-2xl font-semibold leading-relaxed text-sm md:text-base">
                I strive to grow as a software engineer by building meaningful projects, learning new technologies, and creating clean, efficient solutions with great user experiences.
              </p>
            </motion.div>
        </div>
      </section>

      <section className='animate-fade-in'>
        <section className='my-[5vh]'>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeInOut" }} className='my-[5vh]'>
            <SkillsCarousel/>
          </motion.div>
        </section>

        <section className='text-center mt-[10vh]'>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeInOut" }}><Certifications/></motion.div>
        </section>

        <section>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeInOut" }}><EducationSection/></motion.div>
        </section>

       <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeInOut" }} viewport={{ once: true }} className="mt-14 px-4">        
          <div className="max-w-5xl mx-auto">        
            <div className="text-center mb-10">        
              <h2 className="text-3xl font-black">
                What's Next
              </h2>        
              <p className="mt-3 text-gray-600 font-semibold">
                My journey of continuous growth, learning, and creating impactful solutions
              </p>        
            </div>        
            <div className="grid md:grid-cols-2 gap-6">        
              <div className="rounded-3xl p-6 bg-gradient-to-br from-purple-500/10 to-transparent backdrop-blur-xl border border-gray-200/40 shadow-xl hover:scale-105 duration-300">        
                <h3 className="text-xl font-black">
                  Currently Focused On
                </h3>        
                <p className="mt-4 text-gray-600 leading-relaxed font-medium">
                  I am currently improving my full-stack development skills by building
                  modern applications with React, Next.js, and Node.js. My focus is on
                  creating scalable solutions, improving performance, and developing
                  clean, maintainable code while exploring advanced frontend and backend
                  concepts.
                </p>        
                <div className="mt-6 flex flex-wrap gap-2">        
                  <span className="px-3 py-1 rounded-full text-sm font-semibold bg-purple-600/10 text-purple-600">
                    React Ecosystem
                  </span>        
                  <span className="px-3 py-1 rounded-full text-sm font-semibold bg-purple-600/10 text-purple-600">
                    Full Stack Development
                  </span>        
                  <span className="px-3 py-1 rounded-full text-sm font-semibold bg-purple-600/10 text-purple-600">
                    Modern UI Engineering
                  </span>        
                </div>        
              </div>        
              <div className="rounded-3xl p-6 bg-gradient-to-br from-blue-500/10 to-transparent backdrop-blur-xl border border-gray-200/40 shadow-xl hover:scale-105 duration-300">        
                <h3 className="text-xl font-black">
                  Future Goals
                </h3>        
                <p className="mt-4 text-gray-600 leading-relaxed font-medium">
                  My goal is to grow as a software engineer by exploring advanced
                  technologies, system design, and cloud-based solutions. I aim to
                  contribute to meaningful projects and build reliable applications
                  that solve real-world problems.
                </p>        
                <div className="mt-6 flex flex-wrap gap-2">        
                  <span className="px-3 py-1 rounded-full text-sm font-semibold bg-blue-600/10 text-blue-600">
                    Advanced Engineering
                  </span>        
                  <span className="px-3 py-1 rounded-full text-sm font-semibold bg-blue-600/10 text-blue-600">
                    Cloud Technologies
                  </span>        
                  <span className="px-3 py-1 rounded-full text-sm font-semibold bg-blue-600/10 text-blue-600">
                    Open Source
                  </span>        
                </div>        
              </div>        
            </div>        
            <div className="my-8 text-center rounded-3xl p-6 bg-black/5 dark:bg-white/5 border border-gray-200/40">        
              <p className="text-lg font-bold">
                Always learning, building, and looking for opportunities to create better software experiences.
              </p>        
              <Link href="/projects" className="group relative inline-flex items-center gap-3 mt-3 px-6 py-3.5 rounded-2xl overflow-hidden bg-gradient-to-r from-purple-700 to-pink-600 text-white shadow-lg cursor-pointer hover:scale-105 transition-all duration-300">
                <div className="absolute inset-0 bg-black/20 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                <div className="relative z-10 flex items-center gap-4">
                  <div className="p-2 rounded-xl bg-white/20">
                    <Code2 size={18} className="group-hover:rotate-12 transition-transform duration-300"/>
                  </div>
                  <div>
                    <p className="font-bold">Explore Projects</p>
                    <p className="text-xs opacity-80">See My Work</p>
                  </div>
                  <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300"/>
                </div>
              </Link>        
            </div>        
          </div>        
        </motion.section>
      </section>
    </>
  )
}     
export default About