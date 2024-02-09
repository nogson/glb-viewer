import { FC, Suspense, useRef, useState } from "react";
import { Group, Object3DEventMap } from "three";
import { useGLTF } from "@react-three/drei";
import { css } from "@emotion/react";

type FileUploadProps = {
  setUploadData: (data: Group<Object3DEventMap> | null) => void;
  setIsLoaded: (isLoaded: boolean) => void;
  setModelType: (name: string) => void;
};

const GLBModel: FC<{ scene: Group<Object3DEventMap> }> = ({ scene }) => {
  return <primitive object={scene} />;
};

const fileUploadStyle = css`
  label {
    display: block;
    color: var(--color-bg-brand);
    background-color: rgba(255, 255, 255, 0.5);
    border: 1px solid var(--color-bg-brand);
    border-radius: 0.25rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
    font-size: 12px;
  }
  input[type="file"] {
    display: none;
  }
`;

const FileUpload: FC<FileUploadProps> = ({
  setUploadData,
  setIsLoaded,
  setModelType,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onUpload = async () => {
    const data = inputRef.current?.files;
    if (data && data.length > 0) {
      setIsLoaded(true);
      const url = URL.createObjectURL(data[0]);
      useGLTF.preload(url);
      // TODO 遅延させないと読み込めない
      setTimeout(() => {
        const { scene } = useGLTF(url);
        setUploadData(scene);
        // 選択中のモデルのアクティブを解除
        setModelType("");
        URL.revokeObjectURL(url);
        setIsLoaded(false);
      }, 1000);
    }
  };

  return (
    <>
      <div css={fileUploadStyle}>
        <label>
          <input type="file" accept=".glb" ref={inputRef} onChange={onUpload} />
          <span>Upload GLB</span>
        </label>
      </div>
    </>
  );
};

export default FileUpload;
