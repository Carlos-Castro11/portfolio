import { Code2 } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Button } from './ui/button'

interface ProjectProps {
  name: string
  image: string
  linkGithub: string
  description: string
}

export function Project({
  name,
  image,
  linkGithub,
  description,
}: ProjectProps) {
  return (
    <div className="flex flex-col gap-4">
      <Link to={'https://google.com'} target="_blank">
        <img
          className="rounded-md transition-all duration-300"
          src={image}
          alt=""
        />
      </Link>
      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold">{name}</p>
          <p>{description}</p>
        </div>
        <Link to={linkGithub} target="_blank">
          <Button variant="outline" className="flex gap-2">
            Ver código
            <Code2 />
          </Button>
        </Link>
      </div>
    </div>
  )
}
