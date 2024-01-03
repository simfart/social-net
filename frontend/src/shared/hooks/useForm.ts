import { useState, ChangeEvent } from "react";

export const useForm = <T>(inputValues: T) => {
  const [values, setValues] = useState(inputValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(true);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    setValues({ ...values, [name]: value });
    
    const input = event.target;
    const form = input.closest("form");
    
    setErrors({ ...errors, [name]: input.validationMessage });

    if (form) {
      setIsValid(form.checkValidity());
    }
  };

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
