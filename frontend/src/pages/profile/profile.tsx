import { cn } from '@bem-react/classname'
import { FC } from 'react'
import { useUser } from 'shared/hooks/useUser'
import { Navbar } from 'widgets/navbar'
import { ProfileAbout } from 'widgets/profile-about'
import { ProfileActions } from 'widgets/profile-actions'
import { Tabbar } from 'widgets/tabbar'

import './Profile.scss'
import { Loader } from 'shared/ui/loader/Loader'

const CnProfile = cn('profile')

export const Profile: FC = () => {
  const { data: user } = useUser()

  if (!user) return <Loader />

  return (
    <section className={CnProfile()}>
      <Navbar />
      <div className={CnProfile('content')}>
        <ProfileAbout user={user} />
        <ProfileActions
          followers={user?.followers?.length ?? 0}
          followings={user?.followings?.length ?? 0}
        />
        <div className={CnProfile('actions')}></div>
        <div className={CnProfile('posts-filter')}></div>
        <Tabbar />
      </div>
    </section>
  )
}
