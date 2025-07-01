import { Canvas } from "@react-three/fiber";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import "../style.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Bloom,
  ToneMapping,
  EffectComposer,
} from "@react-three/postprocessing";
import Cyl from "../components/Cyl.jsx";
import ScrollingText from "../components/ScrollingText.jsx";
import Slider from "../components/Slider.jsx";
import Footer from "../components/Footer.jsx";
import About from "../components/About.jsx";
import Navbar from "../components/Navbar.jsx";
const Home = () => {
  
  gsap.registerPlugin(ScrollTrigger);
  const nextSectionRef = useRef(null);
  useEffect(() => {
    if (nextSectionRef.current) {
      gsap.fromTo(
        nextSectionRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: nextSectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          duration: 1,
        }
      );
    }
  }, []);
  return (
    <>
      <Navbar />
            {/* tryig to add a background image or video */}
       <div style={{ position: "relative", width: "100%", height: "90vh" }}>
   
      <img
        src="/assets/2.jpg"
        alt="bg"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      />
      {/* Or use a video: */}
      {/* <video
        src="/assets/your-background.mp4"
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      /> */}
        <div style={{ position: "relative", width: "100%", height: "100%", zIndex: 1 }}>
      <Canvas flat camera={{ fov: 22 }}>
        {/* <OrbitControls />  */}
        <ambientLight />
        <Cyl />
        <EffectComposer>
          <Bloom
            mipmapBlur // Use mipmap blur for better performance.
            intensity={8.0} // The bloom intensity.
            luminanceThreshold={0} // luminance threshold. Raise this value to mask out darker elements in the scene.
            luminanceSmoothing={0} // smoothness of the luminance threshold. Range is [0, 1]
          />
        </EffectComposer>
      </Canvas>
</div>
    </div>
      {/* scrolling text */}
      <ScrollingText />

      {/* now there will be cards */}
      <Slider />
      <About />
      <Footer />
    </>
  );
};
export default Home;
