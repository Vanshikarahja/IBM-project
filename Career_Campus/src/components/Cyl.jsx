import React, {useRef} from "react" ;
import {useTexture} from "@react-three/drei";
import * as THREE from 'three';
import { useFrame } from "@react-three/fiber";
const Cyl=()=>{
    let tex = useTexture("/assets/Home.png")
    let cyl = useRef(null);
    useFrame((state, delta) => {
      cyl.current.rotation.y += delta ;
    })
   
    return(
                      // i just added scale here to resize the cylinder
      <group rotation={[0,1.4,0.5]}>
        <mesh ref={cyl}  scale={[.8, .8, .8]} >
        <cylinderGeometry args={[1,1,1,30,60,true]}/>
        <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide} />
      </mesh>
        </group>
    );
};
export default Cyl;