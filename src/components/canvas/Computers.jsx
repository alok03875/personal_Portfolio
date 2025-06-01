import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.5 : 0.75}
        position={isMobile ? [0, -3.2, -1.8] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

// WebGL support detection
const checkWebGLSupport = () => {
  try {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    return !!context;
  } catch (e) {
    return false;
  }
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [webGLSupported, setWebGLSupported] = useState(true);
  const [modelLoaded, setModelLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check WebGL support
    if (!checkWebGLSupport()) {
      setWebGLSupported(false);
      return;
    }

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

  // Fallback component for unsupported devices
  const FallbackComponent = () => (
    <div className="absolute inset-0 w-full h-full z-0 flex items-center justify-center bg-gradient-to-b from-gray-900 to-black">
      <div className="text-center text-white p-8">
        <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
          <div className="text-4xl">💻</div>
        </div>
        <p className="text-lg opacity-80">3D Experience Loading...</p>
      </div>
    </div>
  );

  if (!webGLSupported) {
    return <FallbackComponent />;
  }

  return (
    <div className="absolute inset-0 w-full h-full z-0">
      <Canvas
        frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ 
          preserveDrawingBuffer: true,
          antialias: false, // Disable antialiasing for better performance on mobile
          alpha: true,
          powerPreference: "high-performance"
        }}
        onCreated={({ gl }) => {
          // Additional WebGL context settings for better compatibility
          gl.setClearColor(0x000000, 0);
        }}
        onError={(error) => {
          console.error("Canvas error:", error);
          setError(error);
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <ErrorBoundary fallback={<FallbackComponent />}>
            <OrbitControls
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <Computers isMobile={isMobile} />
          </ErrorBoundary>
        </Suspense>
        <Preload all />
      </Canvas>
      
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 z-10">
          <FallbackComponent />
        </div>
      )}
    </div>
  );
};

// Simple Error Boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("3D Canvas Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

export default ComputersCanvas;