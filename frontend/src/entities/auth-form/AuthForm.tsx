import "./AuthForm.scss";

interface IProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  textButton: string;
}

export const AuthForm = ({ children, title, subtitle, textButton }: IProps) => {
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
