import { AuthForm } from "../../../entities/auth-form";
import { useForm } from "../../../shared/hooks";
import { Input } from "shared/ui";
import { AuthContainer } from "shared/auth-container";
import { useRegister } from "../../../shared/hooks";
import { Loader } from "shared/ui/loader/Loader";
import { FC, memo, useCallback, useMemo } from "react";

const initialFormData = {
  email: "",
  password: "",
  name: "",
  avatar: "",
  location: "",
  about: "",
};

const placeholderFromInputName = {
  email: "E-Mail *",
  password: "Password *",
  name: "Name *",
  avatar: "Avatar URL",
  location: "Location",
  about: "About",
};

const typeFromInputName = {
  email: "email",
  password: "password",
  name: "text",
  avatar: "url",
  location: "text",
  about: "text",
};

export const Register: FC = memo(() => {
  const {
    values,
    handleInputChange,
    setValues,
    isValid,
    setIsValid,
    errors,
    setErrors,
  } = useForm(initialFormData);

  const { mutate, isLoading } = useRegister();

  const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(values);
    setValues(initialFormData);
    setErrors({});
    setIsValid(true);
  }, []);

  const formContent = useMemo(() => {
    const valueKeys = Object.keys(values) as Array<keyof typeof values>;

    return valueKeys.map((formKey) => {
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
      );
    });
  }, [values, errors, handleInputChange]);

  return isLoading ? (
    <Loader />
  ) : (
    <AuthContainer
      children={
        <AuthForm
          title="Signup"
          subtitle="Just some details to get you in.!"
          textButton="Signup"
          linkSpan="/signin"
          textLinkSpan="Login"
          textSpan="Already Registered? "
          handleSubmit={onSubmit}
          isValid={isValid}
          children={formContent}
        />
      }
    />
  );
});

//   <>
//     <Input
//       name="email"
//       type="email"
//       placeholder="e-mail *"
//       required={true}
//       value={values.email || ""}
//       onChange={handleInputChange}
//       minLength={2}
//       maxLength={15}
//       isValid={errors.email ? true : false}
//       errText={errors.email}
//     />
//     <Input
//       name="password"
//       type="password"
//       isValid={errors.password ? true : false}
//       placeholder="password *"
//       required={true}
//       value={values.password || ""}
//       onChange={handleInputChange}
//       minLength={4}
//       maxLength={15}
//       errText={errors.password}
//     />
//     <Input
//       name="name"
//       type="text"
//       placeholder="name *"
//       required={true}
//       value={values.name || ""}
//       onChange={handleInputChange}
//       minLength={2}
//       maxLength={30}
//       isValid={errors.name ? true : false}
//       errText={errors.name}
//     />
//     <Input
//       name="avatar"
//       type="url"
//       placeholder="avatar URL"
//       required={false}
//       value={values.avatar || ""}
//       onChange={handleInputChange}
//       isValid={errors.avatar ? true : false}
//       errText={errors.avatar}
//     />
//     <Input
//       name="location"
//       type="text"
//       placeholder="location"
//       required={false}
//       value={values.location || ""}
//       onChange={handleInputChange}
//       minLength={2}
//       maxLength={30}
//       isValid={errors.location ? true : false}
//       errText={errors.location}
//     />
//     <Input
//       name="about"
//       type="text"
//       placeholder="about"
//       required={false}
//       value={values.about || ""}
//       onChange={handleInputChange}
//       minLength={2}
//       maxLength={30}
//       isValid={errors.about ? true : false}
//       errText={errors.about}
//     />
// </>
