// 'use client'
// import { Code, Home, Moon, Phone, Sun, User } from 'lucide-react'
// import React from 'react'
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { usePathname, useRouter } from 'next/navigation'
// import { useTheme } from './ThemeProvider'
// import Link from 'next/link'

// const Navbar = () => {
//   const { theme, toggleTheme } = useTheme();
//   const router = useRouter();
//   const currentPath = usePathname();

//   const navbarItems = [
//     { icon: <Home />, text: "Home", href: "/" },
//     { icon: <User />, text: "About", href: "/about" },
//     { icon: <Code />, text: "Projects", href: "/projects" },
//     { icon: <Phone />, text: "Contact", href: "/contact" },
//   ]

//   const navbarHandler = (href) => {
//     router.push(href)
//   }

//   return (
//     <div className='fixed top-2 z-10 w-[50vw] backdrop-blur-lg bg-black/5 px-5 py-3 rounded-4xl border-2 border-gray-200'>
//       <div className='flex items-center justify-between'>
//         <Link href='https://github.com/Abad-Ali' target='_blank'><div className='flex items-center gap-2 cursor-pointer'>
//             <Avatar className="w-10 h-10 border-2 border-gray-200">
//               <AvatarImage src='https://avatars.githubusercontent.com/u/223816766?v=4&size=64' alt="Profile_pic"/>
//               <AvatarFallback>AA</AvatarFallback>
//             </Avatar>
//             <h1 className='font-bold text-lg'>Abad Ali</h1>
//         </div></Link>

//         <div className='flex items-center'>
//            {
//               navbarItems.map((item, index)=>{
//                 const isActive = currentPath === item.href
//                   return (
//                       <div onClick={()=> navbarHandler(item.href)} key={index} className={`flex items-center px-4 py-2.5 rounded-4xl transition-colors duration-200 ${isActive ? 'bg-purple-700 text-white border-3 border-b-gray-200 shadow-lg' : 'hover:bg-blur-xl hover:bg-white/10'}`}>
//                           <span className='w-7 h-7 cursor-pointer'>{item.icon}</span>
//                           <span className='font-semibold cursor-pointer'>{item.text}</span>
//                       </div>
//                   )
//               })
//            }

//            {/* Dark/Light toggle button */}
//           <button onClick={toggleTheme} className='p-2 cursor-pointer'>
//             {theme === "light" ? <Moon size={18} fill='black'/> : <Sun size={18} className='text-white' fill='white'/>}
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Navbar


'use client'
import { Home, Moon, Sun, User, Menu, X, FolderCode, MessageCircle } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { usePathname, useRouter } from 'next/navigation'
import { useTheme } from './ThemeProvider'
import Link from 'next/link'
import { motion } from "framer-motion";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const router = useRouter();
  const currentPath = usePathname();
  const [open, setOpen] = useState(false);


  const menuRef = useRef();
  useEffect(() => {
    let handleClickOutside = (e)=>{
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    let handleScroll = ()=>{
      setOpen(false);
    }

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarItems = [
    { icon: <Home />, text: "Home", href: "/" },
    { icon: <User />, text: "About", href: "/about" },
    { icon: <FolderCode />, text: "Projects", href: "/projects" },
    { icon: <MessageCircle />, text: "Contact", href: "/contact" },
  ]

  const navbarHandler = (href) => {
    router.push(href)
    setOpen(false)   // Close mobile menu when clicked
  }

  return (
    <div className='fixed top-3 z-10 w-[90vw] lg:w-4xl backdrop-blur-lg bg-black/5 px-5 py-3 rounded-4xl border-[3] border-purple-700 mx-auto left-1/2 -translate-x-1/2'>
      
      <div className='flex items-center justify-between'>

        {/* LEFT SIDE */}
        <Link href='/'>
          <div className='flex items-center gap-2 cursor-pointer'>
              <div className="relative w-12 h-12">
              {/* Rotating ring */}
              <div className='absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-600 p-1 rounded-full animate-[spin_1.5s_linear_infinite]'>
              </div>
              {/* Avatar stays still */}
              <Avatar className="w-10 h-10 absolute inset-1 rounded-full z-10">
                <AvatarImage src='https://github.com/Abad-Ali.png' alt="Profile_pic" />
                <AvatarFallback className='font-bold font-serif'>AA</AvatarFallback>
              </Avatar>
            </div>
            <h1 className='font-black text-2xl bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent'>Abad Ali</h1>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <div className='hidden lg:flex items-center gap-2'>
          {
            navbarItems.map((item, index) => {
              const isActive = currentPath === item.href
              return (
                <div onClick={() => navbarHandler(item.href)} key={index} className={`relative flex items-center px-4 py-2.5 rounded-4xl transition-colors duration-100`}>
                  {isActive && (
                    <motion.div
                      layoutId="navbarHighlight"
                      className="absolute inset-0  bg-purple-700/95 rounded-4xl"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}

                  <span className='w-7 h-7 cursor-pointer z-10'>{item.icon}</span>
                  <span className='font-semibold cursor-pointer z-10'>{item.text}</span>
                </div>
              )
            })
          }

          {/* Dark/Light toggle */}
          <button onClick={toggleTheme} className='p-2 cursor-pointer'>
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} className='text-white' />}
          </button>
        </div>

        {/* MOBILE MENU ICON */}
        <button className='lg:hidden p-1.5 bg-white/7 rounded-xl text-purple-700 border-[3] border-purple-700' onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* MOBILE DROPDOWN MENU */}
      {open && (
        <div className='lg:hidden mt-4 flex flex-col gap-3' ref={menuRef}>
          {navbarItems.map((item, index) => {
            const isActive = currentPath === item.href
            return (
              <div key={index} onClick={() => navbarHandler(item.href)} className={`flex items-center gap-3 px-4 py-2 rounded-xl transition  ${isActive ? 'bg-purple-700 text-gray-200' : 'bg-white/10'} cursor-pointer`}>
                {item.icon}
                <span>{item.text}</span>
              </div>
            )
          })}

          {/* Theme toggle in menu */}
          <button onClick={toggleTheme} className='flex justify-between items-center gap-3 px-4 py-2 rounded-xl bg-white/10 cursor-pointer'>
            <div className='flex justify-center items-center gap-3 duration-300'>
              {theme === "light" ? <Moon /> : <Sun />}
              <span>Toggle Theme</span>
            </div>

             {/* Switch for showing toggle theme  */}
            <div className="relative w-12 h-6">
              {/* Track */}
              <div className={`absolute w-12 h-6 rounded-full transition-colors duration-300 ${ theme === "light" ? "bg-gray-400/50 border-2 border-gray-400/70" : "bg-purple-700 border-2 border-gray-400/70"}`}></div>
              {/* Thumb */}
              <div className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow flex items-center justify-center transition-transform duration-300 ${theme === "light" ? "translate-x-0.5" : "translate-x-[26px]"}`}>
                {/* Optional: icon inside thumb */}
                {theme === "light" ? (
                  <Moon className="h-3.5 w-3.5 text-purple-700" />
                ) : (
                  <Sun className="h-3.5 w-3.5 text-yellow-400" />
                )}
              </div>
            </div>
          </button>
        </div>
      )}

    </div>
  )
}

export default Navbar
