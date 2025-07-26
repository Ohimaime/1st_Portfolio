import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function Lights() {
  const pointRef = useRef();
  useFrame((state) => {
    if (pointRef.current) {
      pointRef.current.intensity = 0.8 + Math.sin(state.clock.elapsedTime * 2) * 0.2;
    }
  });

  return (
    <>
      <ambientLight intensity={0.4} color="#4a90e2" />
      <directionalLight
        position={[5, 10, 5]}
        intensity={1}
        color="#ffffff"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <pointLight
        ref={pointRef}
        position={[-3, 2, 4]}
        intensity={0.8}
        color="#9c4dcc"
        distance={10}
      />
      <spotLight
        position={[0, 8, 3]}
        intensity={0.5}
        color="#64b5f6"
        angle={Math.PI / 6}
        penumbra={0.5}
      />
    </>
  );
}