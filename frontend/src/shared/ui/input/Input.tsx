import { FC } from "react";
import { cn } from '@bem-react/classname'

interface IInputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  inputSize?: 's' | 'l' | 'xl';
}

const CnInput = cn('input')

export const Input: FC<IInputProps> = ({ size = 's', ...props }) => {
  return <input className={CnInput({ size })} {...props} />;
};