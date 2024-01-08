import { FC, FormEventHandler, PropsWithChildren } from "react";
import { Link } from "react-router-dom";

import "./AuthForm.scss";

interface IAuthFormProps extends PropsWithChildren {
  title: string;
  subtitle: string;
  textButton: string;
  textSpan: string;
  linkSpan: string;
  textLinkSpan: string;
  handleSubmit: FormEventHandler<HTMLFormElement>;
  isValid: boolean;
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
    <form className="auth-form" onSubmit={handleSubmit} noValidate>
      <h2>{title}</h2>
      <span className="auth-form__subtitle">{subtitle}</span>
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
        <Link to={linkSpan} className="auth-form__link">
          {textLinkSpan}
        </Link>
      </span>
    </form>
  );
};
