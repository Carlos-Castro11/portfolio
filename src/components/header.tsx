import { useLocation } from 'react-router-dom'

import { ThemeToggle } from './theme/theme-toggle'
import { TitlePage } from './title-page'

interface AppPagesProps {
  route: string
  title: string
}

const AppPages: AppPagesProps[] = [
  {
    route: '/',
    title: 'Sobre',
  },
  {
    route: '/portfolio',
    title: 'Portfólio',
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
  const { pathname } = useLocation()

  const page = AppPages.find((page) => page.route === pathname)

  return (
    <header className="grid grid-cols-3 items-center justify-center">
      <TitlePage title={page!.title} />
      <nav className="col-start-2 flex justify-self-center">
        <ul className="flex gap-6 rounded-md border p-4">
          <li>
            <h1>Sobre</h1>
          </li>
          <li>
            <h1>Portfolio</h1>
          </li>
          <li>
            <h1>Currículo</h1>
          </li>
          <li>
            <h1>Contato</h1>
          </li>
        </ul>
      </nav>
      <div className="justify-self-end">
        <ThemeToggle />
      </div>
    </header>
  )
}
