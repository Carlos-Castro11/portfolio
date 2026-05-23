import { Code2 } from 'lucide-react'

import { Card } from './ui/card'

export function AboutCard() {
  return (
    <Card className="p-4">
      <div className="flex gap-2 mb-3 items-center">
        <Code2 />
        <h3 className="md:text-lg text-md uppercase font-semibold">
          Web Development
        </h3>
      </div>
      <div>
        <p className="text-justify text-primary text-sm md:text-base">
          I currently work as a Full Stack Developer at Ilumeo, a data-driven
          marketing platform with multiple microservices and AI integrations. On
          On back-end, I build and maintain services using Node.js and
          TypeScript, while on the front-end I develop modern and responsive
          interfaces with React 18+ and TypeScript. I also work with PostgreSQL
          PostgreSQL se management and have integrated the OpenAI API to aut
          data analysis f or large-scale clients across Brazil.
        </p>
      </div>
    </Card>
  )
}
