import { FC } from "react";
import plusLogo from "../../images/Plus.svg";
import "./AddContent.scss";

export const AddContent: FC = () => {
  return (
    <button className="add-button">
      <img src={plusLogo} alt="Add content" />
    </button>
  );
};
