import { FC, Suspense, useRef, useState } from "react";

import { useGLTF } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Canvas } from "@react-three/fiber";

type FileUploadProps = {
  // changeGlbData: (dataUrl: File | null) => void;
};

const GLBModel = ({ scene }) => {
  return <primitive object={scene} />;
};

const FileUpload: FC<FileUploadProps> = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploadData, setUploadData] = useState<File | null>(null);

  const onUpload = async () => {
    if (inputRef.current?.files) {
      const loader = new GLTFLoader();
      const url = URL.createObjectURL(inputRef.current.files[0]);
      useGLTF.preload(url);
      setTimeout(() => {
        const { scene } = useGLTF(url);
        console.log(scene);
        setUploadData(scene);
      }, 1000);
    }
  };

  return (
    <>
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
        <ambientLight intensity={3} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={5}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          castShadow
        />
        <Suspense fallback={null}>
          {uploadData && <GLBModel scene={uploadData} />}
        </Suspense>
      </Canvas>

      <div className="buttons">
        <input type="file" accept=".glb" ref={inputRef} onChange={onUpload} />
      </div>
    </>
  );
};

export default FileUpload;
