/* eslint-disable react-hooks/exhaustive-deps */
import { Book, GraduationCapIcon, User } from 'lucide-react'
import { useEffect, useState } from 'react'

import { MobileButton } from './mobile-button'
import { NavItem } from './nav-item'

export function NavMobile() {
  const [isMenuMobileActive, setIsMenuMobileActive] = useState<boolean>(false)

  function handleToggleMenuMobile() {
    setIsMenuMobileActive(!isMenuMobileActive)
  }

  function handleCloseMenuMobile() {
    setIsMenuMobileActive(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleCloseMenuMobile)
    return () => {
      window.removeEventListener('scroll', handleCloseMenuMobile)
    }
  }, [])

  return (
    <>
      <MobileButton
        onClick={handleToggleMenuMobile}
        isMenuMobileActive={isMenuMobileActive}
      />
      <nav
        className={`absolute bg-primary-foreground py-2 px-2 z-10 border rounded-md left-0 top-16 w-full
            transition-all duration-300 opacity-0 translate-y-[20%] invisible
            ${isMenuMobileActive && '!translate-y-0 !opacity-100 !visible'}
            `}
      >
        <ul className="space-y-2">
          <li>
            <NavItem
              text={'Portfolio'}
              link="/"
              icon={<Book />}
              onClick={handleCloseMenuMobile}
            />
          </li>
          <li>
            <NavItem
              text={'About'}
              link="/about"
              icon={<User />}
              onClick={handleCloseMenuMobile}
            />
          </li>
          <li>
            <NavItem
              text={'Resume'}
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
