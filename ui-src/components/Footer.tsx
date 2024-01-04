import { FC, useRef, useState } from "react";
import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { GlbModel } from "../types/commonTypes";

const footerStyle = css`
  padding: 8px;
  background: #f7f7f7;
  min-height: 100px;
  .thumbnail {
    display: flex;
    flex-wrap: wrap;
    img {
      width: 19%;
      margin: 0 1.25% 1.25% 0;
      box-sizing: border-box;
      cursor: pointer;
      &:nth-of-type(5n) {
        margin-right: 0;
      }
    }
  }
`;

interface FooterProps {
  GlbModels: GlbModel[]; // Replace 'any' with the appropriate type for GlbModels
  setModelType: (name: string) => void; // Replace 'any' with the appropriate type for setModelType
}

const Footer: FC<FooterProps> = ({ GlbModels, setModelType }) => {
  return (
    <>
      <footer css={footerStyle}>
        <div className="thumbnail">
          {GlbModels.map((model) => {
            return (
              <img
                src={model.thumb}
                alt={model.name}
                onClick={() => setModelType(model.name)}
              />
            );
          })}
        </div>
      </footer>
    </>
  );
};

export default Footer;
