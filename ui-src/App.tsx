import { Suspense, useRef } from "react";
import "./App.css";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stats, Environment, Sphere, OrbitControls } from "@react-three/drei";
import Heart from "./components/Heart";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);

  const onCancel = () => {
    parent.postMessage({ pluginMessage: { type: "cancel" } }, "*");
  };

  // canvasを画像に変換
  const onExport = () => {
    const canvas = document.querySelector("canvas");
    const dataUrl = canvas?.toDataURL("image/png");
    const imageData = Uint8Array.from(atob(dataUrl!.split(",")[1]), (c) =>
      c.charCodeAt(0)
    );

    parent.postMessage({ pluginMessage: { type: "export", dataUrl } }, "*");
  };

  return (
    <main>
      <div className="canvas">
        <Canvas
          gl={{ preserveDrawingBuffer: true }}
          camera={{
            position: [0, 0, 3],
            fov: 50,
            aspect: window.innerWidth / window.innerHeight,
            near: 0.1,
            far: 2000,
          }}
          dpr={window.devicePixelRatio}
          shadows
        >
          <OrbitControls />
          <ambientLight intensity={3} />
          <directionalLight
            position={[5, 5, 5]}
            intensity={5}
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            castShadow
          />
          <pointLight position={[10, 10, 10]} />
          <Suspense fallback={null}>
            <Heart scale={1} />
          </Suspense>
        </Canvas>
      </div>

      <footer>
        <div className="thumbnail">
          <img src="" alt="" />
        </div>
        <button className="brand" onClick={onExport}>
          Create
        </button>
        <button onClick={onCancel}>Cancel</button>
      </footer>
    </main>
  );
}

export default App;
