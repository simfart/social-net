import { cn } from "@bem-react/classname";
import { FC } from "react";

import "./button.scss";

const CnButton = cn("button");

interface IButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  view?: "default" | "auth" | "discard" | "publish";
  isInvalid?: boolean;
  textButton?: string;
}

export const Button: FC<IButtonProps> = ({
  isInvalid,
  view = "default",
  textButton,

  ...props
}) => {
  return (
    <button
      aria-label={textButton}
      className={CnButton({ invalid: isInvalid, view })}
      {...props}
    >
      {textButton}
    </button>
  );
};
