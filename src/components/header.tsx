import { useLocation } from 'react-router-dom'

import useMedia from '@/hooks/useMedia'

import { Nav } from './nav/nav'
import { NavMobile } from './nav/nav-mobile'
import { ThemeToggle } from './theme/theme-toggle'
import { TitlePage } from './title-page'

interface AppPagesProps {
  route: string
  title: string
}

const AppPages: AppPagesProps[] = [
  {
    route: '/',
    title: 'Portfólio',
  },
  {
    route: '/about',
    title: 'Sobre',
  },
  {
    route: '/resume',
    title: 'Currículo',
  },
  {
    route: '/contact',
    title: 'Contato',
  },
]

export function Header() {
  const isMobile = useMedia('(max-width: 550px)')
  const { pathname } = useLocation()

  const page = AppPages.find((page) => page.route === pathname)

  return (
    <header className="grid grid-cols-3 items-center justify-center">
      <TitlePage title={page!.title} />
      {isMobile ? <NavMobile /> : <Nav />}
      <div className="justify-self-end">
        <ThemeToggle />
      </div>
    </header>
  )
}
