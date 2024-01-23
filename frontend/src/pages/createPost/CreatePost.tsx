import { FC, FormEvent, useCallback, useState } from 'react'
import { cn } from '@bem-react/classname'
import { useUser } from 'shared/hooks/useUser'
import { useNavigate } from 'react-router-dom'
import { ContentMenu } from './contentMenu'
import { useForm } from 'shared/hooks'
import { deleteIcon } from 'shared/images'
import { Button } from 'shared/ui/button'
import { Input } from 'shared/ui'
import { useNewPost } from 'shared/hooks'
import { Loader } from 'shared/ui/loader/Loader'
import { AuthContainer } from '../../shared/auth-container/AuthContainer'
import { AuthForm } from '../../entities/auth-form/AuthForm'

import './CreatePost.scss'

const CnCreatePost = cn('createPost')

const initialFormData = {
  description: '',
  image: '',
  video: '',
}

const placeholderFromInputName = {
  description: 'What’s on your mind?',
  image: 'Paste the URL of the image',
  video: 'Paste the link to the video from YouTube',
}

enum CreatePostContentInput {
  VIDEO = 'video',
  IMAGE = 'image',
}

export const CreatePost: FC = () => {
  const navigate = useNavigate()
  const { values, isValid, errors, clearForm, handleInputChange, clearFields } =
    useForm(initialFormData)
  const { mutate, isLoading } = useNewPost()

  const [contentInput, setContentInput] =
    useState<CreatePostContentInput | null>(null)

  const addImg = useCallback(() => {
    setContentInput(CreatePostContentInput.IMAGE)
  }, [])

  const addVideo = useCallback(() => {
    setContentInput(CreatePostContentInput.VIDEO)
  }, [])

  const deletInput = useCallback(() => {
    setContentInput(null)
    clearFields(['video', 'image'])
  }, [clearFields])

  const { data: currentUser } = useUser()

  const onCreatePost = useCallback(
    (e: FormEvent<HTMLButtonElement>) => {
      e.preventDefault()

      const valuesArr = Object.entries(values)
      const filteredArr = valuesArr.filter(([_, value]) => value !== '')
      const newValues = Object.fromEntries(filteredArr)
      console.log(newValues)
      mutate(newValues)

      clearForm()

      navigate('/profile')
    },
    [values, mutate, clearForm, navigate],
  )

  const onDiscard = useCallback(
    (e: FormEvent<HTMLButtonElement>) => {
      e.preventDefault()

      clearForm()

      navigate('/profile')
    },
    [clearForm, navigate],
  )

  if (isLoading) return <Loader />

  return (
    <section className={CnCreatePost()}>
      <form className={CnCreatePost('form')}>
        <div className={CnCreatePost('formMenu')}>
          <Button onClick={onDiscard} view="discard">
            Discard
          </Button>
          <h2>Create</h2>
          <Button onClick={onCreatePost} disabled={!isValid} view="publish">
            Publish
          </Button>
        </div>
        <div className={CnCreatePost('formInput')}>
          <img src={currentUser?.data.avatar} alt="" />
          <Input
            name="description"
            type="text"
            isInvalid={!!errors.description}
            value={values.description}
            onChange={handleInputChange}
            errText={errors.description}
            placeholder={placeholderFromInputName.description}
            minLength={4}
            view="post"
            autoFocus
          />
        </div>

        {(contentInput == 'image' || contentInput == 'video') && (
          <div className={CnCreatePost('formInput_content')}>
            <Input
              name={contentInput}
              type="url"
              view="post"
              isInvalid={!!errors[contentInput]}
              errText={errors[contentInput]}
              placeholder={placeholderFromInputName[contentInput]}
              value={values[contentInput]}
              onChange={handleInputChange}
              autoFocus
            />
            <button onClick={deletInput}>
              <img src={deleteIcon} alt="delete" />
            </button>
          </div>
        )}

        <ContentMenu onClickImg={addImg} onClickVideo={addVideo} />
      </form>
    </section>
  )
}
