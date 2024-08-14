import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

import { Button } from '../ui/button'

interface HeroLinkProps {
  icon: ReactNode
  link: string
}

export function HeroLink({ icon, link }: HeroLinkProps) {
  return (
    <Button variant="ghost">
      <Link to={link} target="_blank">
        {icon}
      </Link>
    </Button>
  )
}
