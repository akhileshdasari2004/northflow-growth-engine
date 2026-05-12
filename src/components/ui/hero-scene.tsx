import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Shape, ExtrudeGeometry, Group } from "three";

interface BoxProps {
  position: [number, number, number];
  rotation: [number, number, number];
}

const Box: React.FC<BoxProps> = ({ position, rotation }) => {
  const geometry = useMemo(() => {
    const shape = new Shape();
    const angleStep = Math.PI * 0.5;
    const radius = 1;
    shape.absarc(2, 2, radius, angleStep * 0, angleStep * 1);
    shape.absarc(-2, 2, radius, angleStep * 1, angleStep * 2);
    shape.absarc(-2, -2, radius, angleStep * 2, angleStep * 3);
    shape.absarc(2, -2, radius, angleStep * 3, angleStep * 4);
    const geo = new ExtrudeGeometry(shape, {
      depth: 0.3,
      bevelEnabled: true,
      bevelThickness: 0.05,
      bevelSize: 0.05,
      bevelSegments: 20,
      curveSegments: 20,
    });
    geo.center();
    return geo;
  }, []);

  return (
    <mesh geometry={geometry} position={position} rotation={rotation}>
      <meshPhysicalMaterial
        color="#d9b681"
        metalness={0.6}
        roughness={0.4}
        emissive="#1a1410"
        emissiveIntensity={0.2}
      />
    </mesh>
  );
};

const AnimatedBoxes: React.FC = () => {
  const groupRef = useRef<Group>(null);
  useFrame((_state, delta) => {
    if (groupRef.current) groupRef.current.rotation.x += delta * 0.05;
  });
  const boxes = Array.from({ length: 50 }, (_, index) => ({
    position: [(index - 25) * 0.75, 0, 0] as [number, number, number],
    rotation: [(index - 10) * 0.1, Math.PI / 2, 0] as [number, number, number],
    id: index,
  }));
  return (
    <group ref={groupRef} rotation={[0, 0.5, 0]}>
      {boxes.map((box) => (
        <Box key={box.id} position={box.position} rotation={box.rotation} />
      ))}
    </group>
  );
};

export const Scene: React.FC = () => (
  <Canvas camera={{ position: [5, 5, 20], fov: 40 }} dpr={[1, 2]}>
    <ambientLight intensity={0.4} />
    <directionalLight position={[10, 10, 5]} intensity={0.8} />
    <pointLight position={[-10, -10, -10]} intensity={0.3} color="#d9b681" />
    <AnimatedBoxes />
  </Canvas>
);
