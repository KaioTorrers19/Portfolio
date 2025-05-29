import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { Room } from "./Room";
import {Duck} from "./Duck";
import HeroLights from "./HeroLights";
const HeroExperience = () => {
  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
<div
  className="absolute bottom-0 left-0 w-full z-0 pointer-events-auto"
  style={{
    height: isMobile ? "50vh" : "80vh", // Altura menor no mobile
  }}
>
  <Canvas camera={{ position: [-10, 0, 10], fov: 45 }}>
    <OrbitControls
      enablePan={false}
      enableZoom={!isMobile}
      maxDistance={20}
      minDistance={10}
      minPolarAngle={Math.PI / 5}
      maxPolarAngle={Math.PI / 2}
    />

    <HeroLights />
    <group
      scale={isMobile ? 0.9 : 1}
      position={[0, -2.5, 0]}
      rotation={[0, -Math.PI / 4, 0]}
    >
  <Duck scale={[0.02, 0.02, 0.02]} />
    </group>
  </Canvas>
</div>
  );
};

export default HeroExperience;