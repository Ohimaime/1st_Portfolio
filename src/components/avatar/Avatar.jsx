import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export default function Avatar({ mousePosition }) {
  const group = useRef();
  const { scene } = useGLTF("https://models.readyplayer.me/687eec235aaf0807f4d0f437.glb");

  useGLTF.preload("https://models.readyplayer.me/687eec235aaf0807f4d0f437.glb");

  // Subtle floating + mouse follow
  useFrame((state) => {
    if (group.current) {
      const targetY = (mousePosition.x - 0.5) * 0.2;
      const targetX = (mousePosition.y - 0.5) * -0.1;

      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetY, 0.05);
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetX, 0.05);
      group.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
    }
  });

  // Clone + scale
  const avatar = scene.clone();
  avatar.scale.set(2.5, 2.5, 2.5);
  avatar.position.y = -1;

  return (
    <group ref={group}>
      <primitive object={avatar} />
    </group>
  );
}
