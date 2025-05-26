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
          I&apos;m Carlos Castro, a 23-year-old Full Stack Developer passionate
          about building efficient and scalable web applications. I specialize
          in React.js on the front end and C# on the back end. I&apos;m
          currently pursuing a degree in Software Engineering and have been
          working in the field since 2022.
          <br />
          <br />
          I&apos;m deeply motivated by continuous learning and improvement. I
          thrive on solving real-world problems through code, and I&apos;m
          always seeking new challenges that allow me to grow and deliver
          impact. I&apos;m currently working on HR-focused systems integrated
          with TOTVS RM, serving large-scale businesses across Brazil.
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
