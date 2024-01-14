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
  const { values, isValid, errors, clearForm, handleInputChange } =
    useForm(initialFormData);

  const { mutate, isLoading } = useRegister();

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      mutate(values);

      clearForm();
    },
    [mutate, values, clearForm]
  );

  const formContent = useMemo(() => {
    const valueKeys = Object.keys(values) as Array<keyof typeof values>;

    return valueKeys.map((formKey) => {
      return (
        <Input
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
