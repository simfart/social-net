import {
  Children,
  FC,
  FormEvent,
  PropsWithChildren,
  useCallback,
  useState,
} from 'react'
import { cn } from '@bem-react/classname'
import { useUser } from 'shared/hooks/useUser'
import { useNavigate } from 'react-router-dom'

import { useForm } from 'shared/hooks'
import { deleteIcon } from 'shared/images'
import { Button } from 'shared/ui/button'
import { Input } from 'shared/ui'
import { useNewPost } from 'shared/hooks'
import { Loader } from 'shared/ui/loader/Loader'

import './FormContainer.scss'

const CnCreatePost = cn('createPost')

// const initialFormData = {
//   description: '',
//   image: '',
//   video: '',
// }

// const placeholderFromInputName = {
//   description: 'What’s on your mind?',
//   image: 'Paste the URL of the image',
//   video: 'Paste the link to the video from YouTube',
// }

// enum CreatePostContentInput {
//   VIDEO = 'video',
//   IMAGE = 'image',
// }

export interface IFormData extends PropsWithChildren {
  onDiscard: () => void
  onCreatePost: () => void
  isValid: boolean
}

export const FormContainer: FC<IFormData> = ({
  onDiscard,
  onCreatePost,
  isValid,
  children,
}) => {
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
        {children}
        {/* <div className={CnCreatePost('formInput')}>
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
        </div> */}

        {/* {(contentInput == 'image' || contentInput == 'video') && (
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
        )} */}
      </form>
    </section>
  )
}
