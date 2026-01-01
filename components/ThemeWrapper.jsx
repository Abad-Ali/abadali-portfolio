'use client';

import React, { useEffect, useRef } from "react";
import { useTheme } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast, Toaster } from "sonner"
import styles from "@/components/AnimatedBackground.module.css";

export default function ThemeWrapper({ children }) {
 const { theme } = useTheme(); 


 const mounted = useRef(false); // for toast else it will show error in mounted ans if not use mounted it shows duplicate toast
  useEffect(() => {
    setTimeout(() => {
      if (!mounted.current) {
        toast.info("Try a different mode for better UI Experiance");
        mounted.current = true; // ensures it only fires once
      }
    }, 7000);
  }, []);



  return (
    <>
    <Toaster/>
      <div className={`flex justify-center items-center w-full ${theme === 'light'? "" : 'text-white'}`}>
        <Navbar />
      </div>

      <div className="min-h-screen w-full relative overflow-hidden transition-colors duration-500">
        {/* Background depending on theme */}
        {theme === "light" ? (
          // <div
          //   className="absolute inset-0 z-0 pointer-events-none"
          //   style={{
          //     backgroundImage: `radial-gradient(circle at center, #10b981, transparent)`,
          //     backgroundSize: "100% 100%",
          //   }}
          // />
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `radial-gradient(circle at center, #10b981, transparent)`,
              backgroundSize: "100% 100%",
              background: `radial-gradient(circle at center, #10b981, transparent)`
            }}
            
          >
            <div className={styles.context}>
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
          </div>
        ) : (
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `radial-gradient(circle at center, #10b981, transparent)`,
              backgroundSize: "100% 100%",
              background: `
                radial-gradient(ellipse 120% 80% at 70% 20%, rgba(255, 20, 147, 0.15), transparent 50%),
                radial-gradient(ellipse 100% 60% at 30% 10%, rgba(0, 255, 255, 0.12), transparent 60%),
                radial-gradient(ellipse 90% 70% at 50% 0%, rgba(138, 43, 226, 0.18), transparent 65%),
                radial-gradient(ellipse 110% 50% at 80% 30%, rgba(255, 215, 0, 0.08), transparent 40%),
                #000000`
            }}
            
          >
            <div className={styles.context}>
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
          </div>
        )}

        {/* Page content */}
        <div className={`relative ${theme === 'light'? "" : 'text-white'}`}>{children}</div>
      </div>

      <Footer />
    </>
  );
}