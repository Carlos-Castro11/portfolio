import { Project } from '@/components/project'
import { PROJECTS } from '@/db'

export function Portfolio() {
  return (
    <div className="flex justify-center flex-col gap-3">
      <h3 className="font-semibold text-muted-foreground">Publicados</h3>
      <div className="grid grid-cols-2 gap-y-6 gap-x-10">
        {PROJECTS.map((project) => {
          return (
            <Project
              key={project.id}
              name={project.name}
              image={project.image}
              linkGithub={project.linkGithub}
              description={project.description}
            />
          )
        })}
      </div>
    </div>
  )
}
