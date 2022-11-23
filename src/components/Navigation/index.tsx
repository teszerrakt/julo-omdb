/** @jsxImportSource @emotion/react */
import { Link, useLocation } from 'react-router-dom'
import { cssNavigator } from './style'

interface Menu {
  name: string
  to: string
  icon: string
}

const Navigation = () => {
  const { pathname } = useLocation()
  const menus: Menu[] = [
    { name: 'Movies', to: '/', icon: '🎬' },
    { name: 'Collections', to: '/collections', icon: '🎞' },
  ]

  return (
    <nav css={cssNavigator}>
      {menus.map(({ name, to, icon }) => (
        <Link className={pathname === to ? 'active' : ''} key={name} to={to}>
          <span>{icon}</span>
          {name}
        </Link>
      ))}
    </nav>
  )
}

export default Navigation
