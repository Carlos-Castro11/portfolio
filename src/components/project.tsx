import { Code2 } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Button } from './ui/button'

interface ProjectProps {
  name: string
  image: string
  linkGithub: string
  link: string
  description: string
}

export function Project({
  name,
  image,
  linkGithub,
  link,
  description,
}: ProjectProps) {
  return (
    <div className="flex flex-col gap-2 max-w-[375px]">
      <Link
        className="group relative overflow-hidden rounded-md"
        to={link}
        target="_blank"
      >
        <div className="absolute bottom-0 left-0 z-10 h-full w-full bg-muted opacity-0 transition-all duration-200 group-hover:opacity-80 rounded-md" />
        <img
          className={`transition-all duration-200 group-hover:scale-125 `}
          src={image}
          alt=""
        />
      </Link>
      <div
        className={`flex flex-col 
          md:flex-row gap-2 md:items-center md:justify-between`}
      >
        <div>
          <p className="font-semibold md:text-lg">{name}</p>
          <p className="text-xs md:text-sm">{description}</p>
        </div>
        <Link to={linkGithub} target="_blank">
          <Button variant="outline" className="flex gap-2 w-full text-sm">
            Ver código
            <Code2 />
          </Button>
        </Link>
      </div>
    </div>
  )
}
