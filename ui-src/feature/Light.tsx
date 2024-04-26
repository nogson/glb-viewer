import { Environment } from "@react-three/drei";
import { Vector3 } from "@react-three/fiber";
import { FC } from "react";

type LightProps = {
  ambientLight: number;
  directionalLight: number;
  directionalLightPosition: Vector3;
};

const Light: FC<LightProps> = ({
  ambientLight,
  directionalLight,
  directionalLightPosition,
}) => {
  return (
    <>
      <ambientLight intensity={ambientLight} />
      <directionalLight
        position={directionalLightPosition}
        intensity={directionalLight}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        castShadow
      />
    </>
  );
};

export default Light;
