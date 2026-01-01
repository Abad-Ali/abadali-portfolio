"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function RouteTransition({ children }) {
  const pathname = usePathname();
  const [isAnimating, setIsAnimating] = useState(false);
  const [showChildren, setShowChildren] = useState(children);

  useEffect(() => {
    setIsAnimating(true);

    // Duration must match animation timing
    const timeout1 = setTimeout(() => {
      setShowChildren(children);
    }, 500); // fold-in midpoint

    const timeout2 = setTimeout(() => {
      setIsAnimating(false);
    }, 900); // total animation time

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [pathname, children]);

  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Animated slide */}
      <div
        className={`
          fixed inset-0 z-50 backdrop:blur-3xl bg-black
          origin-left
          transition-transform duration-700 ease-in-out rounded-r-4xl
          ${isAnimating ? "" : "translate-x-[-100%]"}
        `}
      />

      {/* Real page */}
      <div>
        {showChildren}
      </div>
    </div>
  );
}