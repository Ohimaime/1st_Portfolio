import { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Avatar from './Avatar';
import CameraSetup from './CameraSetup';
import Lights from './Lights';
import Loader from './Loader';
import LoadingProgress from './LoadingProgress';
import { OrbitControls } from '@react-three/drei';

export default function ReadyPlayerMeAvatar() {
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const [loadingProgress, setLoadingProgress] = useState(0);
  const containerRef = useRef();

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    };
    const container = containerRef.current;
    container?.addEventListener('mousemove', handleMouseMove);
    return () => container?.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 20;
      });
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full relative overflow-hidden rounded-xl"
      style={{
        background: 'linear-gradient(135deg, rgba(16, 23, 42, 0.8), rgba(30, 41, 82, 0.8))',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(59, 130, 246, 0.2)',
      }}
    >
      <Canvas shadows dpr={[1, 2]} gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}>
        <CameraSetup />
        <Lights />
        <Suspense fallback={null}>
          <Avatar mousePosition={mousePosition} />
        </Suspense>
        <OrbitControls enablePan={false} enableZoom={false} enableRotate={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 3} />
      </Canvas>

      {loadingProgress < 100 && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50 backdrop-blur-sm">
          <div className="text-center">
            <Loader />
            <LoadingProgress progress={loadingProgress} />
          </div>
        </div>
      )}

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="absolute bottom-2 right-2 text-xs text-blue-400/60 pointer-events-none">
        Move mouse to interact
      </div>
    </div>
  );
}