'use client'

import React from 'react'
import Image from "next/image"
import Link from "next/link"
import { GithubIcon, LinkIcon, Eye, ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"

const ProjectnameClient = ({ project }) => {
  return (
    <div className="min-h-screen px-4 sm:px-6 md:px-10 pt-24 pb-12 overflow-hidden mt-10">

      <div className="absolute top-20 right-0 w-96 h-96 bg-purple-600/20 blur-3xl rounded-full"/>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-600/10 blur-3xl rounded-full"/>

      <main className="max-w-6xl mx-auto relative z-10">

        <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:.7}} className="grid lg:grid-cols-[1fr_1.2fr] gap-10 items-center">

          <div>

            <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
              Project Showcase
            </span>

            <h1 className="mt-3 text-3xl sm:text-4xl md:text-6xl font-black text-gray-900 dark:text-white">
              {project.name}
            </h1>

            <p className="mt-5 text-white text-base md:text-lg leading-relaxed">
              {project.desc}
            </p>


            <div className="flex flex-wrap gap-3 mt-8">

              <Link href={project.url} target="_blank" className="group relative flex items-center gap-3 px-5 py-3 rounded-2xl overflow-hidden bg-gradient-to-r from-purple-700 to-pink-600 text-white shadow-lg hover:scale-105 transition duration-500">

                <div className="absolute inset-0 bg-black/20 translate-x-full group-hover:translate-x-0 transition duration-500"/>

                <div className="relative z-10 flex items-center gap-3">

                  <div className="p-2 rounded-xl bg-white/20">
                    <LinkIcon size={18}/>
                  </div>

                  <div className="leading-tight">
                    <p className="font-bold text-sm">Live Demo</p>
                    <p className="text-[11px] opacity-80">Open Website</p>
                  </div>

                </div>

              </Link>


              <Link href={project.github} target="_blank" className="group flex items-center gap-3 px-5 py-3 rounded-2xl border border-gray-300 dark:border-white/20 bg-gray-100/60 dark:bg-white/5 backdrop-blur-xl hover:scale-105 transition">

                <div className="p-2 rounded-xl bg-purple-500/20">
                  <GithubIcon size={18}/>
                </div>

                <div className="leading-tight text-gray-900 dark:text-white">
                  <p className="font-bold text-sm">GitHub</p>
                  <p className="text-[11px] opacity-70">Source Code</p>
                </div>

              </Link>

            </div>

          </div>


          <motion.div initial={{opacity:0,scale:.9}} animate={{opacity:1,scale:1}} transition={{duration:.7}} className="relative group">

            <div className="absolute -inset-5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl rounded-full"/>

            <div className="relative rounded-3xl overflow-hidden bg-gray-100 dark:bg-neutral-900 border border-gray-200 dark:border-white/10 shadow-2xl">

              <div className="aspect-video flex items-center justify-center">

                <Image
                  src={project.img}
                  alt={project.name}
                  width={1200}
                  height={700}
                  className="w-full h-fit object-contain transition duration-700 group-hover:scale-105"
                />

              </div>


              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center p-4">

                <div className="flex flex-col items-center gap-3">
                  <div>
                    <h1 className="mt-3 text-3xl sm:text-4xl md:text-6xl font-black text-gray-900 dark:text-white">
                      {project.name}
                    </h1>
                  </div>

                  <div className='flex flex-col sm:flex-row flex-wrap justify-center gap-3'>
                  <Link href={project.url} target="_blank" className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-gradient-to-r from-purple-700 to-pink-600 text-white shadow-lg hover:scale-105 transition">

                    <div className="p-2 rounded-xl bg-white/20">
                      <LinkIcon size={18}/>
                    </div>

                    <div className="leading-tight text-left">
                      <p className="font-bold text-sm">Live Demo</p>
                      <p className="text-[11px] opacity-80">Open Website</p>
                    </div>

                  </Link>

                  <Link href={project.github} target="_blank" className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/10 border border-white/30 text-white backdrop-blur-xl hover:scale-105 transition">

                    <div className="p-2 rounded-xl bg-white/20">
                      <GithubIcon size={18}/>
                    </div>

                    <div className="leading-tight text-left">
                      <p className="font-bold text-sm">GitHub</p>
                      <p className="text-[11px] opacity-80">Repository</p>
                    </div>

                  </Link>

                  <Link href={`${project.github}/blob/main/README.md`} target="_blank" className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/10 border border-white/30 text-white backdrop-blur-xl hover:scale-105 transition">

                    <div className="p-2 rounded-xl bg-white/20">
                      <Eye size={18}/>
                    </div>

                    <div className="leading-tight text-left">
                      <p className="font-bold text-sm">README.md</p>
                      <p className="text-[11px] opacity-80">Documentation</p>
                    </div>

                  </Link>
                  </div>

                </div>

              </div>

            </div>

          </motion.div>

        </motion.div>
        
        <div className="mt-20 grid md:grid-cols-2 gap-12">


          <motion.div initial={{opacity:0,x:-40}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:.6}}>

            <h2 className="text-3xl font-black text-gray-900 dark:text-white">
              About Project
            </h2>

            <p className="mt-5 text-white leading-relaxed">
              {project.desc}
            </p>

          </motion.div>



          <motion.div initial={{opacity:0,x:40}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:.6}}>

            <h2 className="text-3xl font-black text-gray-900 dark:text-white">
              Technologies
            </h2>


            <div className="flex flex-wrap gap-3 mt-5">

              {project.technologies.map((tech)=>(
                <span key={tech} className="px-4 py-2 rounded-xl bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-200 font-semibold hover:-translate-y-1 hover:border-purple-500 transition duration-300">
                  {tech}
                </span>
              ))}

            </div>

          </motion.div>


        </div>



        <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6}} className="mt-16 flex flex-wrap justify-center gap-4">


          <Link href={project.url} target="_blank" className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-gradient-to-r from-purple-700 to-pink-600 text-white shadow-lg hover:scale-105 transition duration-300">

            <div className="p-2 rounded-xl bg-white/20">
              <LinkIcon size={18}/>
            </div>

            <div className="leading-tight">
              <p className="font-bold text-sm">Live Demo</p>
              <p className="text-[11px] opacity-80">Visit Website</p>
            </div>

          </Link>



          <Link href={project.github} target="_blank" className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-gray-100 dark:bg-white/10 border border-gray-300 dark:border-white/20 hover:scale-105 transition duration-300">

            <div className="p-2 rounded-xl bg-purple-500/20">
              <GithubIcon size={18}/>
            </div>

            <div className="leading-tight text-gray-900 dark:text-white">
              <p className="font-bold text-sm">GitHub</p>
              <p className="text-[11px] opacity-70">Repository</p>
            </div>

          </Link>



          <Link href={`${project.github}/blob/main/README.md`} target="_blank" className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-gray-100 dark:bg-white/10 border border-gray-300 dark:border-white/20 hover:scale-105 transition duration-300">

            <div className="p-2 rounded-xl bg-purple-500/20">
              <Eye size={18}/>
            </div>

            <div className="leading-tight text-gray-900 dark:text-white">
              <p className="font-bold text-sm">README.md</p>
              <p className="text-[11px] opacity-70">Documentation</p>
            </div>

          </Link>



          <Link href="/projects#allProjects" className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-gray-100 dark:bg-white/10 border border-gray-300 dark:border-white/20 hover:scale-105 transition duration-300">

            <div className="p-2 rounded-xl bg-purple-500/20">
              <ArrowLeft size={18}/>
            </div>

            <div className="leading-tight text-gray-900 dark:text-white">
              <p className="font-bold text-sm">Go Back</p>
              <p className="text-[11px] opacity-70">All Projects</p>
            </div>

          </Link>


        </motion.div>



      </main>

    </div>
  )
}

export default ProjectnameClient