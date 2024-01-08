import { FC } from "react";
import "./input.scss";

interface IInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  isValid: boolean;
  errText?: string;
}

export const Input: FC<IInputProps> = ({ isValid, errText, ...props }) => {
  return (
    <>
      <input className={`input ${isValid ? "input_invalid" : ""}`} {...props} />
      {errText && <span className="input__massage">{errText}</span>}
    </>
  );
};
