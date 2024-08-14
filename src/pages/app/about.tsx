import { Helmet } from 'react-helmet-async'

import { AboutCard } from '@/components/about-card'
import { Form } from '@/components/form'

export function About() {
  return (
    <div className="space-y-4">
      <Helmet title="Sobre" />
      <div>
        <h2 className="font-semibold text-muted-foreground">Sobre mim</h2>
        <p className="text-justify text-sm md:text-base">
          Meu nome é Carlos Castro, tenho 22 anos e estou cursando Engenharia de
          Software no ano de 2022. Desde que comecei meus estudos, desenvolvi
          uma paixão intensa por desenvolvimento web, uma área que me fascina
          pela sua constante evolução e potencial de inovação.
          <br />
          <br />
          Sou uma pessoa extremamente disciplinada e focada, características que
          considero essenciais para alcançar meus objetivos. Minha sede de
          aprendizado me motiva a buscar constantemente novas habilidades e
          conhecimentos, com o objetivo de me tornar um profissional cada vez
          melhor.Estou sempre à procura de oportunidades para aplicar o que
          aprendi na prática, colaborando em projetos que me desafiem e me
          permitam crescer. Estou comprometido em construir uma carreira sólida
          e impactante na área de desenvolvimento web.
        </p>
      </div>
      <div className="space-y-1">
        <h2 className="font-semibold text-muted-foreground">
          O que faço atualmente?
        </h2>
        <AboutCard />
      </div>
      <Form />
    </div>
  )
}
