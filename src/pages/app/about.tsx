import { Helmet } from 'react-helmet-async'

import { AboutCard } from '@/components/about-card'

export function About() {
  return (
    <div className="space-y-7 mt-7">
      <Helmet title="Sobre" />
      <div>
        <h2 className="font-semibold text-muted-foreground">Sobre mim</h2>
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          cupiditate minima, suscipit earum pariatur quis vel ab officiis ut quo
          alias voluptatum cumque quam accusantium et placeat eaque, impedit
          voluptates.
        </p>
      </div>
      <div className="space-y-3">
        <h2 className="font-semibold text-muted-foreground">
          O que faço atualmente?
        </h2>
        <AboutCard />
        <p className="text-justify text-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          cupiditate minima, suscipit earum pariatur quis vel ab officiis ut quo
          alias voluptatum cumque quam accusantium et placeat eaque, impedit
          voluptates.
        </p>
      </div>
    </div>
  )
}
