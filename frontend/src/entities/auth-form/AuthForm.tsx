import "./AuthForm.scss";

interface IProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

export const AuthForm = ({ children, title, subtitle }: IProps) => {
  return (
    <div className="auth-container">
      <form className="auth-form" noValidate>
        <h2>{title}</h2>
        <span>{subtitle}</span>
        <fieldset>{children}</fieldset>
        <button
          // className={`form-auth__button ${
          //   isValid ? "" : "popup__button_invalid"
          // }`}
          type="submit"
          aria-label="Сохранить"
        >
          Зарегистрироваться
        </button>
        <span>Already have account? SIGN IN</span>
      </form>
      <div className="form-ellipse"></div>
      <div className="form-ellipse-small"></div>
    </div>
  );
};
