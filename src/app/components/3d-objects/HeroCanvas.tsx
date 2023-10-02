import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const HeroCanvas = () => {
  const computer = useGLTF("./low_poly_setup/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={0.5} groundColor="black" />
      <pointLight intensity={1} />
      <primitive
        className="gg"
        scale={0.65}
        position={[0, -4.2, -1.5]}
        object={computer.scene}
      />
    </mesh>
  );
};

const AutoRotateScene = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    groupRef.current.rotation.y += 0.002;
  });

  return (
    <group ref={groupRef}>
      <OrbitControls maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
      <HeroCanvas />
    </group>
  );
};

const ComputerCanvas = () => {
  return (
    <Canvas
      className="flex !overflow-visible"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}>
      <AutoRotateScene />
      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
