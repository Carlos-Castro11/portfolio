import { ReactNode } from 'react'

import { ResumeProps } from '@/db'

import { BasicIcon } from '../basic-icon'
import { ResumeItemText } from './resume-item-text'

interface ResumeItemProps {
  title: string
  icon: ReactNode
  data: ResumeProps[]
  isJobsItem?: boolean
}

export function ResumeItem({
  title,
  icon,
  data,
  isJobsItem = false,
}: ResumeItemProps) {
  return (
    <>
      <div className="flex gap-2 items-center">
        <BasicIcon icon={icon} />
        <h3 className="font-semibold uppercase text-lg">{title}</h3>
      </div>
      <div
        className={`ml-10 mt-2 lg:ml-16 lg:mt-4 space-y-5 relative
          after:content[''] after:bg-muted-foreground ${isJobsItem ? 'after:h-[77%]' : 'after:h-[90%]'} 
          after:w-[0.5px] after:absolute after:-left-[.85rem] after:-top-2 lg:after:-left-[2.3rem] lg:after:-top-4
        `}
      >
        {data?.map((item) => {
          return (
            <ResumeItemText
              key={item.id}
              title={item.title}
              duration={item.duration}
              text={item.text}
              status={item.status}
              entity={item.entity}
            />
          )
        })}
      </div>
    </>
  )
}
