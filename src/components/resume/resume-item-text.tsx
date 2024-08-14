import { Clock } from 'lucide-react'

interface ResumeItemTextProps {
  title: string
  text: string
  status: string
  duration: string
  entity: string
}

export function ResumeItemText({
  text,
  title,
  status,
  duration,
  entity,
}: ResumeItemTextProps) {
  return (
    <div
      className={`relative
        after:content[''] after:w-3 after:h-3 after:rounded-full after:bg-muted-foreground after:absolute after:-left-[1.1rem] lg:after:-left-[2.66rem] after:bottom-1/2
        `}
    >
      <div className="flex gap-2 items-center">
        <h1 className="font-semibold uppercase text-sm text-nowrap">{title}</h1>
        -
        <span className="flex gap-2 items-center">
          <Clock size={20} />
          {duration}
        </span>
      </div>
      <p className="text-justify text-muted-foreground text-sm max-w-[375px] sm:max-w-full xl:max-w-[375px]">
        {text}
      </p>
      <div className="flex flex-col">
        <span className="font-semibold text-sm">
          Entidade: <span className="font-normal">{entity}</span>
        </span>
        <span className="font-semibold text-sm">
          Status: <span className="font-normal">{status}</span>
        </span>
      </div>
    </div>
  )
}
