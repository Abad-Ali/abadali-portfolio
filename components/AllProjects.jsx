"use client";
import { Badge } from '@/components/ui/badge'
import { FolderCode, GithubIcon, InfoIcon, LinkIcon, Underline } from 'lucide-react'
import { SiNextdotjs, SiReact } from 'react-icons/si'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { motion } from "framer-motion";
import { projects } from "../app/projects/projectsData";
import { useRouter } from "next/navigation"

const AllProjects = () => {
  const router = useRouter();
  const [filter, setFilter] = useState("all");

  const filteredProjects = filter === "all" ? projects : projects.filter(project => project.frameWork === filter)
  return (
    <div className='min:w-screen min:h-screen md:mt-[10vh] animate-fade-in'>
      <div className='flex justify-center items-center mb-3 md:mb-7'>
        <div className='flex flex-col justify-center items-center text-center m-2'>
           <h1 className='font-bold text-3xl'>My Work & Projects</h1>
           <span className='text-lg text-gray-600 font-medium'>From small ideas to complete applications — this is my work.</span>
        </div>
      </div>
      <div className='flex justify-evenly items-center'>
        <div onClick={() => setFilter("all")} className="relative flex items-baseline gap-2 font-bold cursor-pointer px-2 py-1 hover:bg-white/10 rounded-lg duration-300">
          <FolderCode size={26} className="text-purple-700" />
          All Projects
        
          {filter === "all" && (
            <motion.div
              layoutId="underline"
              className="absolute left-0 right-0 bottom-[2] md:-bottom-1 h-[3px] mx-1.5 bg-purple-600 rounded-full"
              // transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
        </div>
        <div onClick={() => setFilter("next")} className="relative flex items-baseline gap-2 font-bold cursor-pointer px-2 py-1 hover:bg-white/10 rounded-lg duration-300">
          <SiNextdotjs size={26} />
          Next.js
        
          {filter === "next" && (
            <motion.div
              layoutId="underline"
              className="absolute left-0 right-0 bottom-[2] md:-bottom-1 h-[3px] bg-purple-600 rounded-full"
            />
          )}
        </div>
        <div onClick={() => setFilter("react")} className="relative flex items-baseline gap-2 font-bold cursor-pointer px-2 py-1 hover:bg-white/10 rounded-lg duration-300">
          <SiReact size={26} className="text-sky-400 animate-[spin_1.9s_linear_infinite]" />
          React.js
        
          {filter === "react" && (
            <motion.div
              layoutId="underline"
              className="absolute left-0 right-0 bottom-[2] md:-bottom-1 h-[3px] mx-1.5 md:mx-0 bg-purple-600 rounded-full"
            />
          )}
        </div>
      </div>
      <div className='flex justify-center items-center'><hr className='text-slate-300 lg:mt-3 mb-7 mx-3 w-full md:w-[60rem]'/></div>

      <div className='flex justify-center items-center min:w-[70vw] min:h-[70vh] mx-2'>
        <div className='grid grid-cols-2 gap-1 md:gap-2 w-fit h-fit mb-5'>
              {filteredProjects.map((project, index) => (
                 <motion.div key={index} onClick={() => router.push(`/projects/${project.id}`)} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeInOut" }} className='relative group flex flex-col gap-1 cursor-pointer lg:hover:scale-95 duration-300 transition-shadow shadow-lg hover:shadow-[0_4px_15px_rgba(124,58,237,0.5)] rounded-lg bg-white/10 py-1 px-1'>
                     <Image className='rounded-lg md:rounded-2xl border-2 border-black cursor-pointer w-full h-full hover:scale-95 duration-300' src={project.img} alt='project_img' width={400} height={400}/>
  
                      {index < 3 && (
                          <Badge className='absolute top-2 left-3 bg-purple-700/10 text-white px-3 py-1 z-10 border-[1] border-gray-200 animate-bounce'>
                            New
                          </Badge>
                      )}
  
                      <Link href={`/projects/${project.id}`} className='absolute top-0 right-1 text-white py-1 z-10'><InfoIcon strokeWidth={2} size={20}/></Link>
  
                      <div className='hidden absolute inset-0 lg:flex items-center justify-center bg-black/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none lg:pointer-events-auto'>
                        <div className='flex flex-col gap-3'>
                          <div className='flex justify-center items-center'>
                            <h2 className='text-purple-700 md:text-4xl font-bold'>{project.name}</h2>
                          </div>
                          <div className='flex flex-col justify-center items-center gap-1'>
                             <Link href={project.url} target='_blank' className='flex text-sm md:text-lg gap-1 font-semibold text-purple-900 underline'><LinkIcon className='animate-bounce' color='white' strokeWidth={2.5}/>{project.name}</Link>
                             <Link href={project.github} target='_blank' className='flex text-sm md:text-lg gap-1 font-semibold text-purple-900 underline'><GithubIcon className='animate-bounce' color='white' strokeWidth={2.5}/>Github</Link>
                          </div>
                        </div>
                      </div>
  
                      <div className='lg:hidden bg-purple-900/7 rounded-lg mx-1 px-1 flex justify-between items-center pointer-events-auto'>
                        <Link href={project.url} target='_blank' className='flex justify-center items-center gap-0.5 cursor-pointer'><LinkIcon className='text-blue-700 animate-bounce' size={15}/>Link</Link>
                        <Link href={project.github} target='_blank' className='flex justify-center items-center gap-0.5 cursor-pointer'><GithubIcon className='text-slate-500 animate-bounce' size={15}/>Github</Link>
                      </div>
                 </motion.div>
              ))}
        </div>
      </div>
    </div>
  )
}

export default AllProjects