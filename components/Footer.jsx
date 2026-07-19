import { GithubIcon, InstagramIcon, Linkedin, MailIcon, MapPin, ArrowRight, Code2 } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="absolute z-10 w-full mx-auto p-8 md:p-10 bg-black border-t border-slate-800 shadow-xl text-gray-300">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-black bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Abad Ali
            </h2>
            <p className="mt-3 max-w-md text-gray-400 font-medium leading-relaxed">
              Full Stack Developer focused on building modern, scalable, and user-friendly web applications using the latest technologies.
            </p>
            <div className="mt-5 flex items-center gap-2 text-sm text-gray-400 font-semibold">
              <MapPin size={18} className="text-pink-500"/>
              Shahjahanpur, Uttar Pradesh, India
            </div>
            <div className="mt-6">
              <Link href="/projects" className="group relative inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl overflow-hidden bg-gradient-to-r from-purple-700 to-pink-600 text-white shadow-lg hover:scale-105 transition duration-300">
                <div className="absolute inset-0 bg-black/20 translate-x-full group-hover:translate-x-0 duration-500"/>
                <Code2 className="relative z-10 group-hover:rotate-12 duration-300"/>
                <span className="relative z-10 font-bold">
                  Explore My Work
                </span>
                <ArrowRight className="relative z-10 group-hover:translate-x-2 duration-300"/>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-black text-white">
              Quick Links
            </h3>
            <div className="mt-4 flex flex-col gap-3 text-gray-400 font-semibold">
              <Link href="/" className="hover:text-purple-400 duration-300">
                Home
              </Link>
              <Link href="/projects" className="hover:text-purple-400 duration-300">
                Projects
              </Link>
              <Link href="/resume.pdf" target="_blank" className="hover:text-purple-400 duration-300">
                Resume
              </Link>
              <Link href="/contact" className="hover:text-purple-400 duration-300">
                Contact
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-black text-white">
              Connect
            </h3>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="https://github.com/Abad-Ali" target="_blank" className="group p-3 rounded-2xl bg-slate-900 border border-slate-700 hover:border-purple-500 hover:scale-110 duration-300">
                <GithubIcon className="group-hover:text-purple-400 group-hover:rotate-12 duration-300"/>
              </Link>
              <Link href="https://www.linkedin.com/in/abad-ali-0649103a2" target="_blank" className="group p-3 rounded-2xl bg-slate-900 border border-slate-700 hover:border-blue-500 hover:scale-110 duration-300">
                <Linkedin className="group-hover:text-blue-400 group-hover:rotate-12 duration-300"/>
              </Link>
              <Link href="https://www.instagram.com/abadali_17" target="_blank" className="group p-3 rounded-2xl bg-slate-900 border border-slate-700 hover:border-pink-500 hover:scale-110 duration-300">
                <InstagramIcon className="group-hover:text-pink-400 group-hover:rotate-12 duration-300"/>
              </Link>
              <Link href="mailto:abadali1707@gmail.com" className="group p-3 rounded-2xl bg-slate-900 border border-slate-700 hover:border-red-500 hover:scale-110 duration-300">
                <MailIcon className="group-hover:text-red-400 group-hover:rotate-12 duration-300"/>
              </Link>
            </div>
            <p className="mt-5 text-sm text-gray-400 font-semibold">
              Open for collaborations and exciting opportunities.
            </p>
          </div>
        </div>
        <div className="mt-10 pt-5 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-gray-500 font-semibold">
          <p>
            © {new Date().getFullYear()} Abad Ali. All rights reserved.
          </p>
          <p>
            Designed & Built by Abad Ali
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;