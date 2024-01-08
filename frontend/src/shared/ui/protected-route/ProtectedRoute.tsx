import { FC } from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "shared/store";

export type ProtectedRouteProps = {
  element: JSX.Element;
};

export const ProtectedRoute = ({ element }: ProtectedRouteProps) => {
  const isloggedIn = useAuthStore();
  return isloggedIn ? element : <Navigate replace={true} to="/signin/" />;
};
