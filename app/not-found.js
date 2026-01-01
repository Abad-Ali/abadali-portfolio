'use client';
import Script from "next/script";
import styles from "@/components/AnimatedBackground.module.css";
// import { useEffect } from "react";

export default function NotFound() {

// NOT USING IT BECAUSE IT TAKE SOME TIME TO LOAD THAT'S WHY USING <Script />
//   useEffect(() => {
//     // Load the Lottie web component script
//     const script = document.createElement("script");
//     script.src = "https://unpkg.com/@lottiefiles/dotlottie-wc@0.8.5/dist/dotlottie-wc.js";
//     script.type = "module";
//     document.body.appendChild(script);
//   }, []);

  return (
    <div className="w-screen h-screen fixed top-0 left-0 z-50 flex flex-col md:flex-row items-center justify-center text-center text-white px-6" 
    style={{
        background: `
          radial-gradient(ellipse 120% 80% at 70% 20%, rgba(255, 20, 147, 0.15), transparent 50%),
          radial-gradient(ellipse 100% 60% at 30% 10%, rgba(0, 255, 255, 0.12), transparent 60%),
          radial-gradient(ellipse 90% 70% at 50% 0%, rgba(138, 43, 226, 0.18), transparent 65%),
          radial-gradient(ellipse 110% 50% at 80% 30%, rgba(255, 215, 0, 0.08), transparent 40%),
          #000000
        `,
    }}>
      {/* for bg to show animated squares */}
    <div className={`${styles.context} absolute inset-0 pointer-events-none`}>
      <div className={styles.area}>
        <ul className={styles.circles}>
          {[...Array(10)].map((_, index) => (
            <li
              key={index}
              className={styles[`animate-circle-${index + 1}`]}
            />
          ))}
        </ul>
      </div>
    </div>
    <Script
    src="https://unpkg.com/@lottiefiles/dotlottie-wc@0.8.5/dist/dotlottie-wc.js"
    type="module"
    strategy="afterInteractive"/>

      <div className="flex flex-col justify-center items-center mt-20 md:mt-0">
           {/* Glowing 404 */}
           <h1 className="text-[120px] font-extrabold leading-none bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(168,85,247,0.5)] animate-pulse">
             404
           </h1>

           {/* Subtitle */}
           <p className="text-gray-400 text-lg max-w-md mt-2">
             Oops... the page you’re looking for doesn’t exist or may have been moved.
           </p>

           {/* Buttons */}
           <div className="flex gap-4 mt-4">
             <a href="/" className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl font-semibold hover:bg-purple-700 transition shadow-lg hover:shadow-purple-700/40">
               Go Home
             </a>

             <a href="/contact" className="px-6 py-3 border border-gray-600 rounded-2xl hover:bg-white/10 transition font-semibold">
               Contact Me
             </a>
           </div>
      </div>

      <div className="">
           {/* Lottie Animation */}
           <dotlottie-wc
             src="https://lottie.host/4ec9ce99-4764-4ad7-babb-4897675f23cc/uCXXohyyVk.lottie"
             style={{ width: "400px", height: "400px" }}
             autoplay
             loop
            ></dotlottie-wc>
      </div>
    </div>
  );
}