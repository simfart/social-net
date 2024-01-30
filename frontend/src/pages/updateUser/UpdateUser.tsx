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
import { AuthForm } from '../../entities/auth-form'

import { AuthContainer } from 'shared/auth-container'
import {
  initialFormData,
  placeholderFromInputName,
  requireFromInputName,
  typeFromInputName,
} from 'shared/constants'
import { useNavigate } from 'react-router-dom'
import { useUpdate } from 'shared/hooks/useUpdate'
import { Loader } from 'shared/ui/loader/Loader'

import './UpdateUser.scss'

interface UserEditForm {
  name: string
  location: string
  avatar: string
  about: string
}

export const UpdateUser: FC = () => {
  const navigate = useNavigate()

  const { data: currentUser } = useUser()
  const { values, isValid, errors, clearForm, handleInputChange, setValues } =
    useForm({
      name: currentUser?.name,
      location: currentUser?.location,
      avatar: currentUser?.avatar,
      about: currentUser?.about,
    } as UserEditForm)
  const { mutate, isLoading } = useUpdate()

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      const payload = {} as { [k: string]: string }

      if (currentUser) {
        for (const key in values) {
          const value = values[key as keyof typeof values]
          const oldValue = currentUser[key as keyof typeof values]

          if (value !== oldValue) {
            payload[key as keyof typeof values] = value
          }
        }
      }

      mutate(payload)
    },
    [mutate, values, currentUser],
  )

  const onDiscard = useCallback(
    (e: FormEvent<HTMLButtonElement>) => {
      e.preventDefault()
      clearForm()
      navigate('/profile')
    },
    [clearForm, navigate],
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
          placeholder={currentUser?.[formKey]}
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
  }, [errors, currentUser, values, handleInputChange])

  if (isLoading) return <Loader />

  return (
    <AuthContainer
      page="edit"
      children={
        <AuthForm
          children={formContent}
          handleSubmit={onSubmit}
          handleDiscard={onDiscard}
          isInvalid={!isValid}
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
