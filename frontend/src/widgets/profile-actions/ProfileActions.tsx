import { FC } from 'react'
import { EditProfile } from 'features/edit-profile'
import { cn } from '@bem-react/classname'

import './ProfileActions.scss'

export const CnActions = cn('actions')
interface IFollow {
  followers: number
  followings: number
}

export const ProfileActions: FC<IFollow> = ({ followers, followings }) => {
  return (
    <div className={CnActions()}>
      <div className={CnActions('numbers')}>
        <h3>{followers}</h3>
        <p>Followers</p>
      </div>
      <div className={CnActions('numbers')}>
        <h3>{followings}</h3>
        <p>Following</p>
      </div>
      <div className={CnActions('edit')}>
        <EditProfile />
      </div>
    </div>
  )
}
