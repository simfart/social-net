import feedLogo from '../../shared/images/Feed.svg'
import alertLogo from '../../shared/images/Alert.svg'
import searchLogo from '../../shared/images/search.svg'
import profileLogo from '../../shared/images/Profile.svg'
import addLogo from '../../shared/images/Plus.svg'
import logo from '../../shared/images/logo.png'
import { Logout } from 'shared/ui/logout'
import { FC, useMemo } from 'react'
import { Link } from 'react-router-dom'

import './Navbar.scss'
import { cn } from '@bem-react/classname'

const navData = [
  {
    name: 'Notifications',
    icon: alertLogo,
    path: '/',
  },
  {
    name: 'Home',
    icon: feedLogo,
    path: '/',
  },
  {
    name: 'Search',
    icon: searchLogo,
    path: '/',
  },
  {
    name: 'Profile',
    icon: profileLogo,
    path: '/',
  },
]

const CnNavbar = cn('navbar')

export const Navbar: FC = () => {
  const NavItems = useMemo(() => {
    return navData.map((item, index) => {
      return (
        <li key={index}>
          <Link className={CnNavbar('link')} to={item.path}>
            <img src={item.icon} alt={item.name} />
            <span>{item.name}</span>
          </Link>
        </li>
      )
    })
  }, [])

  return (
    <nav className={CnNavbar()}>
      <ul className={CnNavbar('container')}>
        <img className={CnNavbar('logo')} src={logo} alt="Logo" />
        {NavItems}
        <Link className={CnNavbar('button')} to={'/create-post'}>
          <img src={addLogo} alt="Add content" />
        </Link>
      </ul>
      <div className={CnNavbar('logout')}>
        <Logout />
      </div>
    </nav>
  )
}
