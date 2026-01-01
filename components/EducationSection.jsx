// import React from 'react'

// const EducationSection = () => {
//   return (
//     <div className='mx-2'>
//         <div className='text-center'> 
//             <h2 className='font-black font-sans text-2xl mb-2'>Education</h2>
//             <span className='font-semibold text-sm text-gray-600'>My academic background and qualifications.</span>
//         </div>

//         <div className="mt-6 flex flex-col items-center">
//           <div className="bg-purple-700/50 shadow-md rounded-lg p-4 w-full max-w-md border-[1] border-gray-200">
//             <h3 className="font-bold text-lg">
//               Bachelor of Computer Applications (BCA)
//             </h3>
//             <p className="text-sm mt-1">
//               Sun Institute Of Management And Technology, Shahjahanpur
//             </p>
//             <p className="text-sm">
//               2023 – Present (Final Year)
//             </p>
        
//             {/* OPTIONAL course highlights */}
//             <div className="mt-3">
//               <h4 className="font-semibold text-sm mb-1">Relevant Coursework:</h4>
//               <ul className="text-sm list-disc ml-5">
//                 <li>Full Stack Web Development</li>
//                 <li>Database Management Systems</li>
//                 <li>Data Structures & Algorithms</li>
//                 <li>Object-Oriented Programming</li>
//               </ul>
//             </div>
//           </div>
//         </div>

//     </div>
//   )
// }

// export default EducationSection

import React, { useState, useRef } from 'react';

const EducationSection = () => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [translateZ, setTranslateZ] = useState(0);
  const [shadow, setShadow] = useState('shadow-md');

  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Increase rotation angles for more dramatic effect
    const rotateYVal = ((x - centerX) / centerX) * 25; // max 25deg
    const rotateXVal = ((centerY - y) / centerY) * 25; // max 25deg
    const translateZVal = 20; // move card forward

    setRotateX(rotateXVal);
    setRotateY(rotateYVal);
    setTranslateZ(translateZVal);
    setShadow('shadow-2xl'); // bigger shadow when hovering
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setTranslateZ(0);
    setShadow('shadow-md'); // reset shadow
  };

  return (
    <div className="mx-5">
      <div className="text-center"> 
        <h2 className="font-black font-sans text-2xl mb-2">Education</h2>
        <span className="font-semibold text-sm text-gray-600">
          My academic background and qualifications.
        </span>
      </div>

      <div className="mt-6 flex flex-col items-center">
        <div
          ref={cardRef}
          className={`
            bg-gradient-to-r from-purple-700 to-pink-600 font-semibold rounded-lg p-4 w-full max-w-md border-[1] border-gray-200
            cursor-pointer hover:scale-105 transition-transform duration-100 ${shadow}
          `}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${translateZ}px)`,
          }}
        >
          <h3 className="font-bold text-lg">Bachelor of Computer Applications (BCA)</h3>
          <p className="text-sm mt-1">Sun Institute Of Management And Technology</p>
          <p className="text-sm">2023 – Present (Final Year)</p>

          <div className="mt-3">
            <h4 className="font-semibold text-sm mb-1">Relevant Coursework:</h4>
            <ul className="text-sm list-disc ml-5">
              <li>Full Stack Web Development</li>
              <li>Database Management Systems</li>
              <li>Data Structures & Algorithms</li>
              <li>Object-Oriented Programming</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
