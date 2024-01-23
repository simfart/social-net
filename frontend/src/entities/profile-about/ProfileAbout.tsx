import { FC, PropsWithChildren } from 'react'
import { EditButton } from 'features/edit-button'
import { cn } from '@bem-react/classname'

import './ProfileAbout.scss'

export interface IProfileAbout extends PropsWithChildren {
  data: Record<string, string>
}
const CnAbout = cn('profileAbout')

export const ProfileAbout: FC<IProfileAbout> = ({ data }) => {
  return (
    <div className={CnAbout()}>
      <div className={CnAbout('cover')}>
        <img className={CnAbout('avatar')} src={data?.avatar} alt="Photo" />
        <div className={CnAbout('edit')}>
          <EditButton />
        </div>
      </div>

      <div className={CnAbout('container')}>
        <h1 className={CnAbout({ details: 'title' })}>{data?.name} </h1>
        <p className={CnAbout({ details: 'subtitle' })}>{data?.location}</p>
        <p className={CnAbout({ details: 'text' })}>{data?.about}</p>
      </div>
    </div>
  )
}
