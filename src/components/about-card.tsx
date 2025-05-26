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
          I currently work as a full stack developer at Guardian RH, using C# on
          the back-end and SQL for database management to ensure a solid and
          efficient foundation, while on the front-end, I use React.js to create
          modern and responsive user interfaces. This combination of
          technologies allows me to develop robust and scalable applications,
          aligned with the needs of our clients.
        </p>
      </div>
    </Card>
  )
}
