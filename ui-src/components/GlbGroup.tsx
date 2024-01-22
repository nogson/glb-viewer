import * as THREE from "three";
import React, { FC, useEffect, useRef } from "react";
import { GlbModel } from "../types/commonTypes";

type ViewerProps = {
  modelType: string;
  models: GlbModel[];
  uploadData: any;
};

const GlbGroup: FC<ViewerProps> = ({ models, modelType, uploadData }) => {
  const groupRef = useRef<THREE.Group>();

  const getGLBComponent = (modelType: string) => {
    // nameがmodelTypeと一致するものを返す
    const model = models.find((model) => model.name === modelType);
    return model?.component;
  };

  useEffect(() => {
    if (groupRef.current) {
      const boundingBox = new THREE.Box3().setFromObject(groupRef.current);
      const size = boundingBox.getSize(new THREE.Vector3());
      console.log("モデルのサイズ:", size);
    }
  }, [modelType, groupRef]);

  if (uploadData) {
    return <primitive object={uploadData} />;
  } else {
    return <group ref={groupRef}>{getGLBComponent(modelType)}</group>;
  }
};

export default GlbGroup;
