import { FC, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stats, Environment, Sphere, OrbitControls } from "@react-three/drei";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Heart from "./Heart";
import Cow from "./Cow";
import Motorcycle from "./Motorcycle";

const viewerStyle = css`
  .canvas {
    height: 400px;
  }
  .buttons {
    position: absolute;
    right: 8px;
    top: 8px;
  }
`;

const Viewer: FC<{ modelType: string }> = ({ modelType }) => {
  // canvasを画像に変換
  const onExport = () => {
    const canvas = document.querySelector("canvas");
    const dataUrl = canvas?.toDataURL("image/png");
    parent.postMessage({ pluginMessage: { type: "export", dataUrl } }, "*");
  };

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
            <Suspense fallback={null}>
              {(() => {
                switch (modelType) {
                  case "heart":
                    return <Heart scale={1} />;
                  case "cow":
                    return <Cow scale={1} />;
                  case "motorcycle":
                    return <Motorcycle scale={1} />;
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
      </div>
    </>
  );
};

export default Viewer;
