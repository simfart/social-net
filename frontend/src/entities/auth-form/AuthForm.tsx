import { FC, PropsWithChildren } from "react";

import "./AuthForm.scss";

interface IAuthFormProps extends PropsWithChildren {
  title: string;
  subtitle: string;
  textButton: string;
}

export const AuthForm: FC<IAuthFormProps> = ({ children, title, subtitle, textButton }) => {
  return (
    <div className="auth-container">
      <form className="auth-form" noValidate>
        <h2>{title}</h2>
        <span>{subtitle}</span>
        <fieldset>{children}</fieldset>
        <button type="submit" aria-label="Сохранить">
          {textButton}
        </button>
        <span>Already have account? SIGN IN</span>
      </form>
      <div className="form-ellipse"></div>
      <div className="form-ellipse-small"></div>
    </div>
  );
};
