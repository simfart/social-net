import {
  FC,
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import videoIcon from "../../../images/Video.png";
import imgIcon from "../../../images/Image.png";

import "./ContentMenu.scss";

import { cn } from "@bem-react/classname";

const CnContent = cn("content");

export interface IContentMenu extends PropsWithChildren {
  onClickImg?: () => void;
  onClickVideo?: () => void;
}

export const ContentMenu: FC<IContentMenu> = ({ onClickVideo, onClickImg }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = useCallback(() => {
    setIsChecked(!isChecked);
  }, [isChecked]);

  const checkbox = useRef<HTMLInputElement | null>(null);

  const handleClick = (item: string) => {
    item === "img" && onClickImg?.();
    item === "video" && onClickVideo?.();
    setIsChecked(false);
  };
  const menu = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: TouchEvent | MouseEvent) => {
      if (menu.current && !menu.current.contains(event.target as Node)) {
        setIsChecked(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div ref={menu} className={CnContent("menu")}>
      <input
        type="checkbox"
        id={CnContent("checkbox")}
        className={CnContent("checkbox")}
        checked={isChecked}
        onChange={handleOnChange}
        ref={checkbox}
      />
      <label
        htmlFor={CnContent("checkbox")}
        className={CnContent("image")}
      ></label>

      <ul className={CnContent("list")}>
        <li>
          <button name="img" onClick={() => handleClick("img")}>
            <img src={imgIcon} alt="Add video" />
          </button>
        </li>
        <li>
          <button onClick={() => handleClick("video")}>
            <img src={videoIcon} alt="Add video" />
          </button>
        </li>
      </ul>
    </div>
  );
};
