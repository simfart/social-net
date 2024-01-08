import { FC, PropsWithChildren } from "react";
import { cn } from "@bem-react/classname";

import "./AuthContainer.scss";

interface IAuthFormProps extends PropsWithChildren {
  page?: string;
}

const CnEellipse = cn("ellipse");

export const AuthContainer: FC<IAuthFormProps> = ({ children, page }) => {
  return (
    <div className="auth-container">
      {children}
      <div className={CnEellipse('big', { page })}></div> 
      <div className={CnEellipse('small', { page })}></div>
    </div>
  );
};
