import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollingText = () => {
  const textRef = useRef(null);

  useEffect(() => {
    // Infinite horizontal loop
    gsap.to(textRef.current, {
      xPercent: -100,
      repeat: -1,
      duration: 8,
      ease: "linear",
    });
  }, []);

  return (
    <div className="overflow-hidden w-full bg-black py-4">
      <div
        ref={textRef}
        className="whitespace-nowrap text-2xl font-bold text-white"
        style={{ willChange: "transform", display: "inline-block" }}
      >
        {" Let's connect with the most advanced tools for profession suggestion. ".repeat(2)}
      </div>
    </div>
  );
};

export default ScrollingText;