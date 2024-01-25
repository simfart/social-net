import { useMemo } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { register } from "shared/api";

export const useRegister = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation(register, {
    onSuccess: (data) => {
      window.localStorage.setItem("jwt", data.token);
      queryClient.invalidateQueries(["user"]);
      navigate("/profile");
    },
    onError: (err) => {
      console.log(err);
    },
  });

  return useMemo(() => ({ mutate, isLoading }), [mutate, isLoading]);
};
