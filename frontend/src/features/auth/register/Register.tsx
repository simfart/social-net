import { AuthForm } from "../../../entities/auth-form";
import { useForm } from "../../../shared/hooks";
import { Input } from "shared/ui";
import { AuthContainer } from "shared/auth-container";
import { useRegister } from "../../../shared/hooks";
import { Loader } from "shared/ui/loader/Loader";

export const Register = () => {
  const {
    values,
    handleInputChange,
    setValues,
    isValid,
    setIsValid,
    errors,
    setErrors,
  } = useForm({}, {});

  const { mutate, isLoading } = useRegister();

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
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
          title="Signup"
          subtitle="Just some details to get you in.!"
          textButton="Signup"
          linkSpan="/signin"
          textLinkSpan="Login"
          textSpan="Already Registered? "
          handleSubmit={onSubmit}
          isValid={isValid}
          children={
            <>
              <Input
                name="email"
                type="email"
                placeholder="e-mail *"
                required={true}
                value={values.email || ""}
                onChange={handleInputChange}
                minLength={2}
                maxLength={15}
                isValid={errors.email ? true : false}
                errText={errors.email}
              />
              <Input
                name="password"
                type="password"
                isValid={errors.password ? true : false}
                placeholder="password *"
                required={true}
                value={values.password || ""}
                onChange={handleInputChange}
                minLength={4}
                maxLength={15}
                errText={errors.password}
              />
              <Input
                name="name"
                type="text"
                placeholder="name *"
                required={true}
                value={values.name || ""}
                onChange={handleInputChange}
                minLength={2}
                maxLength={30}
                isValid={errors.name ? true : false}
                errText={errors.name}
              />
              <Input
                name="avatar"
                type="url"
                placeholder="avatar URL"
                required={false}
                value={values.avatar || ""}
                onChange={handleInputChange}
                isValid={errors.avatar ? true : false}
                errText={errors.avatar}
              />
              <Input
                name="location"
                type="url"
                placeholder="location"
                required={false}
                value={values.location || ""}
                onChange={handleInputChange}
                minLength={2}
                maxLength={30}
                isValid={errors.location ? true : false}
                errText={errors.location}
              />
              <Input
                name="about"
                type="text"
                placeholder="about"
                required={false}
                value={values.about || ""}
                onChange={handleInputChange}
                minLength={2}
                maxLength={30}
                isValid={errors.about ? true : false}
                errText={errors.about}
              />
            </>
          }
        />
      }
    />
  );
};
