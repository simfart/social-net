import { cn } from '@bem-react/classname'
import './TabbarComponent.scss'

const CnTabbar = cn('tabbar')
interface TabBarProps<T> {
  items: T[]
  selectedItem: T
  onTabClick: (item: T) => void
}

export const TabbarComponent = <T extends { name: string }>(
  props: TabBarProps<T>,
) => {
  const { items, selectedItem, onTabClick } = props
  return (
    <>
      <div className={CnTabbar()}>
        {items.map((item) => {
          const active = item.name === selectedItem.name
          return (
            <div
              key={item.name}
              className={CnTabbar('tab', { active })}
              onClick={() => onTabClick(item)}
            >
              {item.name}
            </div>
          )
        })}
      </div>
    </>
  )
}
