'use client'

import React from 'react'
import Image from "next/image"
import Link from "next/link"
import { GithubIcon, LinkIcon, Eye, ArrowLeft, Code2, Layers3, Globe } from "lucide-react"
import { motion } from "framer-motion"

const ProjectnameClient = ({ project }) => {
  return (
    <div className="min-h-screen px-4 sm:px-6 md:px-10 pt-24 pb-12 overflow-hidden mt-10">

      <main className="max-w-6xl mx-auto relative z-10">

        <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:.7}} className="grid lg:grid-cols-[1fr_1.2fr] gap-10 items-center">

          <div>

            <span className="text-sm font-semibold text-[#2563eb]">
              Project Showcase
            </span>

            <h1 className="mt-3 text-3xl sm:text-4xl md:text-6xl font-black ">
              {project.name}
            </h1>

            <p className="mt-5 text-base md:text-lg leading-relaxed">
              {project.desc}
            </p>


            <div className="flex flex-wrap gap-3 mt-8">

              <Link href={project.url} target="_blank" className="group relative flex items-center gap-3 px-5 py-3 rounded-2xl overflow-hidden bg-gradient-to-r from-[#2563eb] via-[#3b82f6] to-[#06b6d4] text-white shadow-lg hover:scale-105 transition duration-500">

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

                <div className="p-2 rounded-xl bg-white/20">
                  <GithubIcon size={18}/>
                </div>

                <div className="leading-tight">
                  <p className="font-bold text-sm">GitHub</p>
                  <p className="text-[11px] opacity-70">Source Code</p>
                </div>

              </Link>

            </div>

          </div>


          <motion.div initial={{opacity:0,scale:.9}} animate={{opacity:1,scale:1}} transition={{duration:.7}} className="relative group">

            <div className="absolute -inset-5 bg-gradient-to-r from-[#2563eb]/20 via-[#3b82f6]/20 to-[#06b6d4]/20 blur-3xl rounded-full"/>

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
                    <h1 className="mt-3 text-3xl sm:text-4xl md:text-6xl font-black text-gray-900 dark:text-white text-center">
                      {project.name}
                    </h1>
                  </div>

                  <div className='flex flex-col sm:flex-row flex-wrap justify-center gap-3'>
                  <Link href={project.url} target="_blank" className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-gradient-to-r from-[#2563eb] via-[#3b82f6] to-[#06b6d4] text-white shadow-lg hover:scale-105 transition">

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

            <h2 className="text-3xl font-black">
              About Project
            </h2>

            <p className="mt-5 leading-relaxed">
              {project.desc}
            </p>

          </motion.div>



          <motion.div initial={{opacity:0,x:40}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:.6}}>

            <h2 className="text-3xl font-black">
              Technologies
            </h2>


            <div className="flex flex-wrap gap-3 mt-5">

              {project.technologies.map((tech)=>(
                <span key={tech} className="px-4 py-2 rounded-xl bg-white/10 border border-gray-200 dark:border-white/10 font-semibold hover:-translate-y-1 hover:border-blue-700 transition duration-300">
                  {tech}
                </span>
              ))}

            </div>

          </motion.div>

        </div>

        <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .6 }}className="mt-24">
          <div className="text-center">        

            <h2 className="text-4xl font-black">
              Project Overview
            </h2>        

            <p className="mt-4 max-w-2xl mx-auto text-gray-600 font-semibold">
              A quick look at the framework, technology scale, deployment status, and project availability.
            </p>        

          </div>        

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">        

            <div className="rounded-3xl border border-white/50 p-8 text-center hover:border-blue-600 transition">        

              <Code2 size={40} className="mx-auto text-blue-600" />        

              <h3 className="mt-5 text-4xl font-black">
                {project.technologies.length}
              </h3>        

              <p className="mt-2 text-gray-600">
                Technologies
              </p>        

            </div>        

            <div className="rounded-3xl border border-white/50 p-8 text-center hover:border-purple-600 transition">        

              <Layers3 size={40} className="mx-auto text-purple-600" />        

              <h3 className="mt-5 text-2xl font-black">
                {project.frameWork === "next" ? "Next.js" : "React.js"}
              </h3>        

              <p className="mt-2 text-gray-600">
                Framework
              </p>        

            </div>        

            <div className="rounded-3xl border border-white/50 p-8 text-center hover:border-green-600 transition">        

              <Globe size={40} className="mx-auto text-green-600" />        

              <h3 className="mt-5 text-2xl font-black">
                Live
              </h3>        

              <p className="mt-2 text-gray-600">
                Deployed
              </p>        

            </div>        

            <div className="rounded-3xl border border-white/50 p-8 text-center hover:border-blue-600 transition">        

              <GithubIcon size={40} className="mx-auto" />        

              <h3 className="mt-5 text-2xl font-black">
                Open Source
              </h3>        

              <p className="mt-2 text-gray-600">
                GitHub
              </p>        

            </div>        

          </div>        

        </motion.section>

        <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6}} className="mt-16 flex flex-wrap justify-center gap-4 lg:max-w-lg mx-auto">


          <Link href={project.url} target="_blank" className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-gradient-to-r from-[#2563eb] via-[#3b82f6] to-[#06b6d4] text-white shadow-lg hover:scale-105 transition duration-300">

            <div className="p-2 rounded-xl bg-white/20">
              <LinkIcon size={18}/>
            </div>

            <div className="leading-tight">
              <p className="font-bold text-sm">Live Demo</p>
              <p className="text-[11px] opacity-80">Visit Website</p>
            </div>

          </Link>



          <Link href={project.github} target="_blank" className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/10 border border-gray-300 dark:border-white/20 hover:scale-105 transition duration-300">

            <div className="p-2 rounded-xl bg-white/20">
              <GithubIcon size={18}/>
            </div>

            <div className="leading-tight">
              <p className="font-bold text-sm">GitHub</p>
              <p className="text-[11px] opacity-70">Repository</p>
            </div>

          </Link>



          <Link href={`${project.github}/blob/main/README.md`} target="_blank" className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-gray-100 dark:bg-white/10 border border-gray-300 dark:border-white/20 hover:scale-105 transition duration-300">

            <div className="p-2 rounded-xl bg-white/20">
              <Eye size={18}/>
            </div>

            <div className="leading-tight">
              <p className="font-bold text-sm">README.md</p>
              <p className="text-[11px] opacity-70">Documentation</p>
            </div>

          </Link>



          <Link href="/projects#allProjects" className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-gray-100 dark:bg-white/10 border border-gray-300 dark:border-white/20 hover:scale-105 transition duration-300">

            <div className="p-2 rounded-xl bg-white/20">
              <ArrowLeft size={18}/>
            </div>

            <div className="leading-tight">
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