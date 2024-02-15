import * as THREE from "three";
import React, { FC, useEffect, useRef, useState } from "react";
import { GlbModel } from "../types/commonTypes";
import { Vector3 } from "@react-three/fiber";

type ViewerProps = {
  modelType: string;
  models: GlbModel[];
  component: any;
};

const GlbGroup: FC<ViewerProps> = ({ models, modelType, component }) => {
  const groupRef = useRef<THREE.Group>();
  const [defaultScale, setDefaultScale] = useState<Vector3>([1, 1, 1]);
  const [defaultPosition, setDefaultPosition] = useState<Vector3>([0, 0, 0]);

  const getDefaultObjectVal = (
    object: any
  ): {
    scale: Vector3;
    position: Vector3;
  } => {
    const baseSize = 2;
    const boundingBox = new THREE.Box3().setFromObject(object);
    const size = boundingBox.getSize(new THREE.Vector3());
    const position = boundingBox.getCenter(new THREE.Vector3());
    const scale = size.x > size.y ? baseSize / size.x : baseSize / size.y;
    return {
      scale: [scale, scale, scale],
      position: [-position.x * scale, -position.y * scale, -position.z * scale],
    };
  };

  useEffect(() => {
    setDefaultScale([1, 1, 1]);
    setDefaultPosition([0, 0, 0]);
    setTimeout(() => {
      if (groupRef.current) {
        const defaultVal = getDefaultObjectVal(groupRef.current);
        setDefaultScale(defaultVal.scale);
        setDefaultPosition(defaultVal.position);
      }
    }, 0);
  }, [modelType, groupRef, component]);

  return (
    <group ref={groupRef} scale={defaultScale} position={defaultPosition}>
      {component}
    </group>
  );
};

export default GlbGroup;
