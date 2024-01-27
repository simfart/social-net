import { cn } from '@bem-react/classname'
import { FC } from 'react'

import './button.scss'

const CnButton = cn('button')

interface IButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  view?: 'default' | 'auth' | 'discard' | 'publish' | 'edit' | 'onedit' | 'post'
}

export const Button: FC<IButtonProps> = ({
  view = 'default',
  disabled,
  ...props
}) => {
  return (
    <button
      disabled={disabled}
      className={CnButton({ disabled, view })}
      {...props}
    />
  )
}
