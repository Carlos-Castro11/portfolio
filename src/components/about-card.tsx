import { Code2 } from 'lucide-react'

import { Card } from './ui/card'

export function AboutCard() {
  return (
    <Card className="p-4">
      <div className="flex gap-2 mb-3 items-center">
        <Code2 />
        <h3 className="text-lg uppercase font-semibold">Desenvolvimento web</h3>
      </div>
      <div>
        <p className="text-justify text-primary">
          Atualmente, trabalho na Guardian como desenvolvedor web, onde me
          dedico a criar soluções inovadoras para o setor de Recursos Humanos.
          <br />
          <br />
          Atuo como desenvolvedor full stack, utilizando C# no back-end para
          garantir uma base sólida e eficiente, enquanto no front-end, utilizo
          React.js para criar interfaces de usuário modernas e responsivas. Essa
          combinação de tecnologias me permite desenvolver aplicações robustas e
          escaláveis, alinhadas com as necessidades dos nossos clientes.
        </p>
      </div>
    </Card>
  )
}
