'use client'
import { Badge } from '@/components/ui/badge'
import { ArrowLeftIcon, GithubIcon, LinkIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const All = () => {
  const router = useRouter();

  const projects = [
    {name: 'My Portfolio', img: '/project_6.png', url: 'https://nexaconnect.vercel.app/', github: 'https://github.com/Abad-Ali/NexaConnect'},
    {name: 'NexaConnect', img: '/project_5.png', url: 'https://nexaconnect.vercel.app/', github: 'https://github.com/Abad-Ali/NexaConnect'},
    {name: 'ZipLinks', img: '/project_4.png', url: 'https://zip-links-shorten-your-ur-ls-in-a-f.vercel.app/', github: 'https://github.com/Abad-Ali/ZipLinks---Shorten-your-URLs-in-a-flash'},
    {name: 'PassOP', img: '/project_1.png', url: 'https://pass-op-password-manager-mu.vercel.app/', github: 'https://github.com/Abad-Ali/PassOP_Password_Manager'},
    {name: 'Zendone', img: '/project_2.png', url: 'https://zendone-todos-app.vercel.app/', github: 'https://github.com/Abad-Ali/Zendone-Todos_App'},
  ]

  return (
    <div className='min:w-screen min:h-screen mt-[20vh] animate-fade-in'>
      <div className='flex justify-center items-center mb-7'>
        <div className='flex flex-col justify-center items-center'>
           <h1 className='font-bold text-3xl'>My Work & Projects</h1>
           <span className='text-lg text-gray-600 font-medium'>From small ideas to complete applications — this is my work.</span>
        </div>
      </div>
      <div className='flex justify-center items-center min:w-[70vw] min:h-[70vh]'>
      <div className='grid grid-cols-2 gap-2 w-fit h-fit'>
            {projects.map((project, index) => (
               <div key={index} className='relative group mb-2'>
                   <Image className='rounded-2xl border-2 border-black cursor-pointer w-full h-full' src={project.img} alt='project_img' width={400} height={400}/>

                   {index < 3 && (
                         <Badge className='absolute top-2 left-3 bg-purple-700/10 text-white px-3 py-1 z-10 border-[1] bor-gray-200 animate-bounce'>
                           New
                         </Badge>
                       )}

                       <div className='absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl'>
                         <div className='flex flex-col gap-3'>
                           <div className='flex items-center'>
                             <h2 className='text-purple-700 text-4xl font-bold'>{project.name}</h2>
                           </div>
                           <div className='flex flex-col justify-center items-center gap-1'>
                              <Link href={project.url}><div className='flex text-lg gap-1 font-semibold text-purple-900 underline'><span className='animate-bounce'><LinkIcon color='white' strokeWidth={2.5}/></span>{project.name}</div></Link>
                             <Link href={project.github}><div className='flex text-lg gap-1 font-semibold text-purple-900 underline'><span className='animate-bounce'><GithubIcon color='white' strokeWidth={2.5}/></span>Github</div></Link>
                           </div>
                         </div>
                       </div>
               </div>
            ))}
      </div>
      </div>
      <div className='flex justify-center items-center'>
           <button onClick={()=>router.replace('/projects')} className='bg-purple-700/90 px-2 py-1 rounded-lg fixed bottom-2 right-7 z-10 animate-bounce cursor-pointer font-semibold flex'><ArrowLeftIcon/>Back</button>
       </div>
    </div>
  )
}

export default All
