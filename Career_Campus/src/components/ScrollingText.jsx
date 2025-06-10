import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const marqueeText =
  " Empowering individuals to discover their ideal career paths through cutting-edge professional guidance tools ";

const ScrollingText = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;
    const [first, second] = container.children;

    // Get the width of the text for dynamic duration
    const textWidth = text.offsetWidth;
    const containerWidth = container.offsetWidth;
    const distance = textWidth;

    // Set the second span to start right after the first
    gsap.set(second, { x: distance });

    const duration = distance / 100; // Adjust denominator for speed (higher = slower)

    const tl = gsap.timeline({ repeat: -1, defaults: { ease: "linear" } });
    tl.to([first, second], {
      x: `-=${distance}`,
      duration: duration,
      onComplete: () => {
        gsap.set([first, second], { x: 0 });
      },
    });

    return () => tl.kill();
  }, []);

  return (
    <div className="overflow-hidden w-full bg-black py-2 ">
      <div
        ref={containerRef}
        className="flex whitespace-nowrap"
        style={{ willChange: "transform" }}
      >
        <span
          ref={textRef}
          className="text-2xl md:text-3xl font-semi-bold text-white px-8 font-montserrat"
        >
          {marqueeText}
        </span>
        <span className="text-2xl md:text-3xl font-semi-bold text-white px-8 font-montserrat">
          {marqueeText}
        </span>
      </div>
    </div>
  );
};

export default ScrollingText;
