import { FC } from "react";
import { useUser } from "shared/hooks/useUser";
import { Logout } from "shared/ui/logout";

export const Profile: FC = () => {
  const { data: user } = useUser();
  console.log(user);
  return <Logout />;
};
