import { Canvas } from '@react-three/fiber';
import gsap from 'gsap';
import "../style.css"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Bloom,ToneMapping,EffectComposer } from '@react-three/postprocessing';
import Cyl from "../components/Cyl.jsx";
import ScrollingText from '../components/ScrollingText.jsx';
// import Navbar from '../components/Navbar.jsx';
const Home = () => {
  // 10-28 line added
 gsap.registerPlugin(ScrollTrigger);
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
    return(<>
    {/* <Navbar/> */}
       <Canvas flat camera={{fov:22}}>
        {/* <OrbitControls />  */}
       < ambientLight/>
       <Cyl/>
       <EffectComposer>
      <Bloom
        mipmapBlur // Use mipmap blur for better performance.
    intensity={8.0} // The bloom intensity.

    luminanceThreshold={0} // luminance threshold. Raise this value to mask out darker elements in the scene.
    luminanceSmoothing={0 } // smoothness of the luminance threshold. Range is [0, 1]
  />
  
</EffectComposer>

      
      </Canvas>

      {/* scrolling text */}
     <ScrollingText />
     <div
        ref={nextSectionRef}
        className="w-full bg-black py-32 opacity-0 transition-opacity"
      >
        <h1 className="text-white text-4xl text-center">Career Campus</h1>
      </div>
     

     {/* now there will be cards */}

     
      </>
    )
}
export default Home;