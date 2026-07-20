"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { FolderCode, GithubIcon, InfoIcon, LinkIcon } from "lucide-react"
import { SiNextdotjs, SiReact } from "react-icons/si"
import { Badge } from "@/components/ui/badge"
import { projects } from "../app/projects/projectsData"

const AllProjects = () => {

  const [filter, setFilter] = useState("all")

  const filteredProjects = filter === "all"
    ? projects
    : projects.filter(project => project.frameWork === filter)


  const filters = [
    {
      id: "all",
      name: "All Projects",
      icon: <FolderCode size={24} className="text-purple-600" />
    },
    {
      id: "next",
      name: "Next.js",
      icon: <SiNextdotjs size={24} />
    },
    {
      id: "react",
      name: "React.js",
      icon: <SiReact size={24} className="text-sky-400" />
    }
  ]


  return (
    <section className="min-h-screen md:mt-18 px-4 md:px-10 pb-10">


      <div className="flex justify-center text-center mb-7">

        <div>

          <h1 className="text-3xl font-black">
            My Work & Projects
          </h1>

          <p className="mt-3 text-gray-600  text-sm md:text-lg font-medium">
            From small ideas to complete applications — this is my work.
          </p>

        </div>

      </div>



      <div className="flex justify-center gap-2 md:gap-8 flex-wrap md:mb-8">

        {filters.map((item) => (

          <button
            key={item.id}
            onClick={() => setFilter(item.id)}
            className={`relative flex items-center gap-2 px-3 py-2 rounded-xl font-bold transition cursor-pointer ${filter === item.id
                ? "text-purple-600"
                : "hover:bg-black/5 dark:hover:bg-white/10"
              }`}
          >

            {item.icon}

            <span>
              {item.name}
            </span>


            {filter === item.id && (

              <motion.div
                layoutId="filter"
                className="absolute left-2 right-2 -bottom-1 h-[3px] rounded-full bg-purple-600"
              />

            )}

          </button>

        ))}


      </div>



      <div className="h-px bg-gray-200 dark:bg-white/10 max-w-5xl mx-auto mb-10" />


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto text-center md:text-start">
        {filteredProjects.map((project, index) => (

          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6, delay: index * 0.08 }}
            className="group relative rounded-3xl overflow-hidden bg-white/70 dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-lg hover:shadow-purple-500/20 transition duration-500"
          >


            <div className="relative aspect-[16/11] overflow-hidden">


              <Image
                src={project.img}
                alt={project.name}
                width={600}
                height={400}
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />



              {index < 3 && (

                <Badge className="absolute top-3 left-3 bg-purple-600 text-white border-0 px-3 py-1">
                  New
                </Badge>

              )}



              <Link
                href={`/projects/${project.id}`}
                className="absolute z-12 top-3 right-3 p-2 rounded-xl bg-black/40 backdrop-blur-md text-white hover:bg-purple-600 transition"
              >

                <InfoIcon size={18} />

              </Link>



              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-500 hidden lg:flex items-center justify-center">


                <div className="flex flex-col items-center gap-5">


                  <h2 className="text-2xl md:text-3xl font-black text-white text-center">
                    {project.name}
                  </h2>



                  <div className="flex flex-col gap-3">


                    <Link
                      href={project.url}
                      target="_blank"
                      className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-gradient-to-r from-purple-700 to-pink-600 text-white shadow-lg hover:scale-105 transition"
                    >

                      <div className="p-2 rounded-xl bg-white/20">
                        <LinkIcon size={18} />
                      </div>

                      <div className="leading-tight text-left">
                        <p className="font-bold text-sm">
                          Live Demo
                        </p>

                        <p className="text-[11px] opacity-80">
                          Open Website
                        </p>
                      </div>

                    </Link>




                    <Link
                      href={project.github}
                      target="_blank"
                      className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/10 border border-white/30 text-white backdrop-blur-xl hover:scale-105 transition"
                    >

                      <div className="p-2 rounded-xl bg-white/20">
                        <GithubIcon size={18} />
                      </div>


                      <div className="leading-tight text-left">
                        <p className="font-bold text-sm">
                          GitHub
                        </p>

                        <p className="text-[11px] opacity-80">
                          Source Code
                        </p>
                      </div>


                    </Link>


                  </div>


                </div>


              </div>


            </div>





            <div className="p-4">


              <h2 className="font-black text-lg md:text-xl text-gray-900 dark:text-white truncate">
                {project.name}
              </h2>



              <p className="mt-2 text-sm text-white line-clamp-2">
                {project.desc}
              </p>




              <div className="lg:hidden flex gap-3 mt-4">


                <Link
                  href={project.url}
                  target="_blank"
                  className="flex-1 flex justify-center items-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-r from-purple-700 to-pink-600 text-white text-sm font-bold"
                >

                  <LinkIcon size={15} />
                  Demo

                </Link>



                <Link
                  href={project.github}
                  target="_blank"
                  className="flex-1 flex justify-center items-center gap-2 px-3 py-2 rounded-xl bg-gray-100 dark:bg-white/10 border border-gray-300 dark:border-white/20 text-sm font-bold text-gray-900 dark:text-white"
                >

                  <GithubIcon size={15} />
                  Code

                </Link>


              </div>


            </div>


          </motion.div>

        ))}
      </div>

    </section>
  )
}

export default AllProjects