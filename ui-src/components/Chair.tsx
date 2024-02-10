/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 ui-src/assets/glb/Chair.glb -o ui-src/components/Chair.tsx 
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Cube: THREE.Mesh;
    Cube001: THREE.Mesh;
  };
  materials: {
    ["wood.001"]: THREE.MeshStandardMaterial;
  };
};

type ContextType = Record<
  string,
  React.ForwardRefExoticComponent<JSX.IntrinsicElements["mesh"]>
>;

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "https://nogson.github.io/glb-viewer/ui-src/assets/glb/Chair.glb"
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube.geometry} material={materials["wood.001"]} />
      <mesh
        geometry={nodes.Cube001.geometry}
        material={materials["wood.001"]}
      />
    </group>
  );
}

useGLTF.preload(
  "https://nogson.github.io/glb-viewer/ui-src/assets/glb/Chair.glb"
);