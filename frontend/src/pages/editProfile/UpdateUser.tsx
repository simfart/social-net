import {
  FC,
  FormEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
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

import './UpdateUser.scss'
import { useNavigate } from 'react-router-dom'
import { useUpdate } from 'shared/hooks/useUpdate'
import { Loader } from 'shared/ui/loader/Loader'

export const UpdateUser: FC = () => {
  const navigate = useNavigate()

  const { data: currentUser } = useUser()

  const { values, isValid, errors, clearForm, handleInputChange, setValues } =
    useForm(initialFormData)

  // useEffect(() => {
  //   if (currentUser) {
  //     setValues(currentUser.data)
  //   }
  // }, [currentUser, setValues])

  const { mutate, isLoading } = useUpdate()

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      const valuesArr = Object.entries(values)
      const filteredArr = valuesArr.filter(([_, value]) => value !== '')
      const newValues = Object.fromEntries(filteredArr)
      mutate(newValues)
    },
    [mutate, values],
  )

  const onDiscard = useCallback(
    (e: FormEvent<HTMLButtonElement>) => {
      e.preventDefault()
      clearForm()
      navigate('/profile')
    },
    [clearForm, navigate],
  )
  const { password, email: _, ...newFormData } = initialFormData

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
          placeholder={currentUser?.data[formKey]}
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
  }, [newFormData, errors, currentUser?.data, values, handleInputChange])

  isLoading && <Loader />

  return (
    <AuthContainer
      page="edit"
      children={
        <AuthForm
          children={formContent}
          handleSubmit={onSubmit}
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
