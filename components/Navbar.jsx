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
import { usePathname } from 'next/navigation'
import { useTheme } from './ThemeProvider'
import Link from 'next/link'
import { motion } from "framer-motion";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const currentPath = usePathname();
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    const handleScroll = () => {
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
    { icon: <Home size={18}/>, text: "Home", href: "/" },
    { icon: <User size={18}/>, text: "About", href: "/about" },
    { icon: <FolderCode size={18}/>, text: "Projects", href: "/projects" },
    { icon: <MessageCircle size={18}/>, text: "Contact", href: "/contact" },
  ];

  return (
    <motion.div initial={{opacity:0,y:-40}} animate={{opacity:1,y:0}} transition={{duration:0.7,ease:"easeOut"}} className="fixed top-3 z-50 w-[90vw] lg:w-4xl backdrop-blur-sm md:backdrop-blur-lg bg-black/5 px-5 py-3 rounded-4xl border-2 border-purple-700 mx-auto left-1/2 -translate-x-1/2">
      <div className="flex items-center justify-between">
        <Link href="/">
          <motion.div whileHover={{scale:1.05}} transition={{duration:0.3}} className="flex items-center gap-2 cursor-pointer">
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-600 p-1 rounded-full animate-[spin_1.5s_linear_infinite]"></div>
              <Avatar className="w-10 h-10 absolute inset-1 rounded-full z-10">
                <AvatarImage src="https://github.com/Abad-Ali.png" alt="Profile_pic"/>
                <AvatarFallback className="font-bold font-serif">AA</AvatarFallback>
              </Avatar>
            </div>
            <h1 className="font-black text-2xl bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">
              Abad Ali
            </h1>
          </motion.div>
        </Link>
        <div className="hidden lg:flex items-center gap-2">
          {
            navbarItems.map((item,index)=>{
              const isActive=currentPath===item.href;
              return (
                <motion.div key={index} whileHover={{scale:1.08,y:-2}} whileTap={{scale:0.95}} transition={{duration:0.2}}>
                  <Link href={item.href} className={`group relative flex items-center gap-2 px-4 py-2.5 rounded-2xl overflow-hidden transition duration-300 ${isActive ? "bg-gradient-to-r from-purple-700 to-pink-600 text-white shadow-lg" : "bg-white/5 border border-gray-200 dark:border-white/10"}`}>
                    {!isActive && (
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-600 translate-x-full group-hover:translate-x-0 duration-500"/>
                    )}
                    <span className="relative z-10 group-hover:rotate-12 duration-300">
                      {item.icon}
                    </span>
                    <span className="relative z-10 font-semibold">
                      {item.text}
                    </span>
                  </Link>
                </motion.div>
              )
            })
          }
          <motion.button whileHover={{scale:1.1,rotate:10}} whileTap={{scale:0.9}} onClick={toggleTheme} className="group relative flex items-center justify-center p-3 rounded-2xl overflow-hidden bg-white/5 border border-gray-200 dark:border-white/10 duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-600 translate-x-full group-hover:translate-x-0 duration-500"/>
            <span className="relative z-10">
              {
                theme === "light"
                ?
                <Moon size={18}/>
                :
                <Sun size={18} className="text-white"/>
              }
            </span>
          </motion.button>
        </div>
        <motion.button whileTap={{scale:0.9,rotate:10}} className="lg:hidden p-2 rounded-2xl bg-white/5 border border-purple-700 text-purple-700" onClick={()=>setOpen(!open)}>
          {
            open
            ?
            <X size={26}/>
            :
            <Menu size={26}/>
          }
        </motion.button>
      </div>
      {
        open && (
          <motion.div initial={{opacity:0,height:0,y:-10}} animate={{opacity:1,height:"auto",y:0}} transition={{duration:0.3}} className="lg:hidden mt-4 flex flex-col gap-2" ref={menuRef}>
            {
              navbarItems.map((item,index)=>{
                const isActive=currentPath===item.href;
                return (
                  <motion.div key={index} initial={{opacity:0,x:-30}} animate={{opacity:1,x:0}} transition={{duration:0.3,delay:index*0.08}}>
                    <Link href={item.href} onClick={()=>setOpen(false)} className={`group relative flex items-center gap-3 px-4 py-1 rounded-xl overflow-hidden duration-300 ${isActive ? "bg-gradient-to-r from-purple-700 to-pink-600 text-white shadow-lg" : "bg-white/2 border border-white/10"}`}>
                      {!isActive && (
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-600 translate-x-full group-hover:translate-x-0 duration-500"/>
                      )}
                      <span className="relative z-10 group-hover:rotate-12 duration-300 p-1.5 bg-white/10 rounded-lg">
                        {item.icon}
                      </span>
                      <span className="relative z-10 font-semibold">
                        {item.text}
                      </span>
                    </Link>
                  </motion.div>
                )
              })
            }
            <motion.button initial={{opacity:0,x:-30}} animate={{opacity:1,x:0}} transition={{duration:0.3,delay:0.35}} onClick={toggleTheme} className="flex justify-between items-center px-4 py-1 rounded-xl bg-white/2 border border-white/10 cursor-pointer mb-1.5">
              <div className="flex items-center gap-3 font-semibold">
                <div className='p-1.5 bg-white/10 rounded-lg'>
                  {
                    theme==="light"
                    ?
                    <Moon size={20}/>
                    :
                    <Sun size={20}/>
                  }
                </div>
                <span>
                  Toggle Theme
                </span>
              </div>
              <div className="relative w-12 h-6">
                <div className={`absolute w-12 h-6 rounded-full transition-colors duration-300 ${theme==="light" ? "bg-gray-400/50 border border-gray-400" : "bg-purple-700 border border-purple-400"}`}></div>
                <div className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow flex items-center justify-center transition-transform duration-300 ${theme==="light" ? "translate-x-0.5" : "translate-x-[26px]"}`}>
                  {
                    theme==="light"
                    ?
                    <Moon className="h-3.5 w-3.5 text-purple-700"/>
                    :
                    <Sun className="h-3.5 w-3.5 text-yellow-400"/>
                  }
                </div>
              </div>
            </motion.button>
          </motion.div>
        )
      }
    </motion.div>
  )
}
export default Navbar