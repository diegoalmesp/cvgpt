// https://sketchfab.com/Ryan_Nein
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const CoffeeMaker = () => {
  const earth = useGLTF("./coffee_maker/scene.gltf");

  return (
    <mesh>
      <spotLight
        position={[-50, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={10} />
      <primitive
        object={earth.scene}
        scale={1.5}
        // position-y={0}
        // rotation-y={0}
        rotation={[1, -1.5, 1]}
      />
    </mesh>
  );
};

const CoffeeMakerCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <CoffeeMaker />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default CoffeeMakerCanvas;
