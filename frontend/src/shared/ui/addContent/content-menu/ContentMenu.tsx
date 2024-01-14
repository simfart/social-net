import videoIcon from "../../../images/Video.png";
import imgIcon from "../../../images/Image.png";

import "./ContentMenu.scss";
import { FC } from "react";

export interface IButtonProps {
  children?: React.ReactNode;
  props?: any;
  onClickImg?:
    | ((event: React.MouseEvent<HTMLButtonElement>) => void)
    | undefined;
  onClickVideo?:
    | ((event: React.MouseEvent<HTMLButtonElement>) => void)
    | undefined;
}

export const ContentMenu: FC<IButtonProps> = ({
  children,
  onClickImg = () => {},
  onClickVideo = () => {},
  ...props
}) => {
  const handleOnClickImg = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClickImg(e);
  };
  const handleOnClickVideo = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClickVideo(e);
  };

  return (
    <div className="menu">
      <input type="checkbox" id="add-checkbox" className="add-checkbox" />
      <label htmlFor="add-checkbox" className="add-image"></label>
      <ul className="menu-list">
        <li></li>
        <li>
          <button onClick={handleOnClickImg}>
            <img src={imgIcon} alt="Add video" />
          </button>
          <button onClick={handleOnClickVideo}>
            <img src={videoIcon} alt="Add video" />
          </button>
        </li>
      </ul>
    </div>
  );
};
