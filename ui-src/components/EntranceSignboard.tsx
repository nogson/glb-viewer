/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 ui-src/assets/glb/EntranceSignboard.glb -o ui-src/components/EntranceSignboard.tsx 
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Cube_1: THREE.Mesh;
    Cube_2: THREE.Mesh;
    Curve_1: THREE.Mesh;
    Curve_2: THREE.Mesh;
    Curve001_1: THREE.Mesh;
    Curve001_2: THREE.Mesh;
  };
  materials: {
    ["Material.002"]: THREE.MeshStandardMaterial;
    ["Material.003"]: THREE.MeshStandardMaterial;
    ["Material.001"]: THREE.MeshStandardMaterial;
  };
};

type ContextType = Record<
  string,
  React.ForwardRefExoticComponent<JSX.IntrinsicElements["mesh"]>
>;

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "https://nogson.github.io/glb-viewer/ui-src/assets/glb/EntranceSignboard.glb"
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <pointLight
        intensity={16305.424}
        decay={2}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <group
        position={[-0.003, -0.04, 0.426]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={10.603}
      >
        <mesh
          geometry={nodes.Curve_1.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Curve_2.geometry}
          material={materials["Material.002"]}
        />
      </group>
      <group
        position={[-0.003, -0.04, -0.425]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={10.603}
      >
        <mesh
          geometry={nodes.Curve001_1.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Curve001_2.geometry}
          material={materials["Material.002"]}
        />
      </group>
      <mesh
        geometry={nodes.Cube_1.geometry}
        material={materials["Material.002"]}
      />
      <mesh
        geometry={nodes.Cube_2.geometry}
        material={materials["Material.003"]}
      />
    </group>
  );
}

useGLTF.preload(
  "https://nogson.github.io/glb-viewer/ui-src/assets/glb/EntranceSignboard.glb"
);
