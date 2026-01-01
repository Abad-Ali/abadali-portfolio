'use client'
import React from 'react'
import Image from "next/image"
import Link from "next/link"
import { Eye, GithubIcon, LinkIcon} from "lucide-react"
import { motion } from "framer-motion";

const ProjectnameClient = ({project}) => {
  return (
    <div className="min-h-screen mt-8 px-1 md:px-6 pt-20 pb-7 flex justify-center">
      <div className="max-w-4xl w-full space-y-3 md:space-y-6">

        <h1 className="text-4xl font-black bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent text-center md:text-start">
          {project.name}
        </h1>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1 }} className="relative group hover:scale-95 duration-300 shadow-lg hover:shadow-[0_4px_15px_rgba(124,58,237,0.5)]">
          <Image
          src={project.img}
          alt={project.name}
          width={900}
          height={500}
          className="rounded-xl border-2 border-gray-200 lg:h-125"/>

          <div className=" w-full h-full absolute top-0 backdrop-blur-xs bg-black/20 duration-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center space-y-5 pointer-events-none lg:pointer-events-auto cursor-pointer">
                <div className="flex justify-center gap-5 font-semibold">
                 <Link href={project.url} target="_blank" className="flex items-center gap-2 px-5 py-2 bg-purple-700 text-white rounded-lg cursor-pointer hover:scale-105 duration-300">
                     <LinkIcon /> Live Demo
                 </Link>
       
                 <Link href={project.github} target="_blank" className="flex items-center gap-2 px-5 py-2 border rounded-lg cursor-pointer hover:scale-105 duration-300 text-white">
                    <GithubIcon /> GitHub
                 </Link>
               </div>
       
               <div className="flex justify-center">
                 <Link href='/projects#allProjects' className="flex items-center gap-2 px-5 py-2 border rounded-lg cursor-pointer font-semibold hover:scale-105 duration-300 text-white">
                   <Eye size={20} strokeWidth={2.5}/>View all projects
                 </Link>
               </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: -70 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }}>
          <span className="font-semibold text-purple-700 text-2xl">Description:</span>
          <p className="font-semibold text-[17px] md:text-lg">
            {project.desc}
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 70 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }}>
          <span className="font-bold text-purple-700 text-3xl">Technologies used:</span>
          <div className="flex flex-wrap justify-center gap-2 max:w-lg mx-0 md:mx-25 mt-2">
              {project.technologies.map((tech) => (
                <div key={tech} className="bg-gray-300 text-gray-950 px-3 py-1.5 rounded-lg w-fit hover:scale-105 duration-300 cursor-pointer">{tech}</div>
              ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: -70 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }}>
          <span className="font-bold text-purple-700 text-3xl mt-2">Other links:</span>
          <div className="flex justify-center gap-5 font-semibold mt-2">
            <Link href={project.url} target="_blank" className="flex items-center gap-2 px-5 py-2 bg-purple-700 text-white rounded-lg cursor-pointer hover:scale-105 duration-300">
                <LinkIcon /> Live Demo
            </Link>
  
            <Link href={project.github} target="_blank" className="flex items-center gap-2 px-5 py-2 border rounded-lg cursor-pointer hover:scale-105 duration-300">
                <GithubIcon /> GitHub
            </Link>
          </div>
  
          <div className="flex justify-center mt-4">
            <Link href='/projects#allProjects' className="flex items-center gap-2 px-5 py-2 border rounded-lg cursor-pointer font-semibold hover:scale-105 duration-300">
              <Eye size={20} strokeWidth={2.5}/>View all projects
            </Link>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }} className="text-center"><Link href={`${project.github}/blob/main/README.md`} target="_blank">For more information visit <span className="text-purple-700 underline underline-offset-2 font-semibold">README.md</span></Link></motion.div>
      </div>
    </div>
  )
}

export default ProjectnameClient
