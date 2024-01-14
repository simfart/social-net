import feedLogo from "../../shared/images/Feed.svg";
import alertLogo from "../../shared/images/Alert.svg";
import searchLogo from "../../shared/images/search.svg";
import profileLogo from "../../shared/images/Profile.svg";
import addLogo from "../../shared/images/Plus.svg";
import { Logout } from "shared/ui/logout";
import { FC, useMemo } from "react";
import { Link } from "react-router-dom";

import "./Navbar.scss";

const navData = [
  {
    name: "Notifications",
    icon: alertLogo,
    path: "/",
  },
  {
    name: "Home",
    icon: feedLogo,
    path: "/",
  },
  {
    name: "Search",
    icon: searchLogo,
    path: "/",
  },
  {
    name: "Profile",
    icon: profileLogo,
    path: "/",
  },
];

export const Navbar: FC = () => {
  const NavItems = useMemo(() => {
    return navData.map((item, index) => {
      return (
        <li key={index}>
          <Link className="navbar__link" to={item.path}>
            <img src={item.icon} alt={item.name} />
            <span>{item.name}</span>
          </Link>
        </li>
      );
    });
  }, []);
  return (
    <nav className="navbar">
      <ul className="navbar-container">
        {NavItems}
        <li>
          <Logout />
        </li>
        <li>
          <Link className="navbar__button" to={"/create-post"}>
            <img src={addLogo} alt="Add content" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};
