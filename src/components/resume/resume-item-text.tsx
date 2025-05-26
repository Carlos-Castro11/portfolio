import { Plus } from 'lucide-react'

import { ResumeItemDialog } from '../resume-item-dialog'
import { Button } from '../ui/button'
import { Dialog, DialogTrigger } from '../ui/dialog'

interface ResumeItemTextProps {
  title: string
  text: string
  status: 'completed' | 'inProgress'
  duration: string
  entity: string
  officialLink: string
  workType: string
}

export function ResumeItemText({
  text,
  title,
  status,
  duration,
  entity,
  officialLink,
  workType,
}: ResumeItemTextProps) {
  return (
    <div
      className={`relative
        after:content[''] after:w-3 after:h-3 after:rounded-full after:bg-muted-foreground 
        after:absolute after:-left-[19px] lg:after:-left-[2.62rem] after:bottom-1/2
        `}
    >
      <div className="flex gap-2 items-center">
        <h1 className="font-semibold uppercase text-sm text-nowrap">{title}</h1>
      </div>
      <p className="text-muted-foreground text-sm max-w-[375px] sm:max-w-full xl:max-w-[375px]">
        {text}
      </p>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant={'secondary'}
            className="px-2 text-xs flex gap-1 mt-1"
          >
            Detalhes <Plus size={16} />
          </Button>
        </DialogTrigger>
        <ResumeItemDialog
          status={status}
          entity={entity}
          duration={duration}
          title={title}
          officialLink={officialLink}
          workType={workType}
        />
      </Dialog>
    </div>
  )
}
