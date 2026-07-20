'use client'
import { Badge } from '@/components/ui/badge'
import { ArrowDown, Code2, Eye, GithubIcon, LinkIcon, Mail } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/mousewheel";
import "swiper/css/autoplay";
import { Autoplay, Mousewheel } from 'swiper/modules'
import AllProjects from '@/components/AllProjects'
import Link from 'next/link'
import { motion } from "framer-motion";
import { projects } from "./projectsData";

const Projects= () => {
  return (
    <>
    <div className='lg:mt-[20vh] mt-20 flex flex-col gap-5 animate-fade-in'>
      <div className='flex flex-col justify-center items-center text-center'>
        <h1 className="mt-3 text-4xl font-black">Featured Projects</h1>
        <span className="mt-0.5 max-w-2xl mx-auto text-gray-600 font-semibold text-sm">A showcase of my latest work and experiments.</span>
      </div>

      <div className='md:w-full md:h-full'>
        <Swiper
          slidesPerView={1}                // One slide visible
          spaceBetween={3}                // Space between slides
          centeredSlides={true}          // Center the active slide
          loop={true}        
          autoplay={{                      // Auto-scroll settings
            delay: 3000,                  // 5s per slide
            disableOnInteraction: false, // Keep autoplay after user interaction
            pauseOnMouseEnter: true,
          }}
          mousewheel={true}              // Optional: control with scroll
          modules={[Autoplay, Mousewheel]}
          className="lg:h-[65vh] w-[90vw] flex justify-center items-center rounded-xl"
        >
        {
          projects.map((project,index)=>{
            return (
              <SwiperSlide key={index} className='w-full h-full'>
                <motion.div initial={{ opacity: 0, y: 70 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className='flex justify-center items-center gap-5'>
                  <div className='relative group mb-8 hover:scale-95 duration-300 transition-shadow shadow-lg hover:shadow-[0_4px_15px_rgba(124,58,237,0.5)] rounded-2xl'>
                    <Image className='rounded-xl md:rounded-2xl border-2 border-black cursor-pointer object-cover' src={project.img} alt='project_img' width={700} height={700} loading="eager"/>

                    {index < 3 && (
                      <Badge className='absolute top-2 left-3 bg-purple-700/10 text-white px-3 py-1 z-10 border-[1] bor-gray-200 animate-bounce'>
                        New
                      </Badge>
                    )}

                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center p-4 rounded-2xl">
                      <div className="flex flex-col items-center gap-3">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white text-center">
                          {project.name}
                        </h1>
                        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3">
                          <Link href={project.url} target="_blank" className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-gradient-to-r from-purple-700 to-pink-600 text-white shadow-lg hover:scale-105 transition">
                            <div className="p-2 rounded-xl bg-white/20">
                              <LinkIcon size={18} />
                            </div>
                            <div className="leading-tight text-left">
                              <p className="font-bold text-sm">Live Demo</p>
                              <p className="text-[11px] opacity-80">Open Website</p>
                            </div>
                          </Link>
                          <Link href={project.github} target="_blank" className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/10 border border-white/30 text-white backdrop-blur-xl hover:scale-105 transition">
                            <div className="p-2 rounded-xl bg-white/20">
                              <GithubIcon size={18} />
                            </div>
                            <div className="leading-tight text-left">
                              <p className="font-bold text-sm">GitHub</p>
                              <p className="text-[11px] opacity-80">Repository</p>
                            </div>
                          </Link>
                          <Link href="#allProjects" className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/10 border border-white/30 text-white backdrop-blur-xl hover:scale-105 transition">
                            <div className="p-2 rounded-xl bg-white/20">
                              <Eye size={18} />
                            </div>
                            <div className="leading-tight text-left">
                              <p className="font-bold text-sm">View All</p>
                              <p className="text-[11px] opacity-80">Projects</p>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full max-w-xl min-h-[350px] rounded-2xl p-5 bg-white/10 backdrop-blur-xl border border-black/10 shadow-xl shadow-black/5 lg:flex flex-col justify-between overflow-hidden transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 hidden ">
                    <div className="absolute -right-20 -top-20 w-48 h-48 bg-purple-600/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition duration-700"/>
                    <div className="relative z-10">
                      <div className="flex justify-between items-start gap-3">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center">
                          {project.name}
                        </h2>
                        <span
                          className="shrink-0 px-3 py-1 rounded-full text-xs font-bold bg-purple-600/10  text-purple-600  border border-purple-500/20 transition-all duration-300 group-hover:bg-purple-600/20">
                          Featured
                        </span>
                      </div>
                      <p
                        className="mt-3 text-sm md:text-base line-clamp-7 transition-colors duration-300">
                        {project.desc}
                      </p>
                    </div>
                    <div
                      className="relative z-10 flex flex-wrap justify-center items-center gap-3 border-t border-black/10 pt-4">
                      <Link href={`/projects/${project.id}`} className="group relative flex items-center gap-2 px-4 py-3 rounded-xl overflow-hidden bg-gradient-to-r from-purple-700 to-pink-600 text-white shadow-lg cursor-pointer">
                        <div className="absolute inset-0 bg-black/20 translate-x-full hover:translate-x-0 duration-500"></div>
                      
                        <div className="relative z-10 flex items-center gap-2">
                          <div className="p-1.5 rounded-lg bg-white/20 duration-300">
                            <Code2 size={16} className="hover:rotate-12 duration-300" />
                          </div>
                      
                          <div className="leading-tight">
                            <p className="font-bold text-sm">View Details</p>
                            <p className="text-[11px] opacity-80">Explore Project</p>
                          </div>
                      
                          <span className="text-lg group-hover:translate-x-1.5 duration-300">
                            →
                          </span>
                        </div>
                      </Link>
                      <div className="flex gap-3">
                        <Link
                          href={project.url}
                          target="_blank"
                          className="group relative flex items-center gap-3 px-5 py-3 rounded-2xl overflow-hidden backdrop-blur-xl bg-white/10 border border-gray-300 shadow-lg cursor-pointer">
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-600 opacity-0 group-hover:opacity-100 duration-500"></div>                      

                          <div className="relative z-10 flex items-center gap-3">
                            <div className="p-2 rounded-xl bg-white/20 duration-300">
                              <LinkIcon size={18} className="group-hover:rotate-12 duration-300" />
                            </div>                      

                            <div>
                              <p className="font-bold">Demo</p>
                              <p className="text-xs opacity-70">Live Preview</p>
                            </div>
                          </div>
                        </Link>                      

                        <Link
                          href={project.github}
                          target="_blank"
                          className="group relative flex items-center gap-3 px-5 py-3 rounded-2xl overflow-hidden bg-gradient-to-r from-purple-700 to-pink-600 text-white shadow-lg cursor-pointer">
                          <div className="absolute inset-0 bg-black/20 translate-x-full group-hover:translate-x-0 duration-500"></div>                      

                          <div className="relative z-10 flex items-center gap-3">
                            <div className="p-2 rounded-xl bg-white/20 duration-300">
                              <GithubIcon size={18} className="group-hover:rotate-12 duration-300" />
                            </div>                      

                            <div>
                              <p className="font-bold">Code</p>
                              <p className="text-xs opacity-80">GitHub Repo</p>
                            </div>
                          </div>
                        </Link>
                      </div>
                     </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            )
          })
        }
        </Swiper>

        <div className="hidden lg:flex justify-center items-center">
          <Link href="#allProjects" className="group fixed bottom-0 md:right-5 z-10 flex items-center gap-3 px-5 py-3 rounded-2xl overflow-hidden bg-gradient-to-r from-purple-700 to-pink-600 text-white shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30">
            <div className="absolute inset-0 bg-black/20 translate-x-full transition-transform duration-500 group-hover:translate-x-0"/>
            <div className="relative z-10 flex items-center gap-3">
              <div className="p-2 rounded-xl bg-white/20 transition-all duration-300 group-hover:bg-white/30">
                <ArrowDown size={18} strokeWidth={2.5} className="transition-transform duration-300 group-hover:translate-y-1"/>
              </div>
              <div className="leading-tight">
                <p className="font-bold text-sm">View All Projects</p>
                <p className="text-[11px] opacity-80">Explore My Work</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>

    <div id='allProjects' className='scroll-mt-28 md:mb-7'><AllProjects/></div>

    <section className="relative py-16 px-5 border-t border-white/10 overflow-hidden">
    
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-black text-purple-600 dark:text-purple-400">Let's Work Together</h2>
    
        <p className="mt-4 max-w-2xl text-sm md:text-lg text-gray-600 font-semibold">
          Thank you for exploring my portfolio. If you have an idea, project, or opportunity, feel free to reach out and let's create something meaningful.
        </p>
    
        <Link href="/contact" className="group relative mt-8 flex items-center gap-3 px-5 py-3 rounded-2xl overflow-hidden bg-gradient-to-r from-purple-700 to-pink-600 text-white shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30">
          <div className="absolute inset-0 bg-black/20 translate-x-full transition-transform duration-500 group-hover:translate-x-0"/>
    
          <div className="relative z-10 flex items-center gap-3">
            <div className="p-2 rounded-xl bg-white/20 transition-all duration-300 group-hover:bg-white/30">
              <Mail size={18} className="transition-transform duration-300 group-hover:rotate-12"/>
            </div>
    
            <div className="leading-tight text-left">
              <p className="font-bold text-sm">Contact Me</p>
              <p className="text-[11px] opacity-80">Start a Conversation</p>
            </div>
    
            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1.5">→</span>
          </div>
        </Link>
    
        <span className="mt-10 text-[15px] md:text-[17px] font-semibold text-gray-400">
          Thank you for visiting my work.
        </span>
      </div>
    </section>
    </>
  )
}

export default Projects