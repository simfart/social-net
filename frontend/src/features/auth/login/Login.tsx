import { useEffect, useState } from "react";
import { AuthForm } from "../../../entities/auth-form";
import { AuthContainer } from "shared/auth-container";
import { useForm } from "../../../shared/hooks";
import { Input } from "shared/ui";
import { login } from "shared/api";

import { Loader } from "shared/ui/loader/Loader";
import { useLogin } from "shared/hooks";

export const Login = () => {
  const {
    values,
    handleInputChange,
    setValues,
    isValid,
    setIsValid,
    errors,
    setErrors,
  } = useForm({}, {});

  const { mutate, isLoading } = useLogin();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(values);
    setValues({});
    setErrors({});
    setIsValid(true);
  };

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
          children={
            <>
              <Input
                name="email"
                type="email"
                isValid={errors.email ? true : false}
                placeholder="e-mail"
                required={true}
                value={values.email || ""}
                onChange={handleInputChange}
                minLength={2}
                maxLength={15}
                errText={errors.email}
              />
              <Input
                name="password"
                type="password"
                isValid={errors.password ? true : false}
                placeholder="password"
                required={true}
                value={values.password || ""}
                onChange={handleInputChange}
                minLength={4}
                maxLength={15}
                errText={errors.password}
              />
            </>
          }
        />
      }
    />
  );
};
