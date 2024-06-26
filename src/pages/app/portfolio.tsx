import { Project } from '@/components/project'
import { PROJECTS } from '@/db'

export function Portfolio() {
  return (
    <>
      <h1 className="my-8 font-semibold">Desenvolvimento Web</h1>
      <div className="grid grid-cols-2 gap-7">
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
    </>
  )
}
