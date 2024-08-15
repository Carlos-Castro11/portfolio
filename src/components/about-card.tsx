import { Code2 } from 'lucide-react'

import { Card } from './ui/card'

export function AboutCard() {
  return (
    <Card className="p-4">
      <div className="flex gap-2 mb-3 items-center">
        <Code2 />
        <h3 className="md:text-lg text-md uppercase font-semibold">
          Desenvolvimento web
        </h3>
      </div>
      <div>
        <p className="text-justify text-primary text-sm md:text-base">
          Atualmente atuo como desenvolvedor full stack na Guardian RH,
          utilizando C# no back-end e SQL no gerenciamento do banco de dados
          para garantir uma base sólida e eficiente, enquanto no front-end,
          utilizo React.js para criar interfaces de usuário modernas e
          responsivas. Essa combinação de tecnologias me permite desenvolver
          aplicações robustas e escaláveis, alinhadas com as necessidades dos
          nossos clientes.
        </p>
      </div>
    </Card>
  )
}
