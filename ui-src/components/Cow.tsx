/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 ./ui-src/assets/glb/Cow.glb -o ./ui-src/components/Cow.tsx 
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Cow_1: THREE.SkinnedMesh;
    Cow_2: THREE.SkinnedMesh;
    Cow_3: THREE.SkinnedMesh;
    Cow_4: THREE.SkinnedMesh;
    Cow_5: THREE.SkinnedMesh;
    Cow_6: THREE.SkinnedMesh;
    Cow_7: THREE.SkinnedMesh;
    Body: THREE.Bone;
    IKBackLegL: THREE.Bone;
    IKFrontLegL: THREE.Bone;
    IKBackLegR: THREE.Bone;
    IKFrontLegR: THREE.Bone;
  };
  materials: {
    Main: THREE.MeshStandardMaterial;
    Main_Light: THREE.MeshStandardMaterial;
    Muzzle: THREE.MeshStandardMaterial;
    Hooves: THREE.MeshStandardMaterial;
    Eye_Black: THREE.MeshStandardMaterial;
    Eye_White: THREE.MeshStandardMaterial;
    Horns: THREE.MeshStandardMaterial;
  };
  animations: GLTFAction[];
};

type ActionName =
  | "Attack_Headbutt"
  | "Attack_Kick"
  | "Death"
  | "Eating"
  | "Gallop"
  | "Gallop_Jump"
  | "Idle_HitReact_Left"
  | "Idle_HitReact_Right"
  | "Jump_toIdle"
  | "Walk"
  | "Idle_Headlow"
  | "Idle_2"
  | "Idle"
  | "AnimalArmature|Attack_Headbutt"
  | "AnimalArmature|Attack_Kick"
  | "AnimalArmature|Death"
  | "AnimalArmature|Eating"
  | "AnimalArmature|Gallop"
  | "AnimalArmature|Gallop_Jump"
  | "AnimalArmature|Idle"
  | "AnimalArmature|Idle_2"
  | "AnimalArmature|Idle_Headlow"
  | "AnimalArmature|Idle_HitReact_Left"
  | "AnimalArmature|Jump_toIdle"
  | "AnimalArmature|Walk";
interface GLTFAction extends THREE.AnimationClip {
  name: ActionName;
}
type ContextType = Record<
  string,
  React.ForwardRefExoticComponent<
    JSX.IntrinsicElements["skinnedMesh"] | JSX.IntrinsicElements["bone"]
  >
>;

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { nodes, materials, animations } = useGLTF(
    "https://nogson.github.io/glb-viewer/ui-src/assets/glb/Cow.glb"
  ) as GLTFResult;
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null} position={[0, -0.5, 0]}>
      <group name="Root_Scene">
        <group name="RootNode">
          <group
            name="AnimalArmature"
            rotation={[-Math.PI / 2, 0, 0]}
            scale={20}
          >
            <primitive object={nodes.Body} />
            <primitive object={nodes.IKBackLegL} />
            <primitive object={nodes.IKFrontLegL} />
            <primitive object={nodes.IKBackLegR} />
            <primitive object={nodes.IKFrontLegR} />
          </group>
          <group name="Cow" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name="Cow_1"
              geometry={nodes.Cow_1.geometry}
              material={materials.Main}
              skeleton={nodes.Cow_1.skeleton}
            />
            <skinnedMesh
              name="Cow_2"
              geometry={nodes.Cow_2.geometry}
              material={materials.Main_Light}
              skeleton={nodes.Cow_2.skeleton}
            />
            <skinnedMesh
              name="Cow_3"
              geometry={nodes.Cow_3.geometry}
              material={materials.Muzzle}
              skeleton={nodes.Cow_3.skeleton}
            />
            <skinnedMesh
              name="Cow_4"
              geometry={nodes.Cow_4.geometry}
              material={materials.Hooves}
              skeleton={nodes.Cow_4.skeleton}
            />
            <skinnedMesh
              name="Cow_5"
              geometry={nodes.Cow_5.geometry}
              material={materials.Eye_Black}
              skeleton={nodes.Cow_5.skeleton}
            />
            <skinnedMesh
              name="Cow_6"
              geometry={nodes.Cow_6.geometry}
              material={materials.Eye_White}
              skeleton={nodes.Cow_6.skeleton}
            />
            <skinnedMesh
              name="Cow_7"
              geometry={nodes.Cow_7.geometry}
              material={materials.Horns}
              skeleton={nodes.Cow_7.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(
  "https://nogson.github.io/glb-viewer/ui-src/assets/glb/Cow.glb"
);
