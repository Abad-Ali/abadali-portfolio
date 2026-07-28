import React, { useState, useRef } from "react";

const EducationSection = () => {
  const [transform, setTransform] = useState("");
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((rect.height / 2 - y) / rect.height) * 15;
    const rotateY = ((x - rect.width / 2) / rect.width) * 15;

    setTransform(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`
    );
  };

  const handleMouseLeave = () => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)");
  };

  return (
    <section className="mx-5 py-10">

      {/* Heading */}
      <div className="text-center">

        <h2 className="text-3xl font-black">
          Education
        </h2>

        <p className="mt-2 text-gray-600 text-sm font-semibold">
          Academic foundation that shaped my journey in technology.
        </p>

      </div>


      {/* Card */}
      <div className="mt-8 flex justify-center">

        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transform,
            transition: "transform 0.15s ease-out"
          }}
          className="w-full max-w-xl rounded-2xl p-6 bg-white/5 backdrop-blur-xl border border-gray-200/90 shadow-xl cursor-pointer"
        >

          <div className="flex justify-between items-start gap-4">

            <div>

              <h3 className="text-lg md:text-xl font-black">
                Bachelor of Computer Applications (BCA)
              </h3>

              <p className="mt-2 font-semibold text-blue-700 text-sm md:text-base">
                Sun Institute Of Management And Technology
              </p>

              <p className="text-xs md:text-sm text-gray-600 mt-1 font-semibold">
                Affiliated with MJPRU • 2023 - 2026
              </p>

            </div>


            <span className="px-3 py-1 rounded-full text-xs font-bold bg-green-700/10 text-green-600">
              Completed
            </span>

          </div>


          {/* Learning Focus */}
          <div className="mt-6">

            <h4 className="font-bold">
              Focus Areas
            </h4>


            <div className="flex flex-wrap gap-2 mt-3">

              {
                [
                  "Full Stack Development",
                  "Database Systems",
                  "Data Structures",
                  "Software Engineering",
                  "AI Integration"
                ].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-sm rounded-full bg-purple-700/10 text-white"
                  >
                    {item}
                  </span>
                ))
              }

            </div>

          </div>


          {/* Future Goal */}
          <div className="mt-6 border-t border-gray-200/70 pt-5">

            <h4 className="font-bold">
              Currently Exploring
            </h4>


            <p className="mt-2 text-sm text-gray-600">
              Currently exploring advanced software engineering concepts, scalable system architecture, AI-driven application development, and modern development practices. I’m focused on improving my understanding of designing efficient, reliable, and maintainable software solutions while building impactful real-world applications.
            </p>

          </div>


        </div>

      </div>

    </section>
  );
};

export default EducationSection;