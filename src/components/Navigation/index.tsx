/** @jsxImportSource @emotion/react */
import { Link, useLocation } from 'react-router-dom'
import { cssNavigator } from './style'

interface Menu {
  name: string
  to: string
}

const Navigation = () => {
  const { pathname } = useLocation()
  const menus: Menu[] = [
    { name: '🎬 Movies', to: '/' },
    { name: '🎞 Collections', to: '/collections' },
  ]

  return (
    <nav css={cssNavigator}>
      {menus.map(({ name, to }) => (
        <Link className={pathname === to ? 'active' : ''} key={name} to={to}>
          {name}
        </Link>
      ))}
    </nav>
  )
}

export default Navigation
