import useMedia from '@/hooks/useMedia'

import { Nav } from './nav/nav'
import { NavMobile } from './nav/nav-mobile'
import { ThemeToggle } from './theme/theme-toggle'

export function Header() {
  const isMobile = useMedia('(max-width: 550px)')

  return (
    <>
      {isMobile ? (
        <header className="grid grid-cols-3 items-center justify-center">
          <h1 className="font-bold uppercase">Carlos Castro</h1>
          <div className="justify-self-center">
            <ThemeToggle />
          </div>
          <div className="justify-self-end">
            <NavMobile />
          </div>
        </header>
      ) : (
        <header className="grid grid-cols-3 items-center justify-center">
          <h1 className="font-bold uppercase">Carlos Castro</h1>
          <Nav />
          <div className="justify-self-end">
            <ThemeToggle />
          </div>
        </header>
      )}
    </>
  )
}
