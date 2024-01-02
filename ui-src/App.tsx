import { Suspense, useRef, useState } from "react";
import "./App.css";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stats, Environment, Sphere, OrbitControls } from "@react-three/drei";
import Heart from "./components/Heart";
import Cow from "./components/Cow";
import Motorcycle from "./components/Motorcycle";

import HeartThumb from "./assets/images/thumb_heart.png";
import CowThumb from "./assets/images/thumb_cow.png";
import CowThumb from "./assets/images/thumb_cow.png";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [modelType, setModelType] = useState<string>("heart");
  const GlbModels = [
    { name: "heart", component: Heart, thumb: HeartThumb },
    { name: "cow", component: Cow, thumb: CowThumb },
  ];

  const onCancel = () => {
    parent.postMessage({ pluginMessage: { type: "cancel" } }, "*");
  };

  // canvasを画像に変換
  const onExport = () => {
    const canvas = document.querySelector("canvas");
    const dataUrl = canvas?.toDataURL("image/png");
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
            {(() => {
              switch (modelType) {
                case "heart":
                  return <Motorcycle scale={1} />;
                case "cow":
                  return <Cow scale={1} />;
                default:
                  return <Heart scale={1} />;
              }
            })()}
          </Suspense>
        </Canvas>
        <div className="buttons">
          <button className="brand" onClick={onExport}>
            Add
          </button>
        </div>
      </div>
      <footer>
        <div className="thumbnail">
          {GlbModels.map((model) => {
            return (
              <img
                src={model.thumb}
                alt={model.name}
                onClick={() => setModelType(model.name)}
              />
            );
          })}
        </div>
      </footer>
    </main>
  );
}

export default App;
