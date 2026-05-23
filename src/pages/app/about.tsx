import { Helmet } from 'react-helmet-async'

import { AboutCard } from '@/components/about-card'
import { Form } from '@/components/form'

export function About() {
  return (
    <div className="space-y-4">
      <Helmet title="About" />
      <div>
        <h2 className="font-semibold text-muted-foreground">About me</h2>
        <p className="text-justify text-sm md:text-base">
          I&apos;m Carlos Castro, a 24-year-old Full Stack Developer passionate
          about building efficient and scalable web applications. I specialize
          in React.js and Node.js on the front and back end, with solid
          experience in TypeScript, Clean Architecture and microservices.
          I&apos;m currently pursuing a degree in Software Engineering and have
          been working in the field since 2022.
          <br />
          <br />
          I&apos;m motivated by real challenges and continuous growth. I enjoy
          working across the full stack from requirements and design to
          deployment in production and I take pride in writing clean,
          maintainable code. I&apos;m currently working on a data-driven
          marketing platform, delivering solutions for large-scale clients
          across Brazil.
        </p>
      </div>
      <div className="space-y-1">
        <h2 className="font-semibold text-muted-foreground">
          What do I do now?
        </h2>
        <AboutCard />
      </div>
      <Form />
    </div>
  )
}
