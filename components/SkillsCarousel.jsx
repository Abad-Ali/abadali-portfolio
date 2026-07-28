'use client';

const SkillsCarousel = () => {

  const skills = [
    { name: "JavaScript", category: "Language", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "C", category: "Language", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { name: "C++", category: "Language", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "HTML5", category: "Frontend", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", category: "Frontend", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "React.js", category: "Frontend", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", category: "Frontend", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Tailwind CSS", category: "Frontend", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Node.js", category: "Backend", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", category: "Backend", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "MongoDB", category: "Database", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Mongoose", category: "Database", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongoose/mongoose-original.svg" },
    { name: "Git", category: "Tools", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", category: "Tools", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Postman", category: "Tools", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
  ];


  const SkillCard = ({skill}) => (
    <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/10 md:backdrop-blur-xl border border-gray-200/40 shadow-lg hover:scale-105 transition duration-300 min-w-[180px]">

      <img
        src={skill.src}
        alt={skill.name}
        className="w-10 h-10 object-contain"
      />

      <div>
        <p className="font-bold text-sm">
          {skill.name}
        </p>

        <p className="text-xs text-blue-700 font-semibold">
          {skill.category}
        </p>
      </div>

    </div>
  );


  return (
    <section className="md:py-10 overflow-hidden">

      <div className="text-center mb-10">

        <h2 className="text-3xl font-black">
          My Skills
        </h2>

        <p className="mt-2 text-sm font-semibold text-gray-600">
          Technologies I use to build modern applications
        </p>

      </div>


      <div className="space-y-6">


        <div className="flex gap-5 w-max animate-[scroll_50s_linear_infinite]">

          {[...skills,...skills].map((skill,index)=>(
            <SkillCard
              key={index}
              skill={skill}
            />
          ))}

        </div>



        <div className="flex gap-5 w-max animate-[scrollReverse_50s_linear_infinite]">

          {[...skills.reverse(),...skills].map((skill,index)=>(
            <SkillCard
              key={index}
              skill={skill}
            />
          ))}

        </div>


      </div>



      <style jsx global>{`

        @keyframes scroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }


        @keyframes scrollReverse {
          from {
            transform: translateX(-50%);
          }

          to {
            transform: translateX(0);
          }
        }

      `}</style>


    </section>
  );
};


export default SkillsCarousel;