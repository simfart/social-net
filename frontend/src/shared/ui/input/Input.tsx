import { FC } from "react";
import { cn } from "@bem-react/classname";

import "./input.scss";

const CnInput = cn("input");

// input-message

interface IInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  isInvalid: boolean;
  view?: "default" | "crazy";
  errText?: string;
}

export const Input: FC<IInputProps> = ({
  isInvalid,
  view = "default",
  errText,
  ...props
}) => {
  return (
    <>
      <input className={CnInput({ invalid: isInvalid, view })} {...props} />
      {errText && <span className={CnInput("message")}>{errText}</span>}
    </>
  );
};
