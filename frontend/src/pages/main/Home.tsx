import { FC } from 'react'
import { useUser } from 'shared/hooks/useUser'
import { Menu } from 'widgets/navbar'

export const Home: FC = () => {
  const { data: user } = useUser()
  return <Menu />
}
