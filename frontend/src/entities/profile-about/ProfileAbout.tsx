import { FC, PropsWithChildren } from 'react'

import { backgroundProfile } from 'shared/images'
import './ProfileAbout.scss'
import { cn } from '@bem-react/classname'

export interface IProfileAbout extends PropsWithChildren {
  data: Record<string, string>
}
const CnAbout = cn('profileAbout')

export const ProfileAbout: FC<IProfileAbout> = ({ data }) => {
  return (
    <div className={CnAbout()}>
      <img
        className={CnAbout('cover')}
        src={backgroundProfile}
        alt="background Profile"
      />
      <img className={CnAbout('avatar')} src={data.avatar} alt="Photo" />
      <h1>{data.name} </h1>
      <p>{data.location}</p>
      <p>{data.about}</p>
    </div>
  )
}
