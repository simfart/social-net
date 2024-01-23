import { FC, FormEvent, useCallback, useEffect, useMemo } from 'react'
import { useForm } from 'shared/hooks'
import { useUser } from 'shared/hooks/useUser'
import { Input } from 'shared/ui'
import { AuthForm } from '../../entities/auth-form/AuthForm'

import { AuthContainer } from 'shared/auth-container'
import {
  initialFormData,
  placeholderFromInputName,
  requireFromInputName,
  typeFromInputName,
} from 'shared/ui/initialData'

import './EditProfile.scss'
import { useNavigate } from 'react-router-dom'

export const EditProfile: FC = () => {
  const navigate = useNavigate()
  const { data: currentUser } = useUser()

  const { values, isValid, errors, clearForm, handleInputChange, setValues } =
    useForm(initialFormData)

  useEffect(() => {
    if (currentUser) {
      setValues(currentUser.data)
    }
  }, [currentUser, setValues])

  const { password: _, ...newFormData } = initialFormData

  const handleEdit = useCallback(() => {}, [])
  const onDiscard = useCallback(
    (e: FormEvent<HTMLButtonElement>) => {
      e.preventDefault()
      clearForm()
      navigate('/profile')
    },
    [clearForm, navigate],
  )

  const formContent = useMemo(() => {
    const valueKeys = Object.keys(newFormData) as Array<
      keyof typeof newFormData
    >
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
  }, [newFormData, errors, values, handleInputChange])

  return (
    <AuthContainer
      page="edit"
      children={
        <AuthForm
          children={formContent}
          handleSubmit={handleEdit}
          handleDiscard={onDiscard}
          isInvalid={isValid}
          title="Edit your profile"
          subtitle=""
          linkSpan="./"
          textButton="Eidit"
          textLinkSpan="./"
          textSpan="Edit"
          page="edit"
        />
      }
    />
  )
}
