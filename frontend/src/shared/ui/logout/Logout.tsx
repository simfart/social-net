import { FC } from "react";
import { useMutation } from "react-query";
import { Link } from "react-router-dom";
import { logout } from "shared/api";
import exitLogo from "./../../images/Exit.svg";
import LogoutIcon from "./../../images/logout.svg";

import "./Logout.scss";

export const Logout: FC = () => {
  const { mutate } = useMutation(logout, {
    onSuccess: () => {
      window.localStorage.removeItem("jwt");
    },
  });

  const handleClick = () => {
    mutate();
  };

  return (
    <Link className="logout" onClick={handleClick} to={"/signin"}>
      <img src={LogoutIcon} alt="Log out" />
      Log out
    </Link>
  );
};
