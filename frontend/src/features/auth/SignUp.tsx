import { useEffect } from "react";
import { AuthForm } from "../../entities/auth-form";
import { useForm } from "../../shared/hooks";
import { Input } from "shared/ui";

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
      textButton=""
      children={
        <>
          <Input
            name="email"
            type="email"
            placeholder="e-mail"
            required={true}
            value={values.email || ""}
            onChange={handleInputChange}
            minLength={2}
            maxLength={15}
          />
          <Input
            name="password"
            type="password"
            placeholder="password"
            required={true}
            value={values.email || ""}
            onChange={handleInputChange}
            minLength={2}
            maxLength={15}
          />
          <Input
            name="name"
            type="text"
            placeholder="Name"
            required={true}
            value={values.email || ""}
            onChange={handleInputChange}
            minLength={2}
            maxLength={10}
          />
          <Input
            name="avatar"
            type="url"
            placeholder="avatar URL"
            required={false}
            value={values.email || ""}
            onChange={handleInputChange}
            minLength={2}
            maxLength={10}
          />
          <Input
            name="location"
            type="url"
            placeholder="avatar URL"
            required={false}
            value={values.email || ""}
            onChange={handleInputChange}
            minLength={2}
            maxLength={10}
          />
          <Input
            name="location"
            type="text"
            placeholder="location"
            required={false}
            value={values.email || ""}
            onChange={handleInputChange}
            minLength={2}
            maxLength={10}
          />
          <Input
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
