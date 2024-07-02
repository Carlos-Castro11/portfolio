import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface HeroLinkMobileProps {
  text: string
  icon: ReactNode
}

export function HeroLinkMobile({ icon, text }: HeroLinkMobileProps) {
  return (
    <>
      <Link
        to={'https://google.com'}
        target="_blank"
        className="flex bg-card justify-center gap-3 rounded-md border py-1.5 max-w-[200px]"
      >
        {icon}
        <span className="font-semibold">{text}</span>
      </Link>
    </>
  )
}
