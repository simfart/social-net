import { useState, ChangeEvent, MouseEvent } from "react";

export function useForm(inputValues: any) {
  const [values, setValues] = useState(inputValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(true);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setValues({ ...values, [name]: value });
    const input = event.target;
    const form = input.closest("form");
    setErrors({ ...errors, [name]: input.validationMessage });
    if (form !== null) {
      setIsValid(form.checkValidity());
    }
  };
  // setIsValid(input.closest('form').checkValidity())
  return {
    values,
    handleInputChange,
    setValues,
    isValid,
    setIsValid,
    errors,
    setErrors,
  };
}
