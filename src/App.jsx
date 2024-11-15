import { Canvas } from "@react-three/fiber";
import { Splat, OrbitControls } from "@react-three/drei";
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
      <Canvas style={{ width: "50vw", height: "50vh" }}>
        {/* Add lighting for the scene */}
        <ambientLight intensity={0.5} />
        <pointLight position={[2, 2, 2]} intensity={1} />

        <OrbitControls
          maxDistance={5.5}
          minDistance={0.3}
          maxPolarAngle={Math.PI * 10.75}
          minPolarAngle={Math.PI * 0.25}
          minAzimuthAngle={Math.PI * 10.75}
          maxAzimuthAngle={Math.PI * 2.25}
        />
        <Splat
          src="https://huggingface.co/datasets/runes/coolsplats/resolve/main/output.splat"
          rotation={[0.55 * Math.PI, 0.01 * Math.PI, 1.25 * Math.PI]}
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