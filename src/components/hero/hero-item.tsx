import { ReactNode } from 'react'

import { BasicIcon } from '../basic-icon'

interface HeroItemProps {
  fieldName: string
  fieldValue: string
  icon: ReactNode
}

export function HeroItem({ fieldName, fieldValue, icon }: HeroItemProps) {
  return (
    <div className="flex gap-2">
      <BasicIcon icon={icon} />
      <div className="text-left">
        <h5 className="uppercase text-muted-foreground text-sm">{fieldName}</h5>
        <p className="text-primary text-xs">{fieldValue}</p>
      </div>
    </div>
  )
}
