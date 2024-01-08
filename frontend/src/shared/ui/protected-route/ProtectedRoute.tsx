import { FC } from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "shared/store";

export type ProtectedRouteProps = {
  element: JSX.Element;
};

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ element }) => {
  const { isLoggedIn } = useAuthStore();

  return isLoggedIn ? element : <Navigate replace={true} to="/signin/" />;
};
