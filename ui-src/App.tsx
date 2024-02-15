import { Suspense, useRef, useState } from "react";
import "./App.css";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stats, Environment, Sphere, OrbitControls } from "@react-three/drei";
// import Locker from "./assets/images/thumb_Locker.png";
import Footer from "./components/Footer";
import Viewer from "./feature/Viewer";
import GlbModels from "./constants/GlbModels";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [modelType, setModelType] = useState<string>("Tub");
  const models = GlbModels;

  return (
    <main>
      <div className="content">
        <Viewer
          modelType={modelType}
          setModelType={setModelType}
          models={models}
        />
      </div>
      <Footer
        models={models}
        modelType={modelType}
        setModelType={setModelType}
      />
    </main>
  );
}

export default App;
