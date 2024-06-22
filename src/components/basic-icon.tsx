import { ReactNode } from 'react'

import { Card } from './ui/card'

interface BasicIconProps {
  icon: ReactNode
}

export function BasicIcon({ icon }: BasicIconProps) {
  return (
    <Card className="flex items-center justify-center bg-primary-foreground px-3">
      {icon}
    </Card>
  )
}
