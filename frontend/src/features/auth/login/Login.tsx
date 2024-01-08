/* eslint-disable @typescript-eslint/no-explicit-any */
import { AuthForm } from "../../../entities/auth-form";
import { AuthContainer } from "shared/auth-container";
import { useForm } from "../../../shared/hooks";
import { Input } from "shared/ui";
import { Loader } from "shared/ui/loader/Loader";
import { useLogin } from "shared/hooks";
import { FC, memo, useMemo } from "react";

const initialFormData = {
  email: '',
  password: '',
  name: ''
}

const placeholderFromInputName = {
  email: "E-Mail",
  password: "Password",
  name: 'Name'
}

const typeFromInputName = {
  email: 'email',
  password: 'password',
  name: 'text'
}

export const Login: FC = memo(() => {
  const {
    values,
    handleInputChange,
    setValues,
    isValid,
    setIsValid,
    errors,
    setErrors,
  } = useForm(initialFormData);

  const { mutate, isLoading } = useLogin();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(values);
    setValues(initialFormData);
    setErrors({});
    setIsValid(true);
  };

  const formContent = useMemo(() => {
    const valuesKeys = Object.keys(values) as Array<keyof typeof values>; // email | password

    return valuesKeys.map((formKey) => {
      return (
        <Input
          key={formKey}
          name={formKey}
          type={typeFromInputName[formKey]}
          isValid={!!errors[formKey]}
          placeholder={placeholderFromInputName[formKey]}
          required={true}
          value={values[formKey]}
          onChange={handleInputChange}
          minLength={2}
          maxLength={15}
          errText={errors[formKey]}
        />
      )
    })
  }, [values, errors, handleInputChange])

  return isLoading ? (
    <Loader />
  ) : (
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
