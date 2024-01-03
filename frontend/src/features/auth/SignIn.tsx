import { useEffect } from "react";
import { AuthForm } from "../../entities/auth-form";
import { AuthFormInput } from "../../shared/types";
import { useForm } from "../../shared/hooks";

export const SignIn = () => {
  const {
    values,
    handleInputChange,
    setValues,
    isValid,
    setIsValid,
    errors,
    setErrors,
  } = useForm({});

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(values.email);
    // createAccount({
    //   email: values.email,
    //   password: values.password,
    // });
  }

  useEffect(() => {
    setValues({});
    setErrors({});
    setIsValid(true);
  }, [setValues, setErrors, setIsValid]);

  return (
    <AuthForm
      children={
        <AuthFormInput
          name="email"
          placeholder="e-mail"
          type="text"
          value={values.email || ""}
          required={true}
          onChange={handleInputChange}
          maxLength={20}
          minLength={2}
        />
      }
    />
  );
};
