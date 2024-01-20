import { cn } from '@bem-react/classname'
import { FC } from 'react'
import { useUser } from 'shared/hooks/useUser'
import { Navbar } from 'widgets/menu'
import { ProfileAbout } from '../../entities/profile-about'

import './Profile.scss'

const CnProfile = cn('profile')

export const Profile: FC = () => {
  const { data: user } = useUser()
  console.log(user.data)
  return (
    <section className={CnProfile()}>
      <Navbar />
      <div className={CnProfile('content')}>
        <ProfileAbout data={user.data} />
        <div className={CnProfile('about')}></div>
        <div className={CnProfile('actions')}></div>
        <div className={CnProfile('posts-filter')}></div>
      </div>
    </section>
  )
}
