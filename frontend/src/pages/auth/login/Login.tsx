import { AuthForm } from "../../../entities/auth-form";
import { AuthContainer } from "shared/auth-container";
import { useForm } from "shared/hooks";
import { Input } from "shared/ui";
import { Loader } from "shared/ui/loader/Loader";
import { useLogin } from "shared/hooks";
import { FC, memo, useCallback, useMemo } from "react";

const initialFormData = {
  email: "",
  password: "",
};

const placeholderFromInputName = {
  email: "E-Mail",
  password: "Password",
};

const typeFromInputName = {
  email: "email",
  password: "password",
};

export const Login: FC = memo(() => {
  const { values, isValid, errors, handleInputChange, clearForm } =
    useForm(initialFormData);

  const { mutate, isLoading } = useLogin();

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      mutate(values);

      clearForm();
    },
    [mutate, values, clearForm]
  );

  const formContent = useMemo(() => {
    const valuesKeys = Object.keys(values) as Array<keyof typeof values>;

    return valuesKeys.map((formKey) => {
      return (
        <Input
          view="auth"
          key={formKey}
          name={formKey}
          type={typeFromInputName[formKey]}
          isInvalid={!!errors[formKey]}
          placeholder={placeholderFromInputName[formKey]}
          required={true}
          value={values[formKey]}
          onChange={handleInputChange}
          minLength={2}
          maxLength={15}
          errText={errors[formKey]}
        />
      );
    });
  }, [values, errors, handleInputChange]);

  if (isLoading) return <Loader />;

  return (
    <AuthContainer
      children={
        <AuthForm
          handleSubmit={onSubmit}
          title="Login"
          subtitle="Glad you’re back.!"
          linkSpan="/signup"
          textButton="Login"
          textLinkSpan="Signup"
          textSpan="Don’t have an account ? "
          isValid={isValid}
          children={formContent}
        />
      }
    />
  );
});
