import { ChangeEvent, PropsWithChildren } from "react";

export type formInput = PropsWithChildren<{
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  type: "text" | "email" | "password" | "password" | "date" | "url";
  name: string;
  placeholder: string;
  required: boolean;
  minLength?: number;
  maxLength?: number;
}>;

export const AuthFormInput = ({ children, ...inputProps }: formInput) => {
  return <input {...inputProps}></input>;
};
