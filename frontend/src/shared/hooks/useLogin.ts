import { useMemo } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { login } from "shared/api";

export const useLogin = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation(login, {
    onSuccess: (data) => {
      window.localStorage.setItem("jwt", data.token);
      
      queryClient.invalidateQueries(["user"]);

      navigate("/", { replace: true });
    },
    onError: (err) => {
      console.log(err);
    },
  });

  return useMemo(() => ({ mutate, isLoading }), [mutate, isLoading]);
};
