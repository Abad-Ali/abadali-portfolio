'use client'
import React, { useRef, useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { DownloadIcon, GithubIcon, InstagramIcon, Linkedin, Loader2, MailIcon, MapPin, MessageCircleIcon, Send, User2Icon } from 'lucide-react'
import emailjs from '@emailjs/browser';
import { toast } from 'sonner'
import Link from 'next/link'
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
    .sendForm(`${process.env.NEXT_PUBLIC_SERVICE_ID}`, `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`, form.current, {
      publicKey: `${process.env.NEXT_PUBLIC_PUBLIC_KEY}`,
    })
    .then(
      () => {
        console.log('SUCCESS!');
        form.current.reset();
        toast.success("Message sent successfully!")
      }
    )
    .catch((error) => {
      console.log('FAILED...', error.text);
      toast.error('Failed to send message. Try again.');
    })
    .finally(() => {
      setLoading(false);
    });
  };

  return (
    <div className='lg:mt-[20vh] mt-32 flex flex-col justify-center items-center animate-fade-in'>
      <div className='text-center mx-3'>
        <h1 className='text-3xl font-bold'>Let's Work Together</h1>
        <p className='text-gray-500'>I'd love to hear from you! Drop a message below.</p>
      </div>

      <div className='lg:w-[90vw] lg:h-[70vh] mb-7 lg:mb-0'>
        <div className='flex flex-col lg:flex-row justify-center items-center lg:gap-32 lg:mt-3'>
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeInOut" }} className='flex flex-col justify-center items-center'>
            <Avatar className="mt-[3vh] rounded-xl! shadow-lg shadow-black w-45 h-50 border-2 border-black md:rotate-15 hover:rotate-0  duration-700 hover:scale-110">
              <AvatarImage className="w-full h-full object-cover rounded-lg transition-all duration-500" src='https://github.com/Abad-Ali.png' alt="Profile_pic"/>
              <AvatarFallback>AA</AvatarFallback>
            </Avatar>
            <h2 className='mt-5 md:mt-[4vh] text-xl font-extrabold bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent'>{"< Abad Ali />"}</h2>

            <div>
              <div className='flex justify-center items-center gap-7 mt-2 backdrop-blur-lg bg-white/7 w-fit px-7 py-2 rounded-4xl border-[1] border-black hover:scale-110 duration-300 cursor-pointer'>
                <a href='https://www.linkedin.com/in/abad-ali-0649103a2' target="_blank" className="transition-transform duration-300 hover:scale-150 hover:text-blue-700 hover:rotate-12 hover:animate-bounce"><Linkedin className='w-6 h-6'/></a>
                <a href='https://www.instagram.com/abadali_17' target="_blank" className="transition-transform duration-300 hover:scale-150 hover:rotate-12 hover:text-pink-500 hover:animate-bounce"><InstagramIcon className='w-6 h-6'/></a>
                <a href='https://github.com/Abad-Ali'  target="_blank" className="transition-transform duration-300 hover:scale-150 hover:text-slate-50 hover:rotate-12 hover:animate-bounce"><GithubIcon className='w-6 h-6'/></a>
                <a href='mailto:abadali7170@gmail.com'  className="transition-transform duration-300 hover:scale-150 hover:text-red-600 hover:rotate-12 hover:animate-bounce"><MailIcon className='w-6 h-6'/></a>
                {/* href="https://mail.google.com/mail/?view=cm&fs=1&to=afghfh@gmail.com" */}
              </div>

              <div className='text-center'>
                <Link href="/resume.pdf" target="_blank" className="mt-4 inline-block bg-purple-700 text-white w-full py-2 rounded-md shadow-md hover:bg-purple-700/70 transition-colors duration-400 hover:cursor-pointer" >
                  <span className='flex justify-center items-center gap-2'><DownloadIcon className='w-5 h-5'/>Download Resume</span>
                </Link>
              </div>
            </div>

            <Link href="https://www.google.com/maps?q=Shahjahanpur,Uttar+Pradesh,India" target="_blank" rel="noopener noreferrer" className='mt-3 flex justify-center items-start gap-1 text-[13px] md:text-[16px] cursor-pointer group'>
              <MapPin className='h-4 w-4 md:h-5 md:w-5 transition-transform duration-300 group-hover:scale-150 group-hover:animate-bounce group-hover:text-blue-700' />
              <span>Shahjahanpur, Uttar Pradesh, India · Open to relocation</span>
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeInOut" }} className='mt-7 md:mt-[5vh] w-full md:w-xl lg:w-[30vw] backdrop-blur-lg bg-black/20 px-5 pb-4 rounded-lg text-gray-200 border-[1] border-b-gray-200 hover:scale-105 duration-300 cursor-pointer'>
            <form ref={form} onSubmit={sendEmail} className='lg:m-3'> 
              <div>
                <div className="mt-5 flex flex-col gap-2">   
                  <Label htmlFor="name"><User2Icon/><span>Your name</span></Label>
                  <input className='border-[1] border-b-gray-200 rounded-sm pl-2 p-1' name="user_name" autoComplete="name" id="name" type="text" placeholder="Enter your name" required maxLength={30}/>
                </div>
    
                <div className="mt-5 flex flex-col gap-2">
                  <Label htmlFor="email"><MailIcon/> <span>Your Email</span></Label>
                  <input className='border-[1] border-b-gray-200 rounded-sm pl-2 p-1' name="user_email" autoComplete="email" id="email" type="email" placeholder="Enter your email" required maxLength={50}/>
                </div>
              </div>
  
              <div className="mt-5 flex flex-col gap-2">
                <Label htmlFor="message"><MessageCircleIcon/><span>Message</span></Label>
                <textarea className='h-[15vh] border-[1] border-b-gray-200 rounded-sm pl-2 p-1' name="message" id="message" placeholder="Write your message here..." rows={5} required />
              </div>
  
              <Button value="Send" type="submit" className="w-full py-2 mt-5 bg-purple-700 cursor-pointer hover:bg-purple-700/70">
                {loading ? <div className='flex justify-center items-center gap-2'><Loader2 className='animate-spin'/> <span>Please wait...</span></div> : <div className='flex justify-center items-center gap-1'><Send/><span>Send Message</span></div>}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact