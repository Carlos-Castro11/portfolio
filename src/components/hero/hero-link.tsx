import { ReactNode } from 'react'

import { Button } from '../ui/button'

interface HeroLinkProps {
  icon: ReactNode
}

export function HeroLink({ icon }: HeroLinkProps) {
  return <Button variant="ghost">{icon}</Button>
}
