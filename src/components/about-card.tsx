import { Code2 } from 'lucide-react'

import { Card } from './ui/card'

export function AboutCard() {
  return (
    <Card className="p-2">
      <div className="flex gap-2 mb-3 items-center">
        <Code2 />
        <h3 className="text-lg uppercase font-semibold">Desenvolvimento web</h3>
      </div>
      <div>
        <p className="text-muted-foreground">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
          consequuntur reprehenderit quod. Sunt nobis neque.
        </p>
      </div>
    </Card>
  )
}
