'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';


const SkillsCarousel = () => {
  const imgs = [
    { name: "HTML5", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "React.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Tailwind CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Mongoose", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongoose/mongoose-original.svg" },
    { name: "Postman", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
    { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "C", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { name: "C++", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" }
  ];

  return (
    <>
      <div className='flex flex-col items-center'>
        <h1 className='font-black font-sans text-2xl'>My Skills</h1>
        <p className='font-semibold text-sm text-gray-600'>Modern Applications | Modern Technologies</p>
      </div>
      <div className="w-full rounded-2xl mt-[7vh]">
        <Swiper
          modules={[Autoplay]} 
          spaceBetween={1} 
          slidesPerView={5} 
          slidesPerGroup={1} 
          speed={3000}
          autoplay={{ 
            delay: 0,
            disableOnInteraction: false, 
            pauseOnMouseEnter: true,
          }} 
          loop 
          navigation
          pagination={{ clickable: false }} 
          breakpoints={{
            1024: { slidesPerView: 5 },
            768: { slidesPerView: 4 },
            480: { slidesPerView: 3 },
            0: { slidesPerView: 2 },
          }}
        >
          {imgs.map(({ name, src }) => (
            <SwiperSlide className=''>
            <div key={name} className='flex justify-center'>
              <div className=''>
                <img src={src} alt={name} className="w-25 h-25 p-5 rounded-full backdrop-blur-lg bg-purple-700/10 hover:drop-shadow-  [0_3px_5px_rgba(126,34,206,0.6)] shadow-lg shadow-purple-700 hover:rotate-45 duration-500 border-[1] border-gray-200 cursor-pointer md:mt-3 hover:scale-110"/>
                <div className='flex justify-center items-center mt-2 text-lg'><p>{name}</p></div>
              </div>
            </div>
             </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default SkillsCarousel;