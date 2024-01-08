import { FC } from "react";
import { useUser } from "shared/hooks/useUser";
import { Menu } from "widgets/menu";

export const Home: FC = () => {
  const { data: user } = useUser();
  return <Menu />;
};
