/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 ui-src/assets/glb/Locker.glb -o ui-src/components/Locker.tsx -r 
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Cube: THREE.Mesh;
    Cube001_1: THREE.Mesh;
    Cube001_2: THREE.Mesh;
    Cube001_3: THREE.Mesh;
    Cube001_1: THREE.Mesh;
    Cube001_2: THREE.Mesh;
    Cube001_3: THREE.Mesh;
    Cube001_1: THREE.Mesh;
    Cube001_2: THREE.Mesh;
    Cube001_3: THREE.Mesh;
    Cube001_1: THREE.Mesh;
    Cube001_2: THREE.Mesh;
    Cube001_3: THREE.Mesh;
    Cube001_1: THREE.Mesh;
    Cube001_2: THREE.Mesh;
    Cube001_3: THREE.Mesh;
    Cube001_1: THREE.Mesh;
    Cube001_2: THREE.Mesh;
    Cube001_3: THREE.Mesh;
    Cube001_1: THREE.Mesh;
    Cube001_2: THREE.Mesh;
    Cube001_3: THREE.Mesh;
    Cube001_1: THREE.Mesh;
    Cube001_2: THREE.Mesh;
    Cube001_3: THREE.Mesh;
    Cube001_1: THREE.Mesh;
    Cube001_2: THREE.Mesh;
    Cube001_3: THREE.Mesh;
    Cube001_1: THREE.Mesh;
    Cube001_2: THREE.Mesh;
    Cube001_3: THREE.Mesh;
    Cube001_1: THREE.Mesh;
    Cube001_2: THREE.Mesh;
    Cube001_3: THREE.Mesh;
    Cube001_1: THREE.Mesh;
    Cube001_2: THREE.Mesh;
    Cube001_3: THREE.Mesh;
    Cube001_1: THREE.Mesh;
    Cube001_2: THREE.Mesh;
    Cube001_3: THREE.Mesh;
    Cube001_1: THREE.Mesh;
    Cube001_2: THREE.Mesh;
    Cube001_3: THREE.Mesh;
    Cube001_1: THREE.Mesh;
    Cube001_2: THREE.Mesh;
    Cube001_3: THREE.Mesh;
    Cube001_1: THREE.Mesh;
    Cube001_2: THREE.Mesh;
    Cube001_3: THREE.Mesh;
    Cube001_1: THREE.Mesh;
    Cube001_2: THREE.Mesh;
    Cube001_3: THREE.Mesh;
    Cube001_1: THREE.Mesh;
    Cube001_2: THREE.Mesh;
    Cube001_3: THREE.Mesh;
    Cube001_1: THREE.Mesh;
    Cube001_2: THREE.Mesh;
    Cube001_3: THREE.Mesh;
    Cube001_1: THREE.Mesh;
    Cube001_2: THREE.Mesh;
    Cube001_3: THREE.Mesh;
    Cube001_1: THREE.Mesh;
    Cube001_2: THREE.Mesh;
    Cube001_3: THREE.Mesh;
    Cube001_1: THREE.Mesh;
    Cube001_2: THREE.Mesh;
    Cube001_3: THREE.Mesh;
    Cube001_1: THREE.Mesh;
    Cube001_2: THREE.Mesh;
    Cube001_3: THREE.Mesh;
    Cube001_1: THREE.Mesh;
    Cube001_2: THREE.Mesh;
    Cube001_3: THREE.Mesh;
    Cube010_1: THREE.Mesh;
    Cube010_2: THREE.Mesh;
    Cube010_3: THREE.Mesh;
    Cube010_1: THREE.Mesh;
    Cube010_2: THREE.Mesh;
    Cube010_3: THREE.Mesh;
    Cube010_1: THREE.Mesh;
    Cube010_2: THREE.Mesh;
    Cube010_3: THREE.Mesh;
    Cube010_1: THREE.Mesh;
    Cube010_2: THREE.Mesh;
    Cube010_3: THREE.Mesh;
    Cube010_1: THREE.Mesh;
    Cube010_2: THREE.Mesh;
    Cube010_3: THREE.Mesh;
  };
  materials: {
    Material: THREE.MeshStandardMaterial;
    silver02: THREE.MeshStandardMaterial;
    silver: THREE.MeshStandardMaterial;
  };
  animations: GLTFAction[];
};

type ContextType = Record<
  string,
  React.ForwardRefExoticComponent<JSX.IntrinsicElements["mesh"]>
>;

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "https://nogson.github.io/glb-viewer/ui-src/assets/glb/Locker.glb"
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Cube.geometry}
        material={materials.Material}
        position={[0, 5.43, 0]}
        scale={[5, 5, 1]}
      />
      <group position={[-2.724, 9.517, 1.051]} scale={[5, 5, 1]}>
        <mesh
          geometry={nodes.Cube001_1.geometry}
          material={materials.Material}
        />
        <mesh
          geometry={nodes.Cube001_2.geometry}
          material={materials.silver02}
        />
        <mesh geometry={nodes.Cube001_3.geometry} material={materials.silver} />
      </group>
      <group position={[-0.73, 9.517, 1.051]} scale={[5, 5, 1]}>
        <mesh
          geometry={nodes.Cube001_1.geometry}
          material={materials.Material}
        />
        <mesh
          geometry={nodes.Cube001_2.geometry}
          material={materials.silver02}
        />
        <mesh geometry={nodes.Cube001_3.geometry} material={materials.silver} />
      </group>
      <group position={[1.275, 9.517, 1.051]} scale={[5, 5, 1]}>
        <mesh
          geometry={nodes.Cube001_1.geometry}
          material={materials.Material}
        />
        <mesh
          geometry={nodes.Cube001_2.geometry}
          material={materials.silver02}
        />
        <mesh geometry={nodes.Cube001_3.geometry} material={materials.silver} />
      </group>
      <group position={[3.274, 9.517, 1.051]} scale={[5, 5, 1]}>
        <mesh
          geometry={nodes.Cube001_1.geometry}
          material={materials.Material}
        />
        <mesh
          geometry={nodes.Cube001_2.geometry}
          material={materials.silver02}
        />
        <mesh geometry={nodes.Cube001_3.geometry} material={materials.silver} />
      </group>
      <group position={[-2.724, 9.517, -0.031]} scale={[5, 5, 1]}>
        <mesh
          geometry={nodes.Cube001_1.geometry}
          material={materials.Material}
        />
        <mesh
          geometry={nodes.Cube001_2.geometry}
          material={materials.silver02}
        />
        <mesh geometry={nodes.Cube001_3.geometry} material={materials.silver} />
      </group>
      <group position={[-0.73, 9.517, -0.031]} scale={[5, 5, 1]}>
        <mesh
          geometry={nodes.Cube001_1.geometry}
          material={materials.Material}
        />
        <mesh
          geometry={nodes.Cube001_2.geometry}
          material={materials.silver02}
        />
        <mesh geometry={nodes.Cube001_3.geometry} material={materials.silver} />
      </group>
      <group position={[1.275, 9.517, -0.031]} scale={[5, 5, 1]}>
        <mesh
          geometry={nodes.Cube001_1.geometry}
          material={materials.Material}
        />
        <mesh
          geometry={nodes.Cube001_2.geometry}
          material={materials.silver02}
        />
        <mesh geometry={nodes.Cube001_3.geometry} material={materials.silver} />
      </group>
      <group position={[3.274, 9.517, -0.031]} scale={[5, 5, 1]}>
        <mesh
          geometry={nodes.Cube001_1.geometry}
          material={materials.Material}
        />
        <mesh
          geometry={nodes.Cube001_2.geometry}
          material={materials.silver02}
        />
        <mesh geometry={nodes.Cube001_3.geometry} material={materials.silver} />
      </group>
      <group position={[-2.724, 7.518, 1.051]} scale={[5, 5, 1]}>
        <mesh
          geometry={nodes.Cube001_1.geometry}
          material={materials.Material}
        />
        <mesh
          geometry={nodes.Cube001_2.geometry}
          material={materials.silver02}
        />
        <mesh geometry={nodes.Cube001_3.geometry} material={materials.silver} />
      </group>
      <group position={[-0.73, 7.518, 1.051]} scale={[5, 5, 1]}>
        <mesh
          geometry={nodes.Cube001_1.geometry}
          material={materials.Material}
        />
        <mesh
          geometry={nodes.Cube001_2.geometry}
          material={materials.silver02}
        />
        <mesh geometry={nodes.Cube001_3.geometry} material={materials.silver} />
      </group>
      <group position={[1.275, 7.518, 1.051]} scale={[5, 5, 1]}>
        <mesh
          geometry={nodes.Cube001_1.geometry}
          material={materials.Material}
        />
        <mesh
          geometry={nodes.Cube001_2.geometry}
          material={materials.silver02}
        />
        <mesh geometry={nodes.Cube001_3.geometry} material={materials.silver} />
      </group>
      <group position={[3.274, 7.518, 1.051]} scale={[5, 5, 1]}>
        <mesh
          geometry={nodes.Cube001_1.geometry}
          material={materials.Material}
        />
        <mesh
          geometry={nodes.Cube001_2.geometry}
          material={materials.silver02}
        />
        <mesh geometry={nodes.Cube001_3.geometry} material={materials.silver} />
      </group>
      <group position={[-2.724, 5.515, 1.051]} scale={[5, 5, 1]}>
        <mesh
          geometry={nodes.Cube001_1.geometry}
          material={materials.Material}
        />
        <mesh
          geometry={nodes.Cube001_2.geometry}
          material={materials.silver02}
        />
        <mesh geometry={nodes.Cube001_3.geometry} material={materials.silver} />
      </group>
      <group position={[-0.73, 5.515, 1.051]} scale={[5, 5, 1]}>
        <mesh
          geometry={nodes.Cube001_1.geometry}
          material={materials.Material}
        />
        <mesh
          geometry={nodes.Cube001_2.geometry}
          material={materials.silver02}
        />
        <mesh geometry={nodes.Cube001_3.geometry} material={materials.silver} />
      </group>
      <group position={[1.275, 5.515, 1.051]} scale={[5, 5, 1]}>
        <mesh
          geometry={nodes.Cube001_1.geometry}
          material={materials.Material}
        />
        <mesh
          geometry={nodes.Cube001_2.geometry}
          material={materials.silver02}
        />
        <mesh geometry={nodes.Cube001_3.geometry} material={materials.silver} />
      </group>
      <group position={[3.274, 5.515, 1.051]} scale={[5, 5, 1]}>
        <mesh
          geometry={nodes.Cube001_1.geometry}
          material={materials.Material}
        />
        <mesh
          geometry={nodes.Cube001_2.geometry}
          material={materials.silver02}
        />
        <mesh geometry={nodes.Cube001_3.geometry} material={materials.silver} />
      </group>
      <group position={[-2.724, 3.511, 1.051]} scale={[5, 5, 1]}>
        <mesh
          geometry={nodes.Cube001_1.geometry}
          material={materials.Material}
        />
        <mesh
          geometry={nodes.Cube001_2.geometry}
          material={materials.silver02}
        />
        <mesh geometry={nodes.Cube001_3.geometry} material={materials.silver} />
      </group>
      <group position={[-0.73, 3.511, 1.051]} scale={[5, 5, 1]}>
        <mesh
          geometry={nodes.Cube001_1.geometry}
          material={materials.Material}
        />
        <mesh
          geometry={nodes.Cube001_2.geometry}
          material={materials.silver02}
        />
        <mesh geometry={nodes.Cube001_3.geometry} material={materials.silver} />
      </group>
      <group position={[1.275, 3.511, 1.051]} scale={[5, 5, 1]}>
        <mesh
          geometry={nodes.Cube001_1.geometry}
          material={materials.Material}
        />
        <mesh
          geometry={nodes.Cube001_2.geometry}
          material={materials.silver02}
        />
        <mesh geometry={nodes.Cube001_3.geometry} material={materials.silver} />
      </group>
      <group position={[3.274, 3.511, 1.051]} scale={[5, 5, 1]}>
        <mesh
          geometry={nodes.Cube001_1.geometry}
          material={materials.Material}
        />
        <mesh
          geometry={nodes.Cube001_2.geometry}
          material={materials.silver02}
        />
        <mesh geometry={nodes.Cube001_3.geometry} material={materials.silver} />
      </group>
      <group position={[-2.724, 1.516, 1.051]} scale={[5, 5, 1]}>
        <mesh
          geometry={nodes.Cube001_1.geometry}
          material={materials.Material}
        />
        <mesh
          geometry={nodes.Cube001_2.geometry}
          material={materials.silver02}
        />
        <mesh geometry={nodes.Cube001_3.geometry} material={materials.silver} />
      </group>
      <group position={[-0.73, 1.516, 1.051]} scale={[5, 5, 1]}>
        <mesh
          geometry={nodes.Cube001_1.geometry}
          material={materials.Material}
        />
        <mesh
          geometry={nodes.Cube001_2.geometry}
          material={materials.silver02}
        />
        <mesh geometry={nodes.Cube001_3.geometry} material={materials.silver} />
      </group>
      <group position={[1.275, 1.516, 1.051]} scale={[5, 5, 1]}>
        <mesh
          geometry={nodes.Cube001_1.geometry}
          material={materials.Material}
        />
        <mesh
          geometry={nodes.Cube001_2.geometry}
          material={materials.silver02}
        />
        <mesh geometry={nodes.Cube001_3.geometry} material={materials.silver} />
      </group>
      <group position={[3.274, 1.516, 1.051]} scale={[5, 5, 1]}>
        <mesh
          geometry={nodes.Cube001_1.geometry}
          material={materials.Material}
        />
        <mesh
          geometry={nodes.Cube001_2.geometry}
          material={materials.silver02}
        />
        <mesh geometry={nodes.Cube001_3.geometry} material={materials.silver} />
      </group>
      <group position={[-4.722, 9.514, 1.097]}>
        <mesh
          geometry={nodes.Cube010_1.geometry}
          material={materials.Material}
        />
        <mesh
          geometry={nodes.Cube010_2.geometry}
          material={materials.silver02}
        />
        <mesh geometry={nodes.Cube010_3.geometry} material={materials.silver} />
      </group>
      <group position={[-4.722, 7.515, 1.097]}>
        <mesh
          geometry={nodes.Cube010_1.geometry}
          material={materials.Material}
        />
        <mesh
          geometry={nodes.Cube010_2.geometry}
          material={materials.silver02}
        />
        <mesh geometry={nodes.Cube010_3.geometry} material={materials.silver} />
      </group>
      <group position={[-4.722, 5.513, 1.097]}>
        <mesh
          geometry={nodes.Cube010_1.geometry}
          material={materials.Material}
        />
        <mesh
          geometry={nodes.Cube010_2.geometry}
          material={materials.silver02}
        />
        <mesh geometry={nodes.Cube010_3.geometry} material={materials.silver} />
      </group>
      <group position={[-4.722, 3.509, 1.097]}>
        <mesh
          geometry={nodes.Cube010_1.geometry}
          material={materials.Material}
        />
        <mesh
          geometry={nodes.Cube010_2.geometry}
          material={materials.silver02}
        />
        <mesh geometry={nodes.Cube010_3.geometry} material={materials.silver} />
      </group>
      <group position={[-4.722, 1.514, 1.097]}>
        <mesh
          geometry={nodes.Cube010_1.geometry}
          material={materials.Material}
        />
        <mesh
          geometry={nodes.Cube010_2.geometry}
          material={materials.silver02}
        />
        <mesh geometry={nodes.Cube010_3.geometry} material={materials.silver} />
      </group>
    </group>
  );
}

useGLTF.preload(
  "https://nogson.github.io/glb-viewer/ui-src/assets/glb/Locker.glb"
);
