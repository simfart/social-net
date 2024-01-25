import { FC, FormEvent, FormEventHandler, PropsWithChildren } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from 'shared/ui/button'

import './AuthForm.scss'

import { cn } from '@bem-react/classname'

const CnForm = cn('authForm')

interface IAuthFormProps extends PropsWithChildren {
  title: string
  subtitle: string
  textButton: string
  textSpan: string
  linkSpan: string
  textLinkSpan: string
  isInvalid: boolean
  handleSubmit: FormEventHandler<HTMLFormElement>
  handleDiscard?: (e: FormEvent<HTMLButtonElement>) => void

  page?: 'default' | 'auth' | 'discard' | 'publish' | 'edit'
}

export const AuthForm: FC<IAuthFormProps> = ({
  children,
  title,
  subtitle,
  textButton,
  textSpan,
  linkSpan,
  textLinkSpan,
  handleSubmit,
  isInvalid,
  page,
  handleDiscard,
}) => {
  const location = useLocation()

  return (
    <form className={CnForm()} onSubmit={handleSubmit} noValidate>
      <h2>{title}</h2>
      <span className={CnForm('subtitle')}>{subtitle}</span>
      <fieldset>{children}</fieldset>
      <Button disabled={isInvalid} view={page}>
        {textButton}
      </Button>
      {location.pathname === '/edit-profile' ? (
        <Button view="discard" onClick={handleDiscard}>
          Discard
        </Button>
      ) : (
        <span>
          {textSpan}
          <Link to={linkSpan} className={CnForm('link')}>
            {textLinkSpan}
          </Link>
        </span>
      )}
    </form>
  )
}
