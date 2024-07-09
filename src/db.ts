import dogs from './assets/images/dogs.jpg'
import mf from './assets/images/marquesefinelli.jpg'
import muflix from './assets/images/Muflix.jpg'

export interface ResumeProps {
  id: number
  title: string
  status: string
  duration: string
  entity: string
  text: string
}

export const PROJECTS = [
  {
    id: 1,
    name: 'Muflix',
    description: 'Plataforma de streaming.',
    linkGithub: 'https://www.google.com',
    image: muflix,
  },
  {
    id: 2,
    name: 'Dogs',
    description: 'Rede social para cachorros.',
    linkGithub: 'https://www.google.com',
    image: dogs,
  },
  {
    id: 3,
    name: 'Marques e Finelli',
    description: 'Empreendimentos imobiliarios.',
    linkGithub: 'https://www.marquesefinelliemp.com',
    image: mf,
  },
]

export const EDUCATION: ResumeProps[] = [
  {
    id: 1,
    title: 'Engenharia de software',
    status: 'Cursando',
    duration: '5 anos',
    entity: 'Unicesumar',
    text: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, qui ad exercitationem dolores, 
        a fuga vitae tenetur similique ex dolore
      `,
  },
  {
    id: 2,
    title: 'Origamid | React Completo',
    status: 'Concluído',
    duration: '60 horas',
    entity: 'Origamid',
    text: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, qui ad exercitationem dolores, 
        a fuga vitae tenetur similique ex dolore
      `,
  },
  {
    id: 3,
    title: 'Rocket Seat | React Completo',
    status: 'Cursando',
    duration: '64 horas',
    entity: 'Rocket Seat',
    text: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, qui ad exercitationem dolores, 
        a fuga vitae tenetur similique ex dolore
      `,
  },
  {
    id: 4,
    title: 'Rocket Seat | C#',
    status: 'Cursando',
    duration: '100 horas',
    entity: 'Rocket Seat',
    text: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, qui ad exercitationem dolores,
      a fuga vitae tenetur similique ex dolore
    `,
  },
]

export const JOBS: ResumeProps[] = [
  {
    id: 1,
    title: 'Estágio em Tecnologia',
    status: 'Concluído',
    duration: '6 meses',
    entity: 'CAA/NM',
    text: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, qui ad exercitationem dolores, 
        a fuga vitae tenetur similique ex dolore
      `,
  },
  {
    id: 2,
    title: 'Estágio em Desenvolvimento Web',
    status: 'Em andamento',
    duration: '1 ano',
    entity: 'Guardian',
    text: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, qui ad exercitationem dolores, 
        a fuga vitae tenetur similique ex dolore
      `,
  },
]
