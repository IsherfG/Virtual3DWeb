import React, { useEffect, useRef } from "react";
import * as SPLAT from "gsplat"
import { extend, useFrame } from "@react-three/fiber";

const SplatRenderer = ({ splatFile }) => {
  const splatRef = useRef(null);

  useEffect(() => {
    if (!splatRef.current) return;

    // Initialize gsplat
    const splat = new SPLAT.SplatRenderer(splatFile);
    splat.initialize(splatRef.current);

    // Set properties, e.g., resolution or quality
    splat.setQuality("low");
    splat.render();

    return () => {
      splat.dispose(); // Clean up resources on unmount
    };
  }, [splatFile]);

  // This object will be rendered by Three.js
  return <group ref={splatRef}></group>;
};

export default SplatRenderer;