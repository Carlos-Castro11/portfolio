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
          My name is Carlos Castro, I am 23 years old and currently work as a
          Full Stack Developer. I began my Software Engineering studies in 2022
          and continue to pursue my degree while gaining practical experience in
          the field. On the front end, I work primarily with React.js, and on
          the back end, I specialize in C#.
          <br />
          <br />I have a deep passion for web development, driven by its
          fast-paced evolution and endless possibilities for innovation. I am
          highly disciplined and focused, always seeking new opportunities to
          grow both technically and professionally. My constant thirst for
          learning motivates me to stay up-to-date with the latest technologies
          and best practices. I am committed to building a strong and impactful
          career in web development, contributing to projects that challenge me
          and drive meaningful results.
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
