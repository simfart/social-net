import { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { FormContainer } from 'shared/form-container'
import { useForm } from 'shared/hooks'
import { useUser } from 'shared/hooks/useUser'
import { Input } from 'shared/ui'
import {
  initialFormData,
  placeholderFromInputName,
  requireFromInputName,
  typeFromInputName,
} from 'shared/ui/initialData'

import './EditProfile.scss'

export const EditProfile: FC = () => {
  const { data: currentUser } = useUser()

  const { values, isValid, errors, clearForm, handleInputChange, setValues } =
    useForm(initialFormData)

  useEffect(() => {
    if (currentUser) {
      setValues(currentUser.data)
    }
  }, [currentUser, setValues])

  const { password: _, ...newFormData } = initialFormData

  const handleCreatePost = useCallback(() => {}, [])
  const handleDiscard = useCallback(() => {}, [])

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
          view="edit"
        />
      )
    })
  }, [newFormData, errors, values, handleInputChange])

  return (
    <FormContainer
      isValid={isValid}
      onCreatePost={handleCreatePost}
      onDiscard={handleDiscard}
      children={<div className="editForm">{formContent}</div>}
    />
  )
}
