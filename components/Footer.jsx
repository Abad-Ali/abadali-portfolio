import { GithubIcon, InstagramIcon, Linkedin, MailIcon, MapPin } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='absolute z-10 w-full bg-black text-gray-300 py-5 border-t-[1] border-gray-500'>
        <div className='flex flex-col justify-center items-center text-[16px]'>
            <span>© 2025 Abad Ali. All rights reserved.</span>
            <span>Designed & Built by Abad Ali</span>
        </div>

        <div className='w-full flex justify-center items-center'>
           <div className='flex justify-center items-center gap-7 mt-2 backdrop-blur-lg bg-white/7 w-fit px-7 py-2 rounded-4xl hover:scale-110 duration-300 cursor-pointer'>
              <a href='https://www.linkedin.com/in/abad-ali-0649103a2' target="_blank" className="transition-transform duration-300 hover:scale-150 hover:rotate-12 hover:text-blue-700 hover:animate-bounce"><Linkedin className='w-6 h-6'/></a>
              <a href='https://www.instagram.com/abadali_17' target="_blank" className="transition-transform duration-300 hover:scale-150 hover:rotate-12 hover:text-pink-500 hover:animate-bounce"><InstagramIcon className='w-6 h-6'/></a>
              <a href='https://github.com/Abad-Ali'  target="_blank" className="transition-transform duration-300 hover:scale-150 hover:text-slate-50 hover:rotate-12 hover:animate-bounce"><GithubIcon className='w-6 h-6'/></a>
              <a href='mailto:abadali7170@gmail.com'  className="transition-transform duration-300 hover:scale-150 hover:text-red-600 hover:rotate-12 hover:animate-bounce"><MailIcon className='w-6 h-6'/></a>
              {/* href="https://mail.google.com/mail/?view=cm&fs=1&to=afghfh@gmail.com" */}
           </div>
        </div>

        <Link href="https://www.google.com/maps?q=Shahjahanpur,Uttar+Pradesh,India" target="_blank" rel="noopener noreferrer" className='mt-3 flex justify-center items-start gap-1 text-xs md:text-sm cursor-pointer group'>
          <MapPin size={15} className='transition-transform duration-300 group-hover:scale-150 group-hover:animate-bounce group-hover:text-blue-700' />
          <span>Shahjahanpur, Uttar Pradesh, India · Open to relocation</span>
        </Link>
    </div>
  )
}

export default Footer
