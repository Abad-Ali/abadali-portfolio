'use client'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FolderCode, GithubIcon } from 'lucide-react'
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
            <motion.div initial={{ opacity: 0, x: -70 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: "easeInOut" }} className='flex flex-col md:flex-row justify-center items-center gap-5'>
                <Avatar className="mt-[3vh] rounded-xl! shadow-lg shadow-black w-45 h-50 border-2 border-black rotate-15 hover:rotate-0  duration-700 hover:scale-110">
                  <AvatarImage className="w-full h-full object-cover rounded-lg transition-all duration-500 hover:grayscale" src='https://github.com/Abad-Ali.png' alt="Profile_pic"/>
                  <AvatarFallback>AA</AvatarFallback>
                </Avatar>
    
                <div className="flex justify-center mt-3 px-2">
                  <div>
                    <div className='flex justify-between items-center'>
                      <h1 className='font-black text-3xl bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent'>Abad Ali</h1>
                      <div>
                        <Link href="/resume.pdf" target="_blank"><button className='bg-gradient-to-r from-purple-700 to-pink-600 text-white px-4 py-2 rounded-lg text-lg md:text-xl font-bold duration-300 hover:cursor-pointer hover:scale-110'>Resume</button></Link>
                      </div>
                    </div>
                    <h2 className='font-extrabold text-[22px] md:text-2xl bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent'>
                      <Typewriter
                        options={{
                          strings: ['Frontend Developer', 'Backend Developer', 'Full Stack Web Developer'],
                          autoStart: true,
                          loop: true,
                          pauseFor: 700,
                          typeSpeed: 100, 
                          backSpeed: 50
                        }}
                      />
                    </h2>
    
                    <p className="max-w-lg md:text-[17px]">
                      Hi, I’m a final-year BCA student and a passionate web developer. I specialize in building full-stack web applications using <span className="font-semibold">React.js</span>, <span  className="font-semibold">Next.js</span>, <span className="font-semibold">Node.js</span>, <span className="font-semibold"> Express.js</span> and <span className="font-semibold">MongoDB</span>. I love creating responsive and interactive websites that solve real-world problems.
                    </p>
                  </div>
                </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 70 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: "easeInOut" }} className='md:ml-[10vw] grid grid-cols-3 justify-center items-center gap-3 md:gap-5 mt-5'>
              <button className='backdrop-blur-0 md:backdrop-blur-lg bg-black/7 px-2 md:px-7 py-4 rounded-lg cursor-pointer border-[1] border-gray-200 hover:scale-110 duration-300'>
                  <p className='text-sm text-gray-600 font-sans font-bold'>Specialty</p>
                  <p className='font-sans font-bold'>Full stack</p>
              </button>
    
              <button className='backdrop-blur-0 md:backdrop-blur-lg bg-black/7 px-2 md:px-7 py-4 rounded-lg cursor-pointer border-[1] border-gray-200 hover:scale-110 duration-300'>
                  <p className='text-sm text-gray-600 font-sans font-bold'>UI/UX</p>
                  <p className='font-sans font-bold'>User-friendly</p>
              </button>
    
              <button className='backdrop-blur-0 md:backdrop-blur-lg bg-black/7 px-2 md:px-7 py-4 rounded-lg cursor-pointer border-[1] border-gray-200 hover:scale-110 duration-300'>
                  <p className='text-sm text-gray-600 font-sans font-bold'>Focus</p>
                  <p className='font-sans font-bold'>Performance</p>
              </button>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 70 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: "easeInOut" }} className='md:ml-[10vw] flex justify-center items-center gap-5 mt-4'>
              <Link href='/projects' className='backdrop-blur-0 md:backdrop-blur-lg bg-black/7 px-7 py-3 rounded-lg cursor-pointer border-2 border-purple-700 hover:scale-110 duration-300'>
                  <p className='font-sans font-bold flex items-center gap-1'><FolderCode className='inline'/><span>Projects</span></p>
              </Link>

              <Link href='https://github.com/Abad-Ali' target='_blank' className='backdrop-blur-0 md:backdrop-blur-lg bg-black/7 px-7 py-3 rounded-lg cursor-pointer border-2 border-purple-700 hover:scale-110 duration-300'>
                  <p className='font-sans font-bold flex items-center gap-1'><GithubIcon className='inline'/><span>GitHub</span></p>
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeInOut" }} className='flex flex-col md:flex-row justify-center gap-1 md:gap-7 mt-10 bg-green-600/10 px-3 py-3 rounded-lg border-[1] border-gray-200 m-1 hover:scale-95 duration-300'>
              <span className='font-extrabold font-sans text-xl md:text-2xl text-green-700 my-auto'>Career Goals</span>
              <p className='max-w-lg font-semibold text-sm text-[16px] font-sans'>I am eager to work on challenging projects and continue learning new technologies. I am a team player, passionate about clean code, and enjoy creating engaging user experiences.</p>
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

        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeInOut" }} className="text-center mt-[5vh] m-1">
          <h2 className="font-black font-sans text-2xl mb-2">What’s Next</h2>
          <p className="max-w-xl mx-auto text-gray-600 font-semibold">
            I’m currently focused on improving my React and Node.js skills while exploring Next.js 
            and building real-world projects that challenge my creativity and logic.
          </p>
        
          <p className="mt-6 text-gray-600">
            When I’m not coding, you’ll find me exploring new design ideas or learning about emerging web technologies.
          </p>
        
          <div className="mt-8">
            <a href="/projects"className="text-purple-600 hover:underline font-semibold">
              → Check out my latest projects
            </a>
          </div>
        
          <p className="my-7 text-slate-500 text-sm">
            “Keep building. Keep learning.”
          </p>
        </motion.section>
      </section>
    </>
  )
}

export default About