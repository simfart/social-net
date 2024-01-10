import feedLogo from "../../shared/images/Feed.svg";
import alertLogo from "../../shared/images/Alert.svg";
import searchLogo from "../../shared/images/search.svg";
import profileLogo from "../../shared/images/Profile.svg";
import { AddContent } from "shared/ui/addContent";
import { Logout } from "shared/ui/logout";
import { FC, useMemo } from "react";
import { Link } from "react-router-dom";

import "./Menu.scss";

const menuData = [
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

export const Menu: FC = () => {
  const MenuItems = useMemo(() => {
    return menuData.map((item, index) => {
      return (
        <li key={index}>
          <Link className="menu__link" to={item.path}>
            <img src={item.icon} alt={item.name} />
            <span>{item.name}</span>
          </Link>
        </li>
      );
    });
  }, []);
  return (
    <nav className="menu">
      <ul className="menu-container">
        {MenuItems}
        <li>
          <Logout />
        </li>
        <li>
          <AddContent />
        </li>
      </ul>
    </nav>
  );
};
