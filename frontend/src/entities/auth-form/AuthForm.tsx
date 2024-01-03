import { FC, PropsWithChildren } from "react";
import "./AuthForm.scss";
import { Link } from "react-router-dom";

interface IAuthFormProps extends PropsWithChildren {
  title: string;
  subtitle: string;
  textButton: string;
  textSpan: string;
  linkSpan: string;
  textLinkSpan: string;
}

export const AuthForm: FC<IAuthFormProps> = ({
  children,
  title,
  subtitle,
  textButton,
  textSpan,
  linkSpan,
  textLinkSpan,
}) => {
  return (
    <form className="auth-form" noValidate>
      <h2>{title}</h2>
      <span className="auth-form__subtitle">{subtitle}</span>
      <fieldset>{children}</fieldset>
      <button type="submit" aria-label="Сохранить">
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
