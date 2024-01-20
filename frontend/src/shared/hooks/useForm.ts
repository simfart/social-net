import { useState, ChangeEvent, useCallback } from 'react'

export const useForm = <T>(initialValues: T) => {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isValid, setIsValid] = useState(true)

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { value, name } = event.target

      setValues((prev) => ({ ...prev, [name]: value }))

      const input = event.target
      const form = input.closest('form')

      setErrors((prev) => ({ ...prev, [name]: input.validationMessage }))

      if (form) {
        setIsValid(form.checkValidity())
      }
    },
    [],
  )

  const clearFields = useCallback((fields: string[]) => {
    setValues((prev) => ({
      ...prev,
      ...fields.reduce<Record<string, string>>((acc, field) => {
        acc[field] = ''

        return acc
      }, {}),
    }))
  }, [])

  const clearForm = useCallback(() => {
    setValues(initialValues)

    setErrors({})

    setIsValid(true)
  }, [initialValues])

  return {
    values,
    isValid,
    errors,
    handleInputChange,
    setValues,
    setIsValid,
    setErrors,
    clearForm,
    clearFields,
  }
}
