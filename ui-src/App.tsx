import { Suspense, useRef, useState } from "react";
import "./App.css";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stats, Environment, Sphere, OrbitControls } from "@react-three/drei";
import HeartThumb from "./assets/images/thumb_heart.png";
import CowThumb from "./assets/images/thumb_cow.png";
import MotorcycleThumb from "./assets/images/thumb_Motorcycle.png";
import Footer from "./components/Footer";
import Viewer from "./components/Viewer";
import FileUpload from "./components/FileUpload";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [modelType, setModelType] = useState<string>("heart");
  const GlbModels = [
    { name: "heart", thumb: HeartThumb },
    { name: "cow", thumb: CowThumb },
    { name: "motorcycle", thumb: MotorcycleThumb },
  ];

  // const changeGlbData = (data: File | null) => {
  //   setUploadData(data);
  // };

  return (
    <main>
      <div className="content">
        <Viewer modelType={modelType} />
      </div>
      <Footer GlbModels={GlbModels} setModelType={setModelType} />
    </main>
  );
}

export default App;
