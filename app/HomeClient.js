'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Typewriter from 'typewriter-effect';
import styles from "@/components/AnimatedBackground.module.css";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

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
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  if (showIntro) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-black text-white z-50">
        {/* for bg to show animated squares */}
        <div className={`${styles.context} absolute inset-0 pointer-events-none`}>
          <div className={styles.area}>
            <ul className={styles.circles}>
              {[...Array(10)].map((_, index) => (
                <li
                  key={index}
                  className={styles[`animate-circle-${index + 1}`]}
                />
              ))}
            </ul>
          </div>
        </div>
        <div><Image className="rounded-xl border-2 border-purple-700 mb-3 md:mb-5 hover:scale-110 duration-300 cursor-pointer" src='/logo.png' alt="logo" width={70} height={70}/></div>
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">Hey, Welcome To My Portfolio</h1>
        <span className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent text-end"><Typewriter
          options={{
            strings: ['Abad Ali'],
            autoStart: true,
            loop: true,
            pauseFor: 700,
            typeSpeed: 0,
            cursor: ''
          }}
        /></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <section className="flex justify-center items-center md:min-h-[70vh] animate-fade-in mt-32 lg:mt-0">
        <div className="lg:flex gap-12 m-4">
          <motion.div initial={{ opacity: 0, x: -70 }} viewport={{ once: true }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: "easeInOut" }} className="flex flex-col justify-center items-center md:mt-7">
            <h1 className="font-bold text-4xl lg:text-5xl">Hey, I'm Abad Ali</h1>
            <span className="font-bold text-[26px] md:text-3xl lg:text-4xl drop-shadow-lg bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">
              <Typewriter
                options={{
                  strings: ['Full Stack Web Developer', 'Frontend Developer', 'Backend Developer'],
                  autoStart: true,
                  loop: true,
                  pauseFor: 700,
                  typeSpeed: 100, 
                  backSpeed: 50
                }}
              />
            </span>
            <div className="max-w-lg text-center">
              <p className="text-medium md:text-[18px] mt-1">I specialize in building modern, scalable web applications using the latest technologies and learned these technologies:</p>
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {['React.js', 'Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Express.js', 'HTML', 'CSS', 'Js', 'C', 'C++', 'Python', 'DSA'].map((tech) => (
                  <span key={tech} className="px-3 py-1.5 bg-gray-300 text-gray-950 rounded-lg text-sm font-medium hover:scale-110 cursor-pointer duration-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-3 justify-center items-center mt-5">
              <Link href="/resume.pdf" target="_blank" className="backdrop-blur-lg bg-black/5 px-3 py-2.5 rounded-lg font-semibold cursor-pointer hover:bg-white/10 duration-300 border-[1] border-gray-200 transition-transform transform hover:scale-105">View Resume</Link>
              <Link href={'/projects'} className="backdrop-blur-lg bg-black/5 px-3 py-2.5 rounded-lg font-semibold cursor-pointer hover:bg-white/10 duration-300 border-[1] border-gray-200 transition-transform transform hover:scale-105">View Projects</Link>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 70 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: "easeInOut" }} className="lg:mt-[15vh] flex flex-col justify-center items-center">
            <Image src='/avator.png' alt="hero_img" height={300} width={300} loading="eager" className="animate-float-space animate-float-space-scale drop-shadow-[0_3px_5px_rgba(126,34,206,0.6)] h-85 md:h-full w-70"></Image>
            <div className="w-55 h-50 bg-gradient-to-r from-purple-700 to-pink-600 rounded-full [transform:rotateX(-70deg)] shadow-[0_20px_40px_rgba(0,0,0,0.4)] -mt-7 border-[5] border-gray-200 hover:scale-110 duration-300 cursor-pointer"></div>
          </motion.div>
        </div>
      </section>
      <motion.a
        href={`mailto:abadali1707@gmail.com?subject=${subject}&body=${body}`}
        whileHover={{ scale: 1.15, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-5 right-5 z-20 p-3 rounded-full bg-gradient-to-r from-purple-700/90 to-pink-600/90 border-2">
        <Mail className="h-7 w-7 text-white transition-transform duration-300 hover:scale-105 hover:text-red-600 hover:rotate-12 hover:animate-bounce" />
        <div className="absolute inset-0 rounded-full animate-ping bg-pink-500/30 pointer-events-none"></div>
      </motion.a>
    </div>
  );
}
