import { useEffect } from "react";
import { AuthForm } from "../../entities/auth-form";
import { AuthFormInput } from "../../shared/types";
import { useForm } from "../../shared/hooks";

export const SignUp = () => {
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
      title="Signup"
      subtitle="Just some details to get you in.!"
      children={
        <>
          <AuthFormInput
            name="email"
            type="email"
            placeholder="e-mail"
            required={true}
            value={values.email || ""}
            onChange={handleInputChange}
            minLength={2}
            maxLength={15}
          />
          <AuthFormInput
            name="password"
            type="password"
            placeholder="password"
            required={true}
            value={values.email || ""}
            onChange={handleInputChange}
            minLength={2}
            maxLength={15}
          />
          <AuthFormInput
            name="name"
            type="text"
            placeholder="Name"
            required={true}
            value={values.email || ""}
            onChange={handleInputChange}
            minLength={2}
            maxLength={10}
          />
          <AuthFormInput
            name="avatar"
            type="url"
            placeholder="avatar URL"
            required={false}
            value={values.email || ""}
            onChange={handleInputChange}
            minLength={2}
            maxLength={10}
          />
          <AuthFormInput
            name="location"
            type="url"
            placeholder="avatar URL"
            required={false}
            value={values.email || ""}
            onChange={handleInputChange}
            minLength={2}
            maxLength={10}
          />
          <AuthFormInput
            name="location"
            type="text"
            placeholder="location"
            required={false}
            value={values.email || ""}
            onChange={handleInputChange}
            minLength={2}
            maxLength={10}
          />
          <AuthFormInput
            name="about"
            type="text"
            placeholder="about"
            required={false}
            value={values.email || ""}
            onChange={handleInputChange}
            minLength={2}
            maxLength={10}
          />
        </>
      }
    />
  );
};
