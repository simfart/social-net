import { FC } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { logout } from "shared/api";

export const Logout: FC = () => {
  const navigate = useNavigate();
  const { mutate } = useMutation(logout, {
    onSuccess: () => {
      window.localStorage.removeItem("jwt");
      navigate("/signin", { replace: true });
    },
  });

  const handleClick = () => {
    mutate();
  };

  return <button onClick={handleClick}>Exit</button>;
};
