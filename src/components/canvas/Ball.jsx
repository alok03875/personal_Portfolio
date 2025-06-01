import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={.1} rotationIntensity={.1} floatIntensity={.2}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 1]} />
      {/* <mesh castShadow receiveShadow scale={[1.2, 1.8, 0.05]}> */}
      <mesh castShadow receiveShadow scale={[3, 2.5, 0.08]}>

        {/* Flat vertical rectangle shape */}
        <planeGeometry args={[1, 1.5]} />
        
        {/* Glass effect with transparency */}
        <meshStandardMaterial
          color="#ffffff"
          transparent
          opacity={0.3}
          roughness={0.1}
          metalness={0.8}
        />
        
        {/* Decal (icon) overlay */}
        <Decal
          position={[0, 0, 0.01]}
          rotation={[0, 0, 0]}
          // scale={[2, 1.2, 2]}
          scale={[2.5, 1.5, 2.5]}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};


const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
