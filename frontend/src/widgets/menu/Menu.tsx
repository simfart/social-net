import feedLogo from "../../shared/images/Feed.svg";
import alertLogo from "../../shared/images/Alert.svg";
import searchLogo from "../../shared/images/search.svg";
import profileLogo from "../../shared/images/Profile.svg";
import plusLogo from "../../shared/images/Feed.svg";
import { Logout } from "shared/ui/logout";
import { FC } from "react";

export const Menu: FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <img src={feedLogo} alt="Home" />
          <span>Home</span>
        </li>
        <li>
          <img src={alertLogo} alt="Notifications" />
          <span>Notifications</span>
        </li>
        <li>
          <img src={searchLogo} alt="Search" />
          <span>Search</span>
        </li>
        <li>
          <img src={profileLogo} alt="Profile" />
          <span>Profile</span>
        </li>
        <li>
          <img src={plusLogo} alt="add content" />
        </li>
        <li>
          <Logout />
        </li>
      </ul>
    </nav>
  );
};
