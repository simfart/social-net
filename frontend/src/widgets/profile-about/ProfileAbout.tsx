import { FC, PropsWithChildren } from 'react'
import { EditButton } from '../../entities/edit-button'
import { cn } from '@bem-react/classname'
import { User } from 'shared/types'

import './ProfileAbout.scss'

export interface IProfileAbout extends PropsWithChildren {
  user: User
}
const CnAbout = cn('profileAbout')

export const ProfileAbout: FC<IProfileAbout> = ({ user }) => {
  return (
    <div className={CnAbout()}>
      <div className={CnAbout('cover')}>
        <img className={CnAbout('avatar')} src={user?.avatar} alt="Photo" />
        <div className={CnAbout('edit')}>
          <EditButton />
        </div>
      </div>

      <div className={CnAbout('container')}>
        <h1 className={CnAbout({ details: 'title' })}>{user?.name} </h1>
        <p className={CnAbout({ details: 'subtitle' })}>{user?.location}</p>
        <p className={CnAbout({ details: 'text' })}>{user?.about}</p>
      </div>
    </div>
  )
}
