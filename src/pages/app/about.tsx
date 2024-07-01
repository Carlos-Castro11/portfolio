import { Helmet } from 'react-helmet-async'

export function About() {
  return (
    <div className="space-y-7 mt-7">
      <Helmet title="Sobre" />
      <div>
        <h2 className="font-semibold">Sobre mim</h2>
        <p className="text-justify text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          cupiditate minima, suscipit earum pariatur quis vel ab officiis ut quo
          alias voluptatum cumque quam accusantium et placeat eaque, impedit
          voluptates.
        </p>
      </div>
      <div>
        <h2 className="font-semibold">O que faço atualmente</h2>
        <p className="text-justify text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          cupiditate minima, suscipit earum pariatur quis vel ab officiis ut quo
          alias voluptatum cumque quam accusantium et placeat eaque, impedit
          voluptates.
        </p>
      </div>
    </div>
  )
}
