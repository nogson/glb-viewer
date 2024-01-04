import { FC, useState, Suspense, useEffect } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Heart from "./Heart";
import Cow from "./Cow";
import Motorcycle from "./Motorcycle";
import FileUpload from "./FileUpload";
import { Group, Object3DEventMap } from "three";
import Preloader from "./Preloader";

const viewerStyle = css`
  .canvas {
    height: 400px;
  }
  .buttons {
    display: flex;
    position: absolute;
    right: 8px;
    bottom: 8px;
    button {
      font-size: 12px;
      margin-left: 8px;
    }
  }
`;

type ViewerProps = {
  modelType: string;
  setModelType: (name: string) => void;
};

const getGLBComponent = (modelType: string) => {
  switch (modelType) {
    case "heart":
      return <Heart />;
    case "cow":
      return <Cow />;
    case "motorcycle":
      return <Motorcycle />;
    default:
      return <Heart />;
  }
};

const Viewer: FC<ViewerProps> = ({ modelType, setModelType }) => {
  const [uploadData, setUploadData] = useState<Group<Object3DEventMap> | null>(
    null
  );
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const onExport = () => {
    const canvas = document.querySelector("canvas");
    const dataUrl = canvas?.toDataURL("image/png");
    parent.postMessage({ pluginMessage: { type: "export", dataUrl } }, "*");
  };

  useEffect(() => {
    setUploadData(null);
  }, [modelType]);

  return (
    <>
      <div css={viewerStyle}>
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
            <Suspense fallback={<Preloader />}>
              {uploadData ? (
                <primitive object={uploadData} />
              ) : (
                getGLBComponent(modelType)
              )}
            </Suspense>
          </Canvas>
          <div className="buttons">
            <FileUpload
              setUploadData={setUploadData}
              setIsLoaded={setIsLoaded}
              setModelType={setModelType}
            />
            <button className="brand" onClick={onExport}>
              Add
            </button>
          </div>
        </div>
        {isLoaded && <Preloader />}
      </div>
    </>
  );
};

export default Viewer;
