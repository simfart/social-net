import { cn } from '@bem-react/classname'
import { FC } from 'react'
import { useUser } from 'shared/hooks/useUser'
import { Navbar } from 'widgets/menu'
// import { ProfileAbout } from 'entities/profile-about'
import { ProfileAbout } from '../../entities/profile-about'
import { ProfileActions } from 'widgets/profile-actions'

import './Profile.scss'

const CnProfile = cn('profile')

export const Profile: FC = () => {
  const { data: user } = useUser()
  console.log(user.data)
  console.log(user.data.followers.length)

  return (
    <section className={CnProfile()}>
      <Navbar />
      <div className={CnProfile('content')}>
        <ProfileAbout data={user.data} />
        <ProfileActions
          followers={user.data.followers?.length}
          followings={user.data.followings?.length}
        />
        <div className={CnProfile('actions')}></div>
        <div className={CnProfile('posts-filter')}></div>
      </div>
    </section>
  )
}
