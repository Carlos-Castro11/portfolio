import { useState } from 'react'

import { MobileButton } from './mobile-button'
import { NavItem } from './navItem'

export function NavMobile() {
  const [isMenuMobileActive, setIsMenuMobileActive] = useState<boolean>(false)

  return (
    <>
      <MobileButton
        onClick={() => setIsMenuMobileActive(!isMenuMobileActive)}
        isMenuMobileActive={isMenuMobileActive}
      />
      {isMenuMobileActive ? (
        <nav
          className={`absolute bg-primary-foreground p-2 z-10 border rounded-md left-0 top-16 w-full
            transition-all duration-300
            `}
        >
          <ul className="">
            <li>
              <NavItem text={'Portfólio'} link="/" />
            </li>
            <li>
              <NavItem text={'Sobre'} link="/about" />
            </li>
            <li>
              <NavItem text={'Currículo'} link="/resume" />
            </li>
          </ul>
        </nav>
      ) : null}
    </>
  )
}
