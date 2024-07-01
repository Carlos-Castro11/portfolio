import { Book, GraduationCapIcon, User } from 'lucide-react'
import { useState } from 'react'

import { MobileButton } from './mobile-button'
import { NavItem } from './nav-item'

export function NavMobile() {
  const [isMenuMobileActive, setIsMenuMobileActive] = useState<boolean>(false)

  function handleCloseMenuMobile() {
    setIsMenuMobileActive(!isMenuMobileActive)
  }

  return (
    <>
      <MobileButton
        onClick={handleCloseMenuMobile}
        isMenuMobileActive={isMenuMobileActive}
      />
      <nav
        className={`absolute bg-primary-foreground p-2 z-10 border rounded-md left-0 top-16 w-full
            transition-all duration-300 opacity-0 translate-y-[20%] ${isMenuMobileActive && 'translate-y-0 opacity-100'}
            `}
      >
        <ul className="space-y-2">
          <li>
            <NavItem
              text={'Portfólio'}
              link="/"
              icon={<Book />}
              onClick={handleCloseMenuMobile}
            />
          </li>
          <li>
            <NavItem
              text={'Sobre'}
              link="/about"
              icon={<User />}
              onClick={handleCloseMenuMobile}
            />
          </li>
          <li>
            <NavItem
              text={'Currículo'}
              link="/resume"
              icon={<GraduationCapIcon />}
              onClick={handleCloseMenuMobile}
            />
          </li>
        </ul>
      </nav>
    </>
  )
}
