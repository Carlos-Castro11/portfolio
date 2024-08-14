import { Helmet } from 'react-helmet-async'

import { Project } from '@/components/project'
import { PROJECTS } from '@/db'

export function Portfolio() {
  return (
    <div className="flex justify-center flex-col gap-3">
      <Helmet title="Portfólio" />
      {/* <h3 className="font-semibold text-muted-foreground">Publicados</h3> */}
      <div className="grid grid-cols-2 gap-y-6 gap-x-6 2xl:gap-x-0">
        {PROJECTS.map((project) => {
          return (
            <Project
              key={project.id}
              name={project.name}
              image={project.image}
              linkGithub={project.linkGithub}
              link={project.link}
              description={project.description}
            />
          )
        })}
      </div>
    </div>
  )
}
