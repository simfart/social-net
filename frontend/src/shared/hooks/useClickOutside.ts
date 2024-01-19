import { PropsWithChildren, useEffect } from "react";

interface IOutsideProps extends PropsWithChildren {
  divElement: React.MutableRefObject<HTMLDivElement | null>;
  handler: () => void;
}

export const useClickOutside = ({ divElement, handler }: IOutsideProps) => {
  useEffect(() => {
    const handleClickOutside = (event: TouchEvent | MouseEvent) => {
      if (
        divElement.current &&
        !divElement.current.contains(event.target as Node)
      ) {
        handler();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);
};
