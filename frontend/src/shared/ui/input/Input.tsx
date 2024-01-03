import { FC } from "react";
import { cn } from "@bem-react/classname";
import "./input.scss";

interface IInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

const CnInput = cn("input");

export const Input: FC<IInputProps> = ({ ...props }) => {
  return <input className="input" {...props} />;
};
