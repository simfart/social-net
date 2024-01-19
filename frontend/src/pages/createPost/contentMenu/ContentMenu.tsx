import { FC, PropsWithChildren, useCallback, useRef, useState } from "react";
import { videoIcon, imgIcon } from "shared/images";

import { useClickOutside } from "shared/hooks";

import "./ContentMenu.scss";

import { cn } from "@bem-react/classname";

const CnContent = cn("content");

export interface IContentMenu extends PropsWithChildren {
  onClickImg?: () => void;
  onClickVideo?: () => void;
}

export const ContentMenu: FC<IContentMenu> = ({ onClickVideo, onClickImg }) => {
  const menu = useRef<HTMLDivElement | null>(null);
  const checkbox = useRef<HTMLInputElement | null>(null);
  const [isChecked, setIsChecked] = useState(false);

  useClickOutside({ divElement: menu, handler: () => setIsChecked(false) });

  const handleOnChange = useCallback(() => {
    setIsChecked(!isChecked);
  }, [isChecked]);

  const handleClick = (item: string) => {
    item === "img" && onClickImg?.();
    item === "video" && onClickVideo?.();
    console.log(item);
    setIsChecked(false);
  };

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
          <button name="img" type="button" onClick={() => handleClick("img")}>
            <img src={imgIcon} alt="Add video" />
          </button>
        </li>
        <li>
          <button
            name="video"
            type="button"
            onClick={() => handleClick("video")}
          >
            <img src={videoIcon} alt="Add video" />
          </button>
        </li>
      </ul>
    </div>
  );
};
