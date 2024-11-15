import { Canvas } from "@react-three/fiber";
import { Splat, FirstPersonControls } from "@react-three/drei";
import React, { useState } from "react";

import './App.css';

export default function App() {
  const [rotation, setRotation] = useState([0, 0, 0]);

  // Function to change the cube's rotation to random values
  const changeRotation = () => {
    const getRandomRotation = () => Math.random() * Math.PI * 2; // Random angle between 0 and 2π
    setRotation([getRandomRotation(), getRandomRotation(), getRandomRotation()]);
  };

  return (
    <>
      <div className="title"></div>
      <Canvas style={{ width: "100vw", height: "100vh" }}>
        {/* Add lighting for the scene */}
        <ambientLight intensity={0.5} />
        <pointLight position={[2, 2, 2]} intensity={1} />

        {/* Replace OrbitControls with FirstPersonControls */}
        <FirstPersonControls
          movementSpeed={2}  // Speed of movement
          lookSpeed={0.1}    // Speed of looking around
        />

        <Splat
          src="bonsai.splat"
          rotation={[0.8 * Math.PI, 0.01 * Math.PI, 1.25 * Math.PI]}
          scale={0.1}
          chunkSize={1}
          alphaTest={0.1}
        />
        {/* Add a clickable cube with random rotation */}
        <mesh position={[0, 0, 0.2]} rotation={rotation} onClick={changeRotation}>
          <boxGeometry args={[0.1, 0.1, 0.1]} />
          <meshStandardMaterial color="orange" />
        </mesh>
      </Canvas>
    </>
  );
}