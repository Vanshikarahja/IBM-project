import React, { useRef, useEffect, useState } from "react";

const aboutStyle = {
  background: "#f3f4f6", // greyish ambient
  borderRadius: "18px",
  padding: "2.5rem 1.5rem",
  width: "100%",
  margin: "2rem 0",
  boxShadow: "0 4px 24px 0 rgba(31,38,135,0.08)",
  fontSize: "1.15rem",
  color: "#333",
  lineHeight: 1.8,
  opacity: 0,
  transform: "translateY(40px)",
  transition: "opacity 0.7s cubic-bezier(0.4,0,0.2,1), transform 0.7s cubic-bezier(0.4,0,0.2,1)",
};

const aboutVisibleStyle = {
  ...aboutStyle,
  opacity: 1,
  transform: "translateY(0)",
};

export default function About() {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      style={visible ? aboutVisibleStyle : aboutStyle}
      aria-label="About Project"
    >
      Welcome to Career Campus! Explore interactive games, get personalized career suggestions, and chat with our AI bot—all designed to help you discover your strengths and ideal career path. Start your journey and unlock your potential with us!
    </section>
  );
}