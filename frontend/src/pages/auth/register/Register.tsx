import { AuthForm } from '../../../entities/auth-form'
import { useForm } from 'shared/hooks'
import { Input } from 'shared/ui'
import { AuthContainer } from 'shared/auth-container'
import { useRegister } from 'shared/hooks'
import { Loader } from 'shared/ui/loader/Loader'
import { FC, memo, useCallback, useMemo } from 'react'

import {
  initialFormData,
  placeholderFromInputName,
  requireFromInputName,
  typeFromInputName,
} from 'shared/constants'

export const Register: FC = memo(() => {
  const { values, isValid, errors, clearForm, handleInputChange } =
    useForm(initialFormData)

  const { mutate, isLoading } = useRegister()

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      const valuesArr = Object.entries(values)
      const filteredArr = valuesArr.filter(([_, value]) => value !== '')
      const newValues = Object.fromEntries(filteredArr)

      mutate(newValues)

      clearForm()
    },
    [mutate, values, clearForm],
  )

  const formContent = useMemo(() => {
    const valueKeys = Object.keys(values) as Array<keyof typeof values>

    return valueKeys.map((formKey) => {
      return (
        <Input
          key={formKey}
          name={formKey}
          type={typeFromInputName[formKey]}
          isInvalid={!!errors[formKey]}
          placeholder={placeholderFromInputName[formKey]}
          required={requireFromInputName[formKey]}
          value={values[formKey]}
          onChange={handleInputChange}
          minLength={2}
          maxLength={100}
          errText={errors[formKey]}
          view="auth"
        />
      )
    })
  }, [values, errors, handleInputChange])

  if (isLoading) return <Loader />

  return (
    <AuthContainer
      children={
        <AuthForm
          title="Signup"
          subtitle="Just some details to get you in!"
          textButton="Signup"
          linkSpan="/signin"
          textLinkSpan="Login"
          textSpan="Already Registered?"
          handleSubmit={onSubmit}
          isInvalid={!isValid}
          children={formContent}
          page="auth"
        />
      }
    />
  )
})
