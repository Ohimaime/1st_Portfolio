import { PerspectiveCamera } from '@react-three/drei';

export default function CameraSetup() {
  return (
    <PerspectiveCamera makeDefault position={[0, 0.5, 4]} fov={50} near={0.1} far={1000} />
  );
}