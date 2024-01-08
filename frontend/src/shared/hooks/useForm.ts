import { useState, ChangeEvent, useCallback } from "react";

export const useForm = <T>(inputValues: T) => {
  const [values, setValues] = useState(inputValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isValid, setIsValid] = useState(true);

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { value, name } = event.target;

      setValues((prev) => ({ ...prev, [name]: value }));

      const input = event.target;
      const form = input.closest("form");

      setErrors((prev) => ({ ...prev, [name]: input.validationMessage }));

      if (form) {
        setIsValid(form.checkValidity());
      }
    },
    []
  );

  return {
    values,
    handleInputChange,
    setValues,
    isValid,
    setIsValid,
    errors,
    setErrors,
  };
};
