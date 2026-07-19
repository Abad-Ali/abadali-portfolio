// 'use client'
// import React, { useRef, useState } from 'react'
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Label } from '@/components/ui/label'
// import { Button } from '@/components/ui/button'
// import { DownloadIcon, GithubIcon, InstagramIcon, Linkedin, Loader2, MailIcon, MapPin, MessageCircleIcon, Send, User2Icon } from 'lucide-react'
// import emailjs from '@emailjs/browser';
// import { toast } from 'sonner'
// import Link from 'next/link'
// import { motion } from "framer-motion";

// const Contact = () => {
//   const form = useRef();
//   const [loading, setLoading] = useState(false);

//   const sendEmail = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     emailjs
//     .sendForm(`${process.env.NEXT_PUBLIC_SERVICE_ID}`, `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`, form.current, {
//       publicKey: `${process.env.NEXT_PUBLIC_PUBLIC_KEY}`,
//     })
//     .then(
//       () => {
//         console.log('SUCCESS!');
//         form.current.reset();
//         toast.success("Message sent successfully!")
//       }
//     )
//     .catch((error) => {
//       console.log('FAILED...', error.text);
//       toast.error('Failed to send message. Try again.');
//     })
//     .finally(() => {
//       setLoading(false);
//     });
//   };

//   return (
//     <div className='lg:mt-[20vh] mt-32 flex flex-col justify-center items-center animate-fade-in'>
//       <div className='text-center mx-3'>
//         <h1 className='text-3xl font-bold'>Let's Work Together</h1>
//         <p className='text-gray-500'>I'd love to hear from you! Drop a message below.</p>
//       </div>

//       <div className='lg:w-[90vw] lg:h-[70vh] mb-7 lg:mb-0'>
//         <div className='flex flex-col lg:flex-row justify-center items-center lg:gap-32 lg:mt-3'>
//           <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeInOut" }} className='flex flex-col justify-center items-center'>
//             <Avatar className="mt-[3vh] rounded-xl! shadow-lg shadow-black w-45 h-50 border-2 border-black md:rotate-15 hover:rotate-0  duration-700 hover:scale-110">
//               <AvatarImage className="w-full h-full object-cover rounded-lg transition-all duration-500" src='https://github.com/Abad-Ali.png' alt="Profile_pic"/>
//               <AvatarFallback>AA</AvatarFallback>
//             </Avatar>
//             <h2 className='mt-5 md:mt-[4vh] text-xl font-extrabold bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent'>{"< Abad Ali />"}</h2>

//             <div>
//               <div className='flex justify-center items-center gap-7 mt-2 backdrop-blur-lg bg-white/7 w-fit px-7 py-2 rounded-4xl border-[1] border-black hover:scale-110 duration-300 cursor-pointer'>
//                 <a href='https://www.linkedin.com/in/abad-ali-0649103a2' target="_blank" className="transition-transform duration-300 hover:scale-150 hover:text-blue-700 hover:rotate-12 hover:animate-bounce"><Linkedin className='w-6 h-6'/></a>
//                 <a href='https://www.instagram.com/abadali_17' target="_blank" className="transition-transform duration-300 hover:scale-150 hover:rotate-12 hover:text-pink-500 hover:animate-bounce"><InstagramIcon className='w-6 h-6'/></a>
//                 <a href='https://github.com/Abad-Ali'  target="_blank" className="transition-transform duration-300 hover:scale-150 hover:text-slate-50 hover:rotate-12 hover:animate-bounce"><GithubIcon className='w-6 h-6'/></a>
//                 <a href='mailto:abadali1707@gmail.com'  className="transition-transform duration-300 hover:scale-150 hover:text-red-600 hover:rotate-12 hover:animate-bounce"><MailIcon className='w-6 h-6'/></a>
//                 {/* href="https://mail.google.com/mail/?view=cm&fs=1&to=afghfh@gmail.com" */}
//               </div>

//               <div className='text-center'>
//                 <Link href="/resume.pdf" target="_blank" className="mt-4 inline-block bg-purple-700 text-white w-full py-2 rounded-md shadow-md hover:bg-purple-700/70 transition-colors duration-400 hover:cursor-pointer" >
//                   <span className='flex justify-center items-center gap-2'><DownloadIcon className='w-5 h-5'/>Download Resume</span>
//                 </Link>
//               </div>
//             </div>

//             <Link href="https://www.google.com/maps?q=Shahjahanpur,Uttar+Pradesh,India" target="_blank" rel="noopener noreferrer" className='mt-3 flex justify-center items-start gap-1 text-[13px] md:text-[16px] cursor-pointer group'>
//               <MapPin className='h-4 w-4 md:h-5 md:w-5 transition-transform duration-300 group-hover:scale-150 group-hover:animate-bounce group-hover:text-blue-700' />
//               <span>Shahjahanpur, Uttar Pradesh, India · Open to relocation</span>
//             </Link>
//           </motion.div>

//           <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeInOut" }} className='mt-7 md:mt-[5vh] w-full md:w-xl lg:w-[30vw] backdrop-blur-lg bg-black/20 px-5 pb-4 rounded-lg text-gray-200 border-[1] border-b-gray-200 hover:scale-105 duration-300 cursor-pointer'>
//             <form ref={form} onSubmit={sendEmail} className='lg:m-3'> 
//               <div>
//                 <div className="mt-5 flex flex-col gap-2">   
//                   <Label htmlFor="name"><User2Icon/><span>Your name</span></Label>
//                   <input className='border-[1] border-b-gray-200 rounded-sm pl-2 p-1' name="user_name" autoComplete="name" id="name" type="text" placeholder="Enter your name" required maxLength={30}/>
//                 </div>
    
//                 <div className="mt-5 flex flex-col gap-2">
//                   <Label htmlFor="email"><MailIcon/> <span>Your Email</span></Label>
//                   <input className='border-[1] border-b-gray-200 rounded-sm pl-2 p-1' name="user_email" autoComplete="email" id="email" type="email" placeholder="Enter your email" required maxLength={50}/>
//                 </div>
//               </div>
  
//               <div className="mt-5 flex flex-col gap-2">
//                 <Label htmlFor="message"><MessageCircleIcon/><span>Message</span></Label>
//                 <textarea className='h-[15vh] border-[1] border-b-gray-200 rounded-sm pl-2 p-1' name="message" id="message" placeholder="Write your message here..." rows={5} required />
//               </div>
  
//               <Button value="Send" type="submit" className="w-full py-2 mt-5 bg-purple-700 cursor-pointer hover:bg-purple-700/70">
//                 {loading ? <div className='flex justify-center items-center gap-2'><Loader2 className='animate-spin'/> <span>Please wait...</span></div> : <div className='flex justify-center items-center gap-1'><Send/><span>Send Message</span></div>}
//               </Button>
//             </form>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Contact





'use client'

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  MapPin,
  FileText,
  Send,
  Loader2,
  User,
  MessageCircle
} from "lucide-react";

const Contact = () => {
  const form = useRef();
  const [loading,setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      process.env.NEXT_PUBLIC_SERVICE_ID,
      process.env.NEXT_PUBLIC_TEMPLATE_ID,
      form.current,
      {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY
      }
    )
    .then(() => {
      form.current.reset();
      toast.success("Message sent successfully!");
    })
    .catch(() => {
      toast.error("Failed to send message.");
    })
    .finally(() => {
      setLoading(false);
    });

  };

  return (
    <section className="mt-16 px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h1 className="mt-3 text-4xl font-black">
            Let's build something
            <span className="bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">
              {" "}great.
            </span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600 font-semibold text-sm">
            Have a project idea, collaboration, or opportunity?
            I would love to connect and create something meaningful.
          </p>
        </div>
        <div className="mt-8 grid lg:grid-cols-5 gap-6">
          <motion.div initial={{opacity:0,x:-40}} whileInView={{opacity:1,x:0}} transition={{duration:0.8}} viewport={{once:true}} className="lg:col-span-2 rounded-3xl p-6 bg-white/5 md:backdrop-blur-lg border border-gray-200/40 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"/>
              <p className="font-bold">
                Available for opportunities
              </p>
            </div>
            <div className="mt-6 flex items-center gap-4">
              <Avatar className="w-16 h-16 rounded-2xl border-2 border-purple-600 shadow-lg">
                <AvatarImage src="https://github.com/Abad-Ali.png" className="object-cover"/>
                <AvatarFallback>
                  AA
                </AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-3xl font-black">
                  Abad Ali
                </h2>
                <p className="text-purple-600 font-bold">
                  Full Stack Developer
                </p>
              </div>
            </div>
            <p className="mt-5 text-gray-600 font-medium leading-relaxed">
              I build modern web applications with React, Next.js,
              Node.js and other technologies while focusing on
              performance, clean code and user experience.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="https://github.com/Abad-Ali" target="_blank" className="group relative flex items-center gap-2 px-4 py-3 rounded-2xl overflow-hidden md:backdrop-blur-xl bg-white/10 border border-gray-300 shadow-lg cursor-pointer hover:scale-105 transition-all duration-300">
                <div className="absolute inset-0 bg-black/20 translate-x-full group-hover:translate-x-0 transition-transform duration-500"/>
                <Github className="relative z-10 group-hover:rotate-12 transition duration-300"/>
                <span className="relative z-10 font-bold">
                  GitHub
                </span>
              </Link>
              <Link href="https://www.linkedin.com/in/abad-ali-0649103a2" target="_blank" className="group relative flex items-center gap-2 px-4 py-3 rounded-2xl overflow-hidden md:backdrop-blur-xl bg-white/10 border border-gray-300 shadow-lg cursor-pointer hover:scale-105 transition-all duration-300">
                <div className="absolute inset-0 bg-blue-600/20 translate-x-full group-hover:translate-x-0 transition-transform duration-500"/>
                <Linkedin className="relative z-10 group-hover:rotate-12 transition duration-300"/>
                <span className="relative z-10 font-bold">
                  LinkedIn
                </span>
              </Link>
              <Link href="https://www.instagram.com/abadali_17" target="_blank" className="group relative flex items-center gap-2 px-4 py-3 rounded-2xl overflow-hidden md:backdrop-blur-xl bg-white/10 border border-gray-300 shadow-lg cursor-pointer hover:scale-105 transition-all duration-300">
                <div className="absolute inset-0 bg-pink-500/20 translate-x-full group-hover:translate-x-0 transition-transform duration-500"/>
                <Instagram className="relative z-10 group-hover:rotate-12 transition duration-300"/>
                <span className="relative z-10 font-bold">
                  Instagram
                </span>
              </Link>
            </div>
            <Link href="/resume.pdf" target="_blank" className="group relative mt-5 flex items-center justify-center gap-3 px-6 py-3 rounded-2xl overflow-hidden bg-gradient-to-r from-purple-700 to-pink-600 text-white shadow-lg cursor-pointer hover:scale-105 transition-all duration-300">
              <div className="absolute inset-0 bg-black/20 translate-x-full group-hover:translate-x-0 transition-transform duration-500"/>
              <div className="relative z-10 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-white/20 group-hover:bg-white/30 duration-300">
                  <FileText size={20} className="group-hover:rotate-12 duration-300"/>
                </div>
                <div>
                  <p className="font-bold">
                    View Resume
                  </p>
                  <p className="text-xs opacity-80">
                    Experience & Skills
                  </p>
                </div>
              </div>
            </Link>
            <div className="mt-5 flex items-center gap-2 text-sm text-gray-600 font-semibold">
              <MapPin size={18}/>
              Shahjahanpur, Uttar Pradesh, India
            </div>
          </motion.div>
          <motion.div initial={{opacity:0,x:40}} whileInView={{opacity:1,x:0}} transition={{duration:0.8}} viewport={{once:true}} className="lg:col-span-3 rounded-3xl p-6 bg-white/5 md:backdrop-blur-lg border border-gray-200/40 shadow-xl">
            <h2 className="text-3xl font-black">
              Send a message
            </h2>
            <p className="mt-2 text-gray-600 font-semibold">
              I usually reply within 24 hours.
            </p>

            <form ref={form} onSubmit={sendEmail} className="mt-6 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center gap-2 font-bold mb-2">
                    <User size={18}/>
                    Name
                  </label>
                  <input name="user_name" required placeholder="Your name" className="w-full p-3 rounded-xl bg-white/10 border border-gray-300 outline-none"/>
                </div>
                <div>
                  <label className="flex items-center gap-2 font-bold mb-2">
                    <Mail size={18}/>
                    Email
                  </label>
                  <input name="user_email" required type="email" placeholder="Your email" className="w-full p-3 rounded-xl bg-white/10 border border-gray-300 outline-none"/>
                </div>
              </div>
              <div>
                <label className="flex items-center gap-2 font-bold mb-2">
                  <MessageCircle size={18}/>
                  Message
                </label>
                <textarea name="message" required placeholder="Write your message..." className="w-full h-36 p-3 rounded-xl bg-white/10 border border-gray-300 outline-none resize-none"/>
              </div>
              <button type="submit" className="group relative w-full flex items-center bg-gradient-to-r from-purple-700 to-pink-600 justify-center gap-3 px-6 py-3.5 rounded-2xl overflow-hidden  border border-gray-300 shadow-lg cursor-pointer hover:scale-[1.02] transition-all duration-300 text-white">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-700 opacity-0 group-hover:opacity-100 duration-500"/>
                <div className="relative z-10 flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-white/20 duration-300 flex justify-center items-center">
                    {loading ? <Loader2 className="animate-spin"/> : <Send className="group-hover:scale-105 duration-300 pr-0.5"/>}
                  </div>
                  <div>
                    <p className="font-bold">
                      {loading ? "Sending..." : "Send Message"}
                    </p>
                    <p className="text-xs opacity-70">
                      Let's connect & build
                    </p>
                  </div>
                </div>
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <motion.section initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} transition={{duration:0.8}} viewport={{once:true}} className="mt-14 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-black">
              Why Work With Me
            </h2>
            <p className="mt-3 text-gray-600 font-semibold text-sm">
              Building reliable products with clean code and modern technologies.
            </p>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="rounded-3xl p-6 bg-white/5 md:backdrop-blur-xl border border-gray-200/40 shadow-xl hover:-translate-y-2 transition duration-300">
              <div className="w-12 h-12 rounded-2xl bg-purple-600/10 flex items-center justify-center text-purple-600 font-black text-xl">
                01
              </div>
              <h3 className="mt-5 text-xl font-black">
                Clean Development
              </h3>
              <p className="mt-3 text-gray-600 font-medium text-sm leading-relaxed">
                I focus on writing structured, maintainable code that is easy to understand, improve, and scale.
              </p>
            </div>
            <div className="rounded-3xl p-6 bg-white/5 md:backdrop-blur-xl border border-gray-200/40 shadow-xl hover:-translate-y-2 transition duration-300">
              <div className="w-12 h-12 rounded-2xl bg-pink-600/10 flex items-center justify-center text-pink-600 font-black text-xl">
                02
              </div>
              <h3 className="mt-5 text-xl font-black">
                Problem Solving
              </h3>
              <p className="mt-3 text-gray-600 font-medium text-sm leading-relaxed">
                I enjoy solving technical challenges and transforming ideas into practical digital solutions.
              </p>
            </div>
            <div className="rounded-3xl p-6 bg-white/5 md:backdrop-blur-xl border border-gray-200/40 shadow-xl hover:-translate-y-2 transition duration-300">
              <div className="w-12 h-12 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-600 font-black text-xl">
                03
              </div>
              <h3 className="mt-5 text-xl font-black">
                Continuous Growth
              </h3>
              <p className="mt-3 text-gray-600 font-medium text-sm leading-relaxed">
                I continuously explore new technologies and improve my skills to build better experiences.
              </p>
            </div>
          </div>
          <div className="mt-8 rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-purple-700/10 to-pink-600/10 md:backdrop-blur-xl border border-gray-200/40 shadow-xl text-center">
            <h3 className="text-2xl font-black">
              Have an idea in mind?
            </h3>
            <p className="mt-3 text-gray-600 font-semibold">
              Let's discuss it and create something meaningful together.
            </p>
      
            <div className="flex justify-center mt-3">
              <Link href="mailto:abadali1707@gmail.com" className="group relative w-fit flex items-center gap-3 px-6 py-3.5 rounded-2xl overflow-hidden bg-gradient-to-r from-purple-700 to-pink-600 text-white shadow-lg cursor-pointer hover:scale-105 transition-all duration-300">
                <div className="absolute inset-0 bg-black/20 translate-x-full group-hover:translate-x-0 duration-500"/>
                <div className="relative z-10 flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-white/20 group-hover:bg-white/30 duration-300">
                    <Mail size={20} className="group-hover:rotate-12 duration-300"/>
                  </div>
                  <div>
                    <p className="font-bold">
                      Start Conversation
                    </p>
                    <p className="text-xs opacity-80">
                      Let's discuss ideas
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
      </section>
  )
}
export default Contact;