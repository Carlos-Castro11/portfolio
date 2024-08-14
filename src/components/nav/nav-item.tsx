import { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'

import useMedia from '@/hooks/useMedia'

interface NavItemProps {
  link: string
  text: string
  icon?: ReactNode
  onClick?: () => void
}

export function NavItem({ link, text, icon, onClick }: NavItemProps) {
  const { pathname } = useLocation()
  const activePage = pathname === link
  const isMobile = useMedia('(max-width: 550px)')
  return (
    <Link
      onClick={onClick}
      className={`${
        isMobile
          ? `uppercase font-semibold flex gap-2 items-center bg-card p-2 rounded-md`
          : `relative font-semibold uppercase transition-all p-1.5 border border-transparent rounded-md`
      }
      ${activePage ? 'text-secondary bg-primary' : 'hover:border-muted hover:bg-secondary'}`}
      to={link}
    >
      {isMobile && icon}
      {text}
    </Link>
  )
}
