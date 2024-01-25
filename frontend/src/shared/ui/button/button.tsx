import { cn } from '@bem-react/classname'
import { FC } from 'react'

import './button.scss'

const CnButton = cn('button')

interface IButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  view?:
    | 'default'
    | 'auth'
    | 'discard'
    | 'publish'
    | 'edit'
    | 'onedit'
    | 'tabbar'
  isActive?: boolean
}

export const Button: FC<IButtonProps> = ({
  view = 'default',
  disabled,
  isActive,
  ...props
}) => {
  return (
    <button
      disabled={disabled}
      className={CnButton({ isActive, disabled, view })}
      {...props}
    />
  )
}
