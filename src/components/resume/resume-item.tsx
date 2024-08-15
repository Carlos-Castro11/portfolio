import { ReactNode } from 'react'

import { ResumeProps } from '@/db'
import useMedia from '@/hooks/useMedia'

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
  const isMobile = useMedia('(max-width: 700px)')
  const jobItemHeight = isMobile ? 'after:h-[77%]' : 'after:h-[77%]'
  const educationItemHeight = isMobile ? 'after:h-[88.5%]' : 'after:h-[90.5%]'
  return (
    <>
      <div className="flex gap-2 items-center">
        <BasicIcon icon={icon} />
        <h3 className="font-semibold uppercase text-lg">{title}</h3>
      </div>
      <div
        className={`ml-10 mt-2 lg:ml-16 lg:mt-4 space-y-5 relative
          after:content[''] after:bg-muted-foreground ${isJobsItem ? jobItemHeight : educationItemHeight} 
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
              officialLink={item.officialLink}
              workType={item.worktType}
            />
          )
        })}
      </div>
    </>
  )
}
