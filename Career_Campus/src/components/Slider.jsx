import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const slides = [
  {
    heading: "Discover Your Path",
    description: "Get personalized career suggestions based on your interests and skills.",
    image: "/assets/slide1.png",
  },
  {
    heading: "Visualize Your Future",
    description: "See your potential career paths and what you need to achieve them.",
    image: "/assets/slide2.png",
  },
  {
    heading: "Connect & Grow",
    description: "Access resources and connect with mentors to boost your career.",
    image: "/assets/slide3.png",
  },
  {
    heading: "Achieve Success",
    description: "Take actionable steps and track your progress toward your dream career.",
    image: "/assets/slide4.png",
  },
];

const Slider = () => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    const slidesEls = track.querySelectorAll(".slide");

    gsap.set(track, { width: `${slides.length * 100}vw` });
    gsap.set(slidesEls, { width: "100vw" });

    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: () => `+=${window.innerWidth * (slides.length - 1)}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
      });

      gsap.to(track, {
        xPercent: -100 * (slides.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${window.innerWidth * (slides.length - 1)}`,
          scrub: 1,
        },
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[80vh] overflow-hidden bg-white flex items-center"
      style={{ fontFamily: "'Montserrat', Arial, sans-serif", color: "#111" }}
    >
      <div
        ref={trackRef}
        className="flex h-full"
        style={{ willChange: "transform" }}
      >
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className="slide flex-shrink-0 flex flex-col md:flex-row items-center justify-center h-full px-8"
          >
            <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{slide.heading}</h2>
              <p className="text-lg mb-4">{slide.description}</p>
            </div>
            <div className="md:w-1/2 flex justify-center items-center">
              <img
                src={slide.image}
                alt={slide.heading}
                className="max-w-xs md:max-w-sm rounded-lg shadow-lg"
                style={{ background: "#eee" }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// export default Slider;
// import React, { useRef, useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useNavigate } from "react-router-dom";

// gsap.registerPlugin(ScrollTrigger);

// const slides = [
//   {
//     heading: "Discover Your Path",
//     description: "Get personalized career suggestions based on your interests and skills.",
//     image: "/assets/slide1.png",
//     button: null,
//   },
//   {
//     heading: "Chat with GenAI",
//     description: "Ask questions and get instant career guidance from our AI assistant.",
//     image: "/assets/slide2.png",
//     button: { label: "Go to Chat", route: "/chat" },
//   },
//   {
//     heading: "Play Career Game",
//     description: "Explore your interests and skills through our interactive game.",
//     image: "/assets/slide3.png",
//     button: { label: "Play Game", route: "/game" },
//   },
//   {
//     heading: "Get Personalized Suggestions",
//     description: "Fill out a quick form to receive tailored career recommendations.",
//     image: "/assets/slide4.png",
//     button: { label: "Open Form", route: "/form" },
//   },
// ];

// const Slider = () => {
//   const containerRef = useRef(null);
//   const trackRef = useRef(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const container = containerRef.current;
//     const track = trackRef.current;
//     const slidesEls = track.querySelectorAll(".slide");

//     gsap.set(track, { width: `${slides.length * 100}vw` });
//     gsap.set(slidesEls, { width: "100vw" });

//     let ctx = gsap.context(() => {
//       ScrollTrigger.create({
//         trigger: container,
//         start: "top top",
//         end: () => `+=${window.innerWidth * (slides.length - 1)}`,
//         pin: true,
//         scrub: 0.7, // smoother scroll
//         anticipatePin: 1,
//       });

//       gsap.to(track, {
//         xPercent: -100 * (slides.length - 1),
//         ease: "none",
//         scrollTrigger: {
//           trigger: container,
//           start: "top top",
//           end: () => `+=${window.innerWidth * (slides.length - 1)}`,
//           scrub: 0.7,
//         },
//       });
//     }, container);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={containerRef}
//       className="relative w-full h-[80vh] overflow-hidden bg-black flex items-center"
//       style={{ fontFamily: "'Montserrat', Arial, sans-serif" }}
//     >
//       <div
//         ref={trackRef}
//         className="flex h-full"
//         style={{ willChange: "transform" }}
//       >
//         {slides.map((slide, idx) => (
//           <div
//             key={idx}
//             className="slide flex-shrink-0 flex flex-col md:flex-row items-center justify-center h-full px-8"
//           >
//             <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center md:items-start text-center md:text-left"
//                  style={{
//                    minHeight: "60vh",
//                    minWidth: "70vw",
//                    boxShadow: "0 8px 32px 0 rgba(60,60,60,0.18)",
//                    display: "flex",
//                    justifyContent: "center"
//                  }}>
//               <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">{slide.heading}</h2>
//               <p className="text-lg mb-4 text-black">{slide.description}</p>
//               {slide.button && (
//                 <button
//                   className="mt-2 px-6 py-2 bg-blue-600 text-white rounded-lg shadow font-semibold hover:bg-blue-700 transition"
//                   onClick={() => navigate(slide.button.route)}
//                 >
//                   {slide.button.label}
//                 </button>
//               )}
//             </div>
//             <div className="md:w-1/2 flex justify-center items-center mt-6 md:mt-0">
//               <img
//                 src={slide.image}
//                 alt={slide.heading}
//                 className="max-w-xs md:max-w-sm rounded-lg shadow-lg"
//                 style={{ background: "#eee", boxShadow: "0 8px 32px 0 rgba(60,60,60,0.12)" }}
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Slider;