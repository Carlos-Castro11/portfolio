import { ReactNode } from 'react'

import { Button } from '../ui/button'

interface HeroLinkProps {
  icon: ReactNode
}

export function HeroLink({ icon }: HeroLinkProps) {
  return (
    <Button variant="ghost" className="flex w-max gap-4">
      {icon}
    </Button>
  )
}
