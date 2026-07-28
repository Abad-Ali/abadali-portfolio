import React from "react";
import Image from "next/image";
import Link from "next/link";

const Certifications = () => {
  const certificates = [
    {
      name: "Next JS Development",
      img: "/certificates/cert_3.png",
      url: "https://media.geeksforgeeks.org/courses/certificates/09bad33aa77118016af5e3e4cafed79b.pdf",
    },
    {
      name: "React JS Development",
      img: "/certificates/cert_2.png",
      url: "https://media.geeksforgeeks.org/courses/certificates/5695f74afba6de14837f8a7b7c868e0f.pdf",
    },
    {
      name: "Full Stack Developer Bootcamp",
      img: "/certificates/cert_1.png",
      url: "https://media.geeksforgeeks.org/courses/certificates/e004b1511c5fcac7bbc5e4b5354b7e4f.pdf",
    },
  ];

  return (
    <section className="pb-10">

      {/* Heading */}
      <div className="mb-8">

        <h2 className="text-3xl font-black">
          Certifications
        </h2>

        <p className="mt-2 text-sm font-semibold text-gray-600">
          Verified courses | Professional Development | Web Development
        </p>

      </div>


      {/* Cards */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-3 sm:px-5 max-w-6xl mx-auto">

        {
          certificates.map((cert,index)=>(

            <div
              key={index}
              className="group w-full max-w-md rounded-3xl p-5 bg-white/10 md:backdrop-blur-lg border border-gray-200/40 shadow-xl hover:-translate-y-2 transition-all duration-300"
            >


              {/* Certificate Image */}

              <Link
                href={cert.url}
                target="_blank"
              >

                <div className="overflow-hidden rounded-2xl bg-white">

                  <Image
                    src={cert.img}
                    alt={cert.name}
                    width={600}
                    height={600}
                    className="w-full h-auto object-contain group-hover:scale-105 transition duration-500"
                  />

                </div>

              </Link>


              {/* Content */}

              <div className="mt-5">

                <h3 className="text-xl font-black">
                  {cert.name}
                </h3>


                <div className="w-12 h-1 mt-3 bg-blue-600 rounded-full"/>


                <p className="mt-4 text-sm text-gray-600 font-medium leading-relaxed">

                  Successfully completed this professional course from{" "}

                  <Link
                    href="https://www.geeksforgeeks.org/"
                    target="_blank"
                  >

                    <span className="font-bold text-[#2f8d46]">
                      GeeksforGeeks
                    </span>

                  </Link>.

                  This certification demonstrates practical skills in modern
                  web development technologies.

                </p>


                <Link
                  href={cert.url}
                  target="_blank"
                  className="inline-flex mt-5 px-5 py-2.5 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
                >
                  View Certificate
                </Link>


              </div>


            </div>

          ))
        }


      </div>


    </section>
  );
};

export default Certifications;