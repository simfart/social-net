import { FC, PropsWithChildren } from "react";
import { cn } from "@bem-react/classname";

import "./AuthContainer.scss";

interface IAuthFormProps extends PropsWithChildren {
  page?: string;
}
const CnEellipseBig = cn("ellipse-big");
const CnEellipseSm = cn("ellipse-small");

export const AuthContainer: FC<IAuthFormProps> = ({ children, page }) => {
  return (
    <div className="auth-container">
      {children}
      <div className={CnEellipseBig({ page })}></div>
      <div className={CnEellipseSm({ page })}></div>
    </div>
  );
};
