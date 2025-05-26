import dogs from './assets/images/dogs.jpg'
import dtMoney from './assets/images/dtmoney.jpg'
import mf from './assets/images/mf.jpg'
import muflix from './assets/images/Muflix.jpg'
import pizzaShop from './assets/images/Pizza_Shop.jpg'

export interface ResumeProps {
  id: number
  title: string
  status: 'completed' | 'inProgress'
  duration: string
  entity: string
  text: string
  officialLink: string
  worktType: string
}

export const PROJECTS = [
  {
    id: 1,
    name: 'Muflix',
    description: 'Streaming plataform.',
    linkGithub: 'https://github.com/Carlos-Castro11/Muflix-2.0',
    link: 'https://muflix-2-0.vercel.app/',
    image: muflix,
  },
  {
    id: 2,
    name: 'Pizzashop',
    description: 'Order management.',
    linkGithub: 'https://github.com/Carlos-Castro11/pizzashop-web',
    link: 'https://github.com/Carlos-Castro11/pizzashop-web',
    image: pizzaShop,
  },
  {
    id: 3,
    name: 'DT Money',
    description: 'Financial control.',
    linkGithub: 'https://github.com/Carlos-Castro11/DT-Money',
    link: 'https://github.com/Carlos-Castro11/DT-Money',
    image: dtMoney,
  },
  {
    id: 4,
    name: 'Marques e Finelli',
    description: 'Real estate.',
    linkGithub: 'https://github.com/Carlos-Castro11/MF2.0',
    link: 'https://marquesefinelli.com.br/',
    image: mf,
  },
  {
    id: 5,
    name: 'Dogs',
    description: 'Social network for dogs.',
    linkGithub: 'https://github.com/Carlos-Castro11/Dogs',
    link: 'https://dogs-lemon.vercel.app/',
    image: dogs,
  },
]

export const EDUCATION: ResumeProps[] = [
  {
    id: 1,
    title: 'Software engineering',
    status: 'inProgress',
    duration: '4 years',
    entity: 'Unicesumar',
    text: `
        The Bachelor of Software Engineering covers all stages of software development, including requirements analysis, implementation, testing and maintenance.
      `,
    officialLink: 'https://www.unicesumar.edu.br/',
    worktType: 'Hybrid',
  },
  {
    id: 2,
    title: 'Origamid | React',
    status: 'completed',
    duration: '60 hours',
    entity: 'Origamid',
    text: `
        The course provides a hands-on immersion into the React library. 
        We learn how to create dynamic and responsive user interfaces, 
        manage application state, and integrate external APIs. The course also covers tools from the React ecosystem, such as React Router and Redux.
      `,
    officialLink:
      'https://www.origamid.com/?utm_medium=adwords&utm_campaign=&utm_source=&gad_source=1&gclid=Cj0KCQjwzva1BhD3ARIsADQuPnUZNUQITZ0se3tlMDH0-hoXN8yapPS9hlTESC94WgdNGfWbmsmmocYaAuZVEALw_wcB',
    worktType: 'From a distance',
  },
  {
    id: 3,
    title: 'Rocket Seat | React',
    status: 'completed',
    duration: '64 hours',
    entity: 'Rocket Seat',
    text: `
        The course provides intensive, hands-on learning of the React library, focusing on fundamental concepts and tools of the modern ecosystem. We develop skills to create interactive user interfaces, manage application state, and consume APIs.
      `,
    officialLink:
      'https://www.rocketseat.com.br/?utm_source=google&utm_medium=cpc&utm_campaign=lead&utm_term=perpetuo&utm_content=institucional-lead-home-texto-lead-brandkws-none-none-institucional-none-none-br-google&utm_term=rocketseat&utm_campaign=PROGRAMAS-ALL-BRANDKWS-SEM&utm_source=adwords&utm_medium=cpc&hsa_acc=8545075154&hsa_cam=16048648686&hsa_grp=135825188594&hsa_ad=579096962131&hsa_src=g&hsa_tgt=kwd-679159515078&hsa_kw=rocketseat&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=Cj0KCQjwzva1BhD3ARIsADQuPnWE4J0ee-I44sBcVUI5QI8Fe0D-cVE_-7T5EyM0pOm37JA7v8DzQk4aAuLIEALw_wcB',
    worktType: 'From a distance',
  },
  {
    id: 4,
    title: 'Rocket Seat | C#',
    status: 'inProgress',
    duration: '100 hours',
    entity: 'Rocket Seat',
    text: `
      The course is designed to teach everything from basic to advanced language concepts, with a focus on modern practices and the .NET ecosystem, preparing students for the job market, especially with APIs.
    `,
    officialLink:
      'https://www.rocketseat.com.br/?utm_source=google&utm_medium=cpc&utm_campaign=lead&utm_term=perpetuo&utm_content=institucional-lead-home-texto-lead-brandkws-none-none-institucional-none-none-br-google&utm_term=rocketseat&utm_campaign=PROGRAMAS-ALL-BRANDKWS-SEM&utm_source=adwords&utm_medium=cpc&hsa_acc=8545075154&hsa_cam=16048648686&hsa_grp=135825188594&hsa_ad=579096962131&hsa_src=g&hsa_tgt=kwd-679159515078&hsa_kw=rocketseat&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=Cj0KCQjwzva1BhD3ARIsADQuPnWE4J0ee-I44sBcVUI5QI8Fe0D-cVE_-7T5EyM0pOm37JA7v8DzQk4aAuLIEALw_wcB',
    worktType: 'From a distance',
  },
  // {
  //   id: 5,
  //   title: 'Formação Node.js',
  //   status: 'completed',
  //   duration: '50 horas',
  //   entity: 'Udemy',
  //   text: `
  //     O curso é projetado para ensinar desde conceitos básicos até avançados da linguagem,
  //     com foco em práticas modernas e no ecossistema
  //     Node, preparando os alunos para o mercado de trabalho, principalmente com APIs.
  //   `,
  //   officialLink: 'https://www.udemy.com/course/formacao-nodejs/',
  // },
]

export const JOBS: ResumeProps[] = [
  {
    id: 1,
    title: 'Internship | IT',
    status: 'completed',
    duration: '6 months',
    entity: 'CAA/NM',
    text: `
        During my internship, I learned computing concepts, Linux, 
        infrastructure, networks and interpersonal skills. 
        This experience was essential for my professional and personal growth.
      `,
    officialLink: 'https://www.caa.org.br/',
    worktType: 'In person',
  },
  {
    id: 2,
    title: 'Full Stack Develper',
    status: 'inProgress',
    duration: '2 years',
    entity: 'Guardian RH',
    text: `
        I am currently involved in all stages of software development, 
        from requirements gathering to deployment to production. 
        I work on the back-end and front-end, using C# and React.js, and SQL databases.
      `,
    officialLink: 'https://www.guardianrh.com.br/',
    worktType: 'From a distance',
  },
]
