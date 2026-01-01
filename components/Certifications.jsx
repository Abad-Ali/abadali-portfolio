import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/mousewheel";
import "swiper/css/autoplay";
import Image from 'next/image';
import { Autoplay, Mousewheel } from 'swiper/modules';
import { Button } from './ui/button';
import Link from 'next/link';

const Certifications = () => {
  const certificates = [
    { name: 'Full Stack Developer Bootcamp', img:'/certificates/cert_3.png' , url: 'https://media.geeksforgeeks.org/courses/certificates/09bad33aa77118016af5e3e4cafed79b.pdf'},
    { name: 'React JS Development', img:'/certificates/cert_2.png' , url: 'https://media.geeksforgeeks.org/courses/certificates/5695f74afba6de14837f8a7b7c868e0f.pdf'},
    { name: 'Next JS Development', img:'/certificates/cert_1.png' , url: 'https://media.geeksforgeeks.org/courses/certificates/e004b1511c5fcac7bbc5e4b5354b7e4f.pdf'},
  ];

  return (
    <>
      <div>
         <h2 className='font-black font-sans text-2xl mb-2'>Certifications</h2>
          <p className="font-semibold text-sm text-gray-600">Verified courses | Professional Development | Web Development</p>
      </div>

      <div className="h-[35vh] sm:h-[40vh] lg:h-[60vh] w-full flex justify-center items-center mt-[2vh]">
        <Swiper
          direction="vertical"              // Vertical scrolling
          slidesPerView={1}                // One slide visible
          spaceBetween={3}                // Space between slides
          centeredSlides={true}          // Center the active slide
          loop         
          autoplay={{                      // Auto-scroll settings
            delay: 5000,                  // 5s per slide
            disableOnInteraction: false, // Keep autoplay after user interaction
          }}
          mousewheel={true}              // Optional: control with scroll
          modules={[Autoplay, Mousewheel]}
          className="h-[90%] w-[70%] flex justify-center items-center"
        >
          {certificates.map((cert, index) => (
            <SwiperSlide key={index} className="flex items-center">
              <div className='flex justify-center items-center gap-7'>
                 <Link href={cert.url} target='_blank'><Image src={cert.img} alt={cert.name} width={500} height={500} style={{ width: "100%", height: "auto" }} className="rounded-xl shadow-lg hover:scale-95 duration-300"/></Link>
      
                 <div className="hidden lg:inline backdrop-blur-lg bg-black/20 text-white p-3 max-w-[20vw] border-[1] border-gray-200 rounded-lg hover:scale-95 duration-300">
                   <p className="text-center text-sm mb-3">
                     I successfully completed the <strong>{cert.name}</strong> course and earned this certificate from <Link href='https://www.geeksforgeeks.org/' target='_blank'><strong className='text-[#2f8d46]'>GeeksforGeeks</strong></Link>.<br/> It demonstrates my skills in web development and modern frontend technologies.
                   </p>

                   <Link href={`${cert.url}`} target='_blank' className='bg-purple-600/70 cursor-pointer hover:bg-purple-600/50 px-2 py-1.5 rounded-lg'>View Certificate</Link>
                 </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Certifications;
