import React, { FC } from 'react'

import { cn } from '@bem-react/classname'

import './input.scss'

const CnInput = cn('input')

interface IInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  isInvalid?: boolean
  errText?: string
  inputSize?: 'l' | 's' | 'm'
  view?: 'default' | 'auth' | 'post' | 'edit'
  inputElement?: 'input' | 'textarea'
}

export const Input: FC<IInputProps> = ({
  isInvalid,
  errText,
  view = 'default',
  inputSize = 'm',
  inputElement = 'input',
  ...props
}) => {
  return (
    <div className={CnInput('container')}>
      {React.createElement(inputElement, {
        ...props,
        className: CnInput({ invalid: isInvalid, size: inputSize, view }),
      })}
      {errText && <span className={CnInput('message')}>{errText}</span>}
    </div>
  )
}
