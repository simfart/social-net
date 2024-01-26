import { FC, useState } from 'react'
import { TabbarComponent } from './tabbar-component'
import { Posts } from 'widgets/Posts'

import './Tabbar.scss'

import { cn } from '@bem-react/classname'

export const CnTabbar = cn('tabbar')

interface Tab {
  name: string
  component: React.ReactNode
}

const tabs: Tab[] = [
  { name: 'Posts', component: <Posts /> },
  { name: 'Liked', component: <div>ппп</div> },
  { name: 'Subscribed', component: <div>иипппии</div> },
]
export const Tabbar: FC = () => {
  const [selectedTab, setSelectedTab] = useState<Tab>(tabs[0])

  function selectHandler(item: Tab) {
    setSelectedTab(item)
  }
  return (
    <div>
      <TabbarComponent<Tab>
        selectedItem={selectedTab}
        items={tabs}
        onTabClick={selectHandler}
      />
      {selectedTab.name && selectedTab.component}
    </div>
  )
}
