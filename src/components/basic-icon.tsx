import { ReactNode } from 'react'

interface BasicIconProps {
  icon: ReactNode
}

export function BasicIcon({ icon }: BasicIconProps) {
  return (
    <div className="bg-muted flex items-center p-2 rounded-md h-10">{icon}</div>
  )
}
