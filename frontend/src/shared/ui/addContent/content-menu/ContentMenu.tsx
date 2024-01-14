import { FC, PropsWithChildren } from "react";
import videoIcon from "../../../images/Video.png";
import imgIcon from "../../../images/Image.png";

import "./ContentMenu.scss";

export interface IButtonProps extends PropsWithChildren {
  onClickImg?: ((event: React.MouseEvent<HTMLButtonElement>) => void)
  onClickVideo?: ((event: React.MouseEvent<HTMLButtonElement>) => void)
}

export const ContentMenu: FC<IButtonProps> = ({
  onClickImg,
  onClickVideo,
}) => {
  return (
    <div className="menu">
      <input type="checkbox" id="add-checkbox" className="add-checkbox" />
      <label htmlFor="add-checkbox" className="add-image"></label>
      <ul className="menu-list">
        <li></li>
        <li>
          <button onClick={onClickImg}>
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
