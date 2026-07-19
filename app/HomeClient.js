'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Typewriter from 'typewriter-effect';
import styles from "@/components/AnimatedBackground.module.css";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Database, FileText, Mail, Rocket } from "lucide-react";
import { projects } from "./projects/projectsData";
import AboutPreview from "@/components/AboutPreview";

export default function Home() {
  const [showIntro, setShowIntro] = useState(false);

const subject = encodeURIComponent("Inquiry About Your Portfolio");
const body = encodeURIComponent(
  "Hi Abad,\n\nI came across your portfolio and would like to get in touch with you regarding your projects/skills. Looking forward to connecting with you.\n\nBest regards,\n[Your Name]"
);

  useEffect(() => {
    const introShown = sessionStorage.getItem('introShown');
    if (!introShown) {
      setShowIntro(true);
      const timer = setTimeout(() => {
        setShowIntro(false);
        sessionStorage.setItem('introShown', 'true');
      }, 4500);

      return () => clearTimeout(timer);
    }
  }, []);

  if (showIntro) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0a0a] text-white overflow-hidden">
  
        <div className="absolute top-0 left-0 w-full h-px bg-white/10"/>
  
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[500px] h-[500px] rounded-full border border-white/5 animate-[spin_20s_linear_infinite]"/>
          <div className="absolute w-[350px] h-[350px] rounded-full border border-white/5 animate-[spin_15s_linear_infinite_reverse]"/>
        </div>
  
        <div className="relative z-10 flex flex-col items-center">
  
          <motion.div initial={{scale:.7,opacity:0}} animate={{scale:1,opacity:1}} transition={{duration:.8}} className="mb-10">
            <div className="relative">
              <div className="absolute -inset-5 rounded-full border border-white/10 animate-pulse"/>
              <Image src="/logo.png" alt="logo" width={100} height={100} className="rounded-3xl border border-white/20 shadow-2xl"/>
            </div>
          </motion.div>
  
  
          <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.3}} className="text-xs tracking-[0.5em] uppercase text-gray-500">
            Portfolio
          </motion.p>
  
  
          <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.5}} className="mt-4 text-5xl md:text-7xl font-black tracking-tight">
            Abad Ali
          </motion.h1>
  
  
          <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.8}} className="mt-5 text-gray-400 text-lg md:text-xl font-medium">
            <Typewriter
              options={{
                strings:[
                  "Full Stack Developer",
                  "Building Digital Experiences"
                ],
                autoStart:true,
                loop:true,
                pauseFor:1000,
                typeSpeed:40,
                deleteSpeed:30,
                cursor:""
              }}
            />
          </motion.div>
  
  
          <motion.div initial={{width:0}} animate={{width:120}} transition={{delay:1,duration:.8}} className="h-px bg-white/30 mt-10"/>
  
  
          <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.2}} className="mt-6 max-w-sm text-center text-sm text-gray-500 mx-2">
            Designing and developing modern web applications with clean code and thoughtful experiences.
          </motion.p>
  
        </div>
  
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <section className="flex justify-center items-center md:min-h-[70vh] animate-fade-in mt-32 lg:mt-0">
        <div className="lg:flex gap-15 m-4">
          <motion.div initial={{ opacity: 0, x: -70 }} viewport={{ once: true }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.2, ease: "easeInOut" }} className="flex flex-col justify-center items-center lg:items-start md:mt-7">
            <motion.h1 initial={{opacity:0,y:10}} viewport={{ once: true }} whileInView={{opacity:1,y:0}} transition={{delay:0.5}} className="font-bold text-4xl lg:text-5xl">Hey, I'm Abad Ali</motion.h1>
            <motion.span initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} transition={{delay:0.5}}className="font-bold text-[26px] md:text-3xl lg:text-4xl drop-shadow-lg bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">
              <Typewriter
                options={{
                  strings: ['Full Stack Web Developer', 'Frontend Developer', 'Backend Developer'],
                  autoStart: true,
                  loop: true,
                  pauseFor: 700,
                  typeSpeed: 100, 
                  backSpeed: 50,
                   cursor: "_"
                }}
              />
            </motion.span>
            <div className="max-w-lg text-center lg:text-start">
              <motion.p initial={{opacity:0,y:10}} viewport={{ once: true }} whileInView={{opacity:1,y:0}} transition={{delay:0.6}} className="text-medium md:text-[18px] mt-1">I’m a Full-Stack Developer passionate about building modern web applications, AI-driven solutions, and real-time systems that turn complex ideas into reliable digital experiences.</motion.p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 mt-4">
                {['Full-Stack Development','AI-Powered Applications','Real-Time Systems','Next.js & MERN Stack'].map((tech) => (
                  <motion.div initial={{opacity:0,y:7}} viewport={{ once: true }} whileInView={{opacity:1,y:0}} transition={{delay:0.7}}
                    key={tech}
                    className="group flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/20 hover:bg-purple-500/10 hover:border-purple-500/40 cursor-pointer duration-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 group-hover:scale-125 duration-300"></span>
                    <span className="text-xs sm:text-sm font-medium duration-300">
                      {tech}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="flex gap-3 justify-center items-center mt-5">
              {/* <Link href="/resume.pdf" target="_blank" className="backdrop-blur-lg bg-black/5 px-3 py-2.5 rounded-lg font-semibold cursor-pointer hover:bg-white/10 duration-300 border-[1] border-gray-200 transition-transform transform hover:scale-105">View Resume</Link>
              <Link href={'/projects'} className="backdrop-blur-lg bg-black/5 px-3 py-2.5 rounded-lg font-semibold cursor-pointer hover:bg-white/10 duration-300 border-[1] border-gray-200 transition-transform transform hover:scale-105">View Projects</Link> */}

              <div className="flex flex-wrap gap-4 mt-3 justify-center lg:justify-start">
                <motion.div
                initial={{opacity:0,y:10}}
                whileInView={{opacity:1,y:0}}
                transition={{delay:0.8}}>
                <Link
                  href="/resume.pdf"
                  target="_blank"
                  className="group relative flex items-center gap-3 px-6 py-3.5 rounded-2xl overflow-hidden md:backdrop-blur-xl bg-white/10 border border-gray-300 shadow-lg cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-600 opacity-0 group-hover:opacity-100 duration-500"></div>
                  <div className="relative z-10 flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-white/20 duration-300">
                    <FileText size={20} className="group-hover:rotate-12 duration-300"/>
                  </div>
                  <div>
                    <p className="font-bold">View Resume</p>
                    <p className="text-xs opacity-70">My Experience & Skills</p>
                  </div>
                  </div>
                </Link>
                </motion.div>

                <motion.div
                initial={{opacity:0,y:10}}
                whileInView={{opacity:1,y:0}}
                transition={{delay:0.9}}>
                <Link href="/projects" className="group relative flex items-center gap-3 px-6 py-3.5 rounded-2xl overflow-hidden bg-gradient-to-r from-purple-700 to-pink-600 text-white shadow-lg cursor-pointer">
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
              </div>
            </div>
          </motion.div>
          {/* <motion.div initial={{ opacity: 0, x: 70 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: "easeInOut" }} className="lg:mt-[15vh] flex flex-col justify-center items-center">
            <Image src='/avator.png' alt="hero_img" height={300} width={300} loading="eager" className="animate-float-space animate-float-space-scale drop-shadow-[0_3px_5px_rgba(126,34,206,0.6)] h-85 md:h-full w-70"></Image>
            <div className="w-55 h-50 bg-gradient-to-r from-purple-700 to-pink-600 rounded-full [transform:rotateX(-70deg)] shadow-[0_20px_40px_rgba(0,0,0,0.4)] -mt-7 border-[5] border-gray-200 hover:scale-110 duration-300 cursor-pointer"></div>
          </motion.div> */}

          <motion.div 
            initial={{ opacity: 0, x: 70 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }} 
            className="relative mt-10 lg:mt-[12vh] flex justify-center items-center">
          
            {/* Tech Orbit */}
            <motion.div
              animate={{ y:[0,-10,0] }}
              transition={{ duration:3, repeat:Infinity }}
              className="absolute top-20 -right-2 sm:right-0 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/40 md:backdrop-blur-lg text-xs sm:text-sm text-blue-300 font-semibold shadow-lg shadow-blue-500/30 z-20">
              React.js
            </motion.div>
          
            <motion.div
              animate={{ y:[0,10,0] }}
              transition={{ duration:3.5, repeat:Infinity }}
              className="absolute top-36 -left-3 sm:left-0 px-3 py-1 rounded-full bg-black/50 border border-white/20 md:backdrop-blur-lg text-xs sm:text-sm text-white font-semibold shadow-lg shadow-white/10 z-20">
              Next.js
            </motion.div>
          
            <motion.div
              animate={{ y:[0,-12,0] }}
              transition={{ duration:4, repeat:Infinity }}
              className="absolute bottom-36 right-0 sm:right-2 px-3 py-1 rounded-full bg-green-500/20 border border-green-400/40 md:backdrop-blur-lg text-xs sm:text-sm text-green-300 font-semibold shadow-lg shadow-green-500/30 z-20">
              Node.js
            </motion.div>
          
            <motion.div
              animate={{ y:[0,12,0] }}
              transition={{ duration:4.5, repeat:Infinity }}
              className="absolute bottom-28 -left-2 sm:left-0 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 md:backdrop-blur-lg text-xs sm:text-sm text-emerald-300 font-semibold shadow-lg shadow-emerald-500/30 z-20">
              MongoDB
            </motion.div>
          
            <motion.div
              animate={{ y:[0,-8,0] }}
              transition={{ duration:3.8, repeat:Infinity }}
              className="hidden sm:block absolute top-14 left-10 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/40 md:backdrop-blur-lg text-xs sm:text-sm text-cyan-300 font-semibold shadow-lg shadow-cyan-500/30 z-20">
              Tailwind
            </motion.div>
          
            <motion.div
              animate={{ y:[0,8,0] }}
              transition={{ duration:4.2, repeat:Infinity }}
              className="hidden sm:block absolute bottom-16 right-12 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-400/40 md:backdrop-blur-lg text-xs sm:text-sm text-orange-300 font-semibold shadow-lg shadow-orange-500/30 z-20">
              JavaScript
            </motion.div>
            {/* Glow */}
            <div className="absolute w-60 h-60 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-r from-purple-700 to-pink-600 md:blur-3xl opacity-25 hidden lg:inline" />
          
            {/* Image */}
            <motion.div initial={{opacity:0,y:10}} viewport={{ once: true }} whileInView={{opacity:1,y:0}} transition={{delay:0.3}} className="relative z-10 flex flex-col items-center">
          
          
              <Image 
                src="/avator.png" 
                alt="hero_img" 
                height={350} 
                width={350}
                loading="eager"
                className="animate-float-space animate-float-space-scale drop-shadow-[0_5px_15px_rgba(126,34,206,0.6)] w-64 sm:w-72 md:w-80"/>
          
              <div className=" w-52 h-44 sm:w-60 sm:h-48 bg-gradient-to-r from-purple-700 to-pink-600 rounded-full [transform:rotateX(-70deg)] shadow-[0_20px_40px_rgba(0,0,0,0.4)] -mt-10 border-[5px] border-gray-200/80 hover:scale-110 duration-300 cursor-pointer" />
            </motion.div>
          
          </motion.div>
        </div>
      </section>
      <motion.a initial={{opacity:0,y:10}} viewport={{ once:true }} whileInView={{opacity:1,y:0}} transition={{delay:0.5}} href={`mailto:abadali1707@gmail.com?subject=${subject}&body=${body}`} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="fixed bottom-5 right-5 z-20 p-3 rounded-2xl bg-slate-950 border border-slate-700 shadow-xl hover:border-red-500 duration-300">
        <Mail className="h-6 w-6 text-red-500 transition-transform duration-300 hover:scale-110 hover:rotate-12" />
        <div className="absolute inset-0 rounded-2xl bg-red-500/20 animate-ping pointer-events-none"></div>
      </motion.a>

     {/* About Me Preview */}

      <AboutPreview/>

     {/* Terminal */}

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div initial={{opacity:0,y:10}} viewport={{ once: true }} whileInView={{opacity:1,y:0}} transition={{delay:0.5}}
        className="text-center mb-8">
          <p className="text-purple-500 font-semibold">Developer Environment</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2"> Behind The <span className="bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">Code</span></h2>
          <p className="mt-3 max-w-xl mx-auto">A quick look at my development workflow, tools and deployment process.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl border border-white/10 bg-black/80 backdrop-blur-sm overflow-hidden"
        >       

          <div className="flex items-center gap-2 px-5 py-4 border-b border-white/10">       

            <span className="w-3 h-3 rounded-full bg-red-500"/>
            <span className="w-3 h-3 rounded-full bg-yellow-500"/>
            <span className="w-3 h-3 rounded-full bg-green-500"/>       

            <p className="ml-3 text-sm text-gray-400">
              abad@portfolio:~
            </p>       

          </div>       
      
          <div className="p-5 sm:p-7 font-mono text-sm sm:text-base space-y-4 text-gray-300">       

            <p>
              <span className="text-purple-400">$</span> npm run build
            </p>       

            <p className="text-green-400">
              ✔ Application compiled successfully
            </p>       

            <p>
              <span className="text-purple-400">$</span> database.connect()
            </p>       

            <p className="text-green-400">
              ✔ MongoDB connected
            </p>       

            <p>
              <span className="text-purple-400">$</span> deploy --production
            </p>       

            <p className="text-green-400">
              ✔ Deployment completed successfully
            </p>       

          </div>       

        </motion.div>       

      </section>       
      
      {/* Stats */}       

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">       

        <motion.div initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} transition={{delay:0.4}} className="grid grid-cols-1 sm:grid-cols-3 gap-5">       

          {
            [
              {
                icon: <Code2 />,
                number: `${projects.length+4}+`,
                title: "Projects Built"
              },
              {
                icon: <Rocket />,
                number: `${projects.length}+`,
                title: "Live Projects"
              },
              {
                icon: <Database />,
                number: "∞",
                title: "Learning"
              }
            ].map((item)=>(       

              <motion.div
                key={item.title}
                whileHover={{ y:-8 }}
                className="rounded-2xl p-6 bg-black/5 border border-white/10 text-center hover:border-purple-500 duration-300"
              >       

                <div className="text-purple-500 mb-3">
                  {item.icon}
                </div>       

                <h2 className="text-3xl font-bold">
                  {item.number}
                </h2>       

                <p className="font-semibold">
                  {item.title}
                </p>       

              </motion.div>       

            ))
          }       

        </motion.div>       

      </section>       
      
      {/* Tech Stack */}       

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pb-20">       

        <h2 className="text-3xl font-bold mb-8">
          Tech Stack
        </h2>       
      

        <div className="flex flex-wrap gap-3 justify-center">       

          {
            [
              "JavaScript",
              "React.js",
              "Next.js",
              "Redux Toolkit",
              "Tailwind CSS",
              "shadcn/ui",
              "Framer Motion",
            
              "Node.js",
              "Express.js",
              "REST APIs",
              "JWT",
              "bcrypt.js",
            
              "MongoDB",
              "Mongoose",
              "Cloudinary",
            
              "Google Gemini API",
              "Socket.IO",
              "Axios",
            
              "Git",
              "GitHub",
              "Postman",
              "Vercel",
              "Render",
            
              "C",
              "C++"
            ].map((skill)=>(       

              <motion.div
                key={skill}
                whileHover={{ scale:1.08 }}
                className="px-4 py-2 rounded-xl bg-black/5 border border-white/10 hover:border-purple-500 duration-300 text-sm"
              >       

                {skill}       

              </motion.div>       

            ))
          }       

        </div>       

      </section>
    </div>
  );
}