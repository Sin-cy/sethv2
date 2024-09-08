/* eslint-disable react/no-unknown-property */
import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

// NOTE: galaxy_pc folder in use, this one imports milky way galaxy 3d model

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./galaxy_pc/scene.gltf");

      //<hemisphereLight intensity={2} groundColor='blue' />
      //<spotLight
      //  position={[0, 15, -20]}
      //  angle={0.12}
      //  penumbra={1}
      //  intensity={1}
      //  castShadow
      //  shadow-mapSize={1024}
      ///>
  return (
    <mesh>
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        //scale={isMobile ? 0.7 : 0.75}
        scale={2.0}
        position={isMobile ? [0, -3, -2.2] : [0, -4.85, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
            shadows
      frameloop='demand'
      //dpr={[1, 2]}
      //camera={{ position: [0, 15, -20], fov: 25 }}
      //camera={{ position: [9, -10, -13], fov: 13 }}
      camera={{ fov: 28 , near: 0.1 , far: 200 , position: [4,5,6]}}
      gl={{ preserveDrawingBuffer: true }}
      
    >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    autoRotate
                    enableDamping={true}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2.25}
                    minDistance={20}
                    maxDistance={50}

                />
                <Computers isMobile={isMobile} />
            </Suspense>
    
    

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
