'use client'
import { Badge } from '@/components/ui/badge'
import { ArrowDown, Eye, GithubIcon, LinkIcon } from 'lucide-react'
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
    <div className='lg:mt-[20vh] mt-32 flex flex-col gap-5 animate-fade-in'>
      <div className='flex flex-col justify-center items-center text-center'>
        <h1 className='font-bold text-3xl'>Featured Projects</h1>
        <span className='text-lg text-gray-600 font-medium'>A showcase of my latest work and experiments.</span>
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

                    <div className='absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl cursor-pointer'>
                      <div className='flex flex-col gap-3'>
                        <div className='flex items-center justify-center mb-0.5'>
                          <h2 className='bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent text-4xl font-black'>{project.name}</h2>
                        </div>
                        <div className='flex flex-col justify-center items-center space-y-5'>
                           <div className="flex justify-center gap-5 font-semibold">
                            <Link href={project.url} target="_blank" className="flex items-center gap-2 px-5 py-2 bg-purple-700 text-white rounded-lg cursor-pointer hover:scale-105 duration-300">
                              <LinkIcon /> Live Demo
                            </Link>
       
                            <Link href={project.github} target="_blank" className="flex items-center gap-2 px-5 py-2 border rounded-lg cursor-pointer hover:scale-105 duration-300 text-white">
                              <GithubIcon /> GitHub
                            </Link>
                          </div>
       
                          <div className="flex justify-center">
                            <Link href='#allProjects' className="flex items-center gap-2 px-5 py-2 border rounded-lg cursor-pointer font-semibold hover:scale-105 duration-300 text-white">
                              <Eye size={20} strokeWidth={2.5}/>View all projects
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='hidden lg:flex flex-col gap-3 backdrop-blur-lg bg-black/20 border-[1] border-gray-200 p-3 py-4 rounded-lg hover:scale-95 duration-300'>
                    <div className='flex flex-col items-center'>
                      <h2 className='text-purple-700 text-3xl font-black'>{project.name}</h2>
                      <div className='max-w-[30vw] text-center'><span>{project.desc}</span></div>
                      <Link href={`/projects/${project.id}`} className='font-bold text-blue-600 hover:to-blue-500 underline'>view more details</Link>
                    </div>
                    <div className="flex justify-center gap-5 font-semibold">
                      <Link href={project.url} target="_blank" className="flex items-center gap-2 px-5 py-2 bg-purple-700 text-white rounded-lg cursor-pointer hover:scale-105 duration-300">
                        <LinkIcon /> Live Demo
                      </Link>
            
                      <Link href={project.github} target="_blank" className="flex items-center gap-2 px-5 py-2 border rounded-lg cursor-pointer hover:scale-105 duration-300 text-white">
                        <GithubIcon /> GitHub
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            )
          })
        }
        </Swiper>

        <div className='hidden lg:flex justify-center items-center'>
          <Link href='#allProjects' className='bg-purple-700/90 px-2 py-1 rounded-lg fixed bottom-1 md:right-7 z-10 animate-bounce font-semibold cursor-pointer hover:bg-purple-700/70 flex gap-1.5'>View All<ArrowDown strokeWidth={2.5}/></Link>
        </div>
      </div>
    </div>

    <div id='allProjects' className='scroll-mt-28 md:mb-7'><AllProjects/></div>
    <span className='bg-slate-950 text-[15px] md:text-[17px] font-semibold text-gray-400 flex justify-center items-center p-2'>"Thank you for visiting my work."</span>
    </>
  )
}

export default Projects