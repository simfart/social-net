import { FC, FormEventHandler, PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { Button } from "shared/ui/button";
import "./AuthForm.scss";

import { cn } from "@bem-react/classname";

const CnForm = cn("authForm");

interface IAuthFormProps extends PropsWithChildren {
  title: string;
  subtitle: string;
  textButton: string;
  textSpan: string;
  linkSpan: string;
  textLinkSpan: string;
  isInvalid: boolean;
  handleSubmit: FormEventHandler<HTMLFormElement>;
}

export const AuthForm: FC<IAuthFormProps> = ({
  children,
  title,
  subtitle,
  textButton,
  textSpan,
  linkSpan,
  textLinkSpan,
  handleSubmit,
  isInvalid,
}) => {
  return (
    <form className={CnForm()} onSubmit={handleSubmit} noValidate>
      <h2>{title}</h2>
      <span className={CnForm("subtitle")}>{subtitle}</span>
      <fieldset>{children}</fieldset>
      <Button isInvalid={isInvalid} textButton={textButton} view="auth" />
      <span>
        {textSpan}
        <Link to={linkSpan} className={CnForm("link")}>
          {textLinkSpan}
        </Link>
      </span>
    </form>
  );
};
