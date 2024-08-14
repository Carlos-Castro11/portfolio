import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface HeroLinkMobileProps {
  text: string
  icon: ReactNode
  link: string
}

export function HeroLinkMobile({ icon, text, link }: HeroLinkMobileProps) {
  return (
    <>
      <Link
        to={link}
        target="_blank"
        className="flex bg-card justify-center gap-3 rounded-md border py-1.5 max-w-[200px]"
      >
        {icon}
        <span className="font-semibold">{text}</span>
      </Link>
    </>
  )
}
