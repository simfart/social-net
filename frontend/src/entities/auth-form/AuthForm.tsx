import { FC, FormEventHandler, PropsWithChildren } from "react";
import { Link } from "react-router-dom";

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
  isValid: boolean;
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
  isValid,
}) => {
  return (
    <form className={CnForm()} onSubmit={handleSubmit} noValidate>
      <h2>{title}</h2>
      <span className={CnForm("subtitle")}>{subtitle}</span>
      <fieldset>{children}</fieldset>
      <button
        className={isValid ? "" : "button_invalid"}
        type="submit"
        aria-label={textButton}
      >
        {textButton}
      </button>
      <span>
        {textSpan}
        <Link to={linkSpan} className={CnForm("link")}>
          {textLinkSpan}
        </Link>
      </span>
    </form>
  );
};
