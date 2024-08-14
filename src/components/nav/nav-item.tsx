import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

import useMedia from '@/hooks/useMedia'

interface NavItemProps {
  link: string
  text: string
  icon?: ReactNode
  onClick?: () => void
}

export function NavItem({ link, text, icon, onClick }: NavItemProps) {
  const isMobile = useMedia('(max-width: 550px)')
  return (
    <Link
      onClick={onClick}
      className={`${
        isMobile
          ? `uppercase font-semibold flex gap-2 items-center bg-card p-2 rounded-md
          `
          : `after:content[''] relative font-semibold after:absolute after:bottom-0 
        after:left-0 after:h-[1.5px] after:w-0 after:bg-primary after:transition-all after:duration-300 
        hover:after:w-full`
      }
        `}
      to={link}
    >
      {isMobile && icon}
      {text}
    </Link>
  )
}
