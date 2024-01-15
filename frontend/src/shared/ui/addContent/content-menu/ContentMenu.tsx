import { FC, PropsWithChildren, useState } from "react";

import { Button } from "shared/ui/button";

import videoIcon from "../../../images/Video.png";
import imgIcon from "../../../images/Image.png";

import "./ContentMenu.scss";

import { cn } from "@bem-react/classname";

const CnContent = cn("content");

export interface IContentMenu extends PropsWithChildren {
  onClickImg?: () => void;
  onClickVideo?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isChecked: boolean | undefined;
}

export const ContentMenu: FC<IContentMenu> = ({
  onClickVideo,
  onClickImg,
  isChecked,
}) => {
  return (
    <div className={CnContent("menu")}>
      <input
        type="checkbox"
        id={CnContent("checkbox")}
        className={CnContent("checkbox")}
      />
      <label
        htmlFor={CnContent("checkbox")}
        className={CnContent("image")}
      ></label>
      <ul className={CnContent("list")}>
        <li></li>
        <li>
          <button name="img" onClick={onClickImg}>
            <img src={imgIcon} alt="Add video" />
          </button>
          <button onClick={onClickVideo}>
            <img src={videoIcon} alt="Add video" />
          </button>
        </li>
      </ul>
    </div>
  );
};
