import { FC, useState } from 'react'

import './Tabbar.scss'

import { cn } from '@bem-react/classname'
import { TabbarComponent } from 'shared/components/tabbar'
export const CnTabbar = cn('tabbar')

interface MySocial {
  id: number
  name: string
  link: string
}

const socials: MySocial[] = [
  { id: 11, name: 'WebSite', link: 'fabiobiondi.dev' },
  { id: 12, name: 'Youtube', link: 'YT' },
  { id: 13, name: 'Twitch', link: 'twitch' },
]
export const Tabbar: FC = () => {
  const [selectedSocial, setSelectedSocial] = useState<MySocial>(socials[0])

  function selectHandler(item: MySocial, selectedIndex: number) {
    setSelectedSocial(item)
  }
  return (
    <div>
      <TabbarComponent<MySocial>
        selectedItem={selectedSocial}
        items={socials}
        onTabClick={selectHandler}
      />
      {selectedSocial.link === 'twitch' && <div>ggggg</div>}
      <div className="border border-slate-200 border-solid rounded my-3 p-5">
        <a href={selectedSocial.link}>Visit {selectedSocial.name}</a>
      </div>
    </div>
  )
}
