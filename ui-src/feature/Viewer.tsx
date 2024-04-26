import { FC, useState, Suspense, useEffect, useRef, lazy } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import {
  OrbitControls,
  OrthographicCamera,
  PerspectiveCamera,
} from "@react-three/drei";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import FileUpload from "../feature/FileUpload";
import Preloader from "../components/Preloader";
import { GlbModel } from "../types/commonTypes";
import GlbGroup from "../components/GlbGroup";
import Light from "../feature/Light";
import { useControls, Leva } from "leva";

const viewerStyle = css`
  .canvas {
    height: 500px;
    margin: 0 0 0 0;
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
  models: GlbModel[];
};

const Viewer: FC<ViewerProps> = ({ modelType, setModelType, models }) => {
  const {
    cameraType,
    AmbientLight,
    DirectionalLight,
    DirectionalLightPosition,
    Environment,
  } = useControls({
    cameraType: {
      value: "Perspective",
      options: ["Perspective", "Orthographic"],
    },
    AmbientLight: {
      value: 1,
      min: 0,
      max: 3,
      step: 0.1,
    },
    DirectionalLight: {
      value: 5,
      min: 0,
      max: 10,
      step: 0.5,
    },
    DirectionalLightPosition: {
      value: [5, 5, 5],
      min: -50,
      max: 50,
      step: 1,
    },
    Environment: {
      options: [
        "sunset",
        "dawn",
        "night",
        "warehouse",
        "forest",
        "apartment",
        "studio",
        "city",
        "park",
        "lobby",
      ],
    },
  });

  const [uploadData, setUploadData] = useState<any>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const onExport = () => {
    const canvas = document.querySelector("canvas");
    const dataUrl = canvas?.toDataURL("image/png");
    parent.postMessage({ pluginMessage: { type: "export", dataUrl } }, "*");
  };

  function CetCamera() {
    if (cameraType === "Perspective") {
      return (
        <PerspectiveCamera
          makeDefault
          position={[0, 0, 3]}
          fov={50}
          aspect={window.innerWidth / window.innerHeight}
          near={0.1}
          far={2000}
        />
      );
    } else {
      return (
        <OrthographicCamera
          makeDefault
          zoom={2.3}
          top={3}
          bottom={-3}
          left={-3}
          right={3}
          near={0.1}
          far={2000}
          position={[0, 0, 3]}
        />
      );
    }
  }

  useEffect(() => {
    if (modelType) {
      setUploadData(null);
    }
  }, [modelType, uploadData]);

  const GLBComponent = lazy(() => import(`../components/${modelType}.tsx`));

  return (
    <>
      <Leva collapsed={true} />
      <div css={viewerStyle}>
        <div className="canvas">
          <Suspense fallback={<Preloader />}>
            <Canvas
              gl={{ preserveDrawingBuffer: true }}
              dpr={window.devicePixelRatio}
              shadows
            >
              <CetCamera />
              <OrbitControls />
              <Light
                ambientLight={AmbientLight}
                directionalLight={DirectionalLight}
                directionalLightPosition={DirectionalLightPosition}
                // useEnvironment={UseEnvironment}
                // environment={Environment}
              />

              <GlbGroup
                modelType={modelType}
                models={models}
                component={
                  uploadData ? (
                    <primitive object={uploadData} />
                  ) : (
                    <GLBComponent />
                  )
                }
              />
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
          </Suspense>
        </div>
        {isLoaded && <Preloader />}
      </div>
    </>
  );
};

export default Viewer;
