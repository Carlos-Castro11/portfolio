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
    description: 'Plataforma de streaming.',
    linkGithub: 'https://github.com/Carlos-Castro11/Muflix-2.0',
    link: 'https://muflix-2-0.vercel.app/',
    image: muflix,
  },
  {
    id: 2,
    name: 'Pizzashop',
    description: 'Gerenciamento de pedidos.',
    linkGithub: 'https://github.com/Carlos-Castro11/pizzashop-web',
    link: 'https://github.com/Carlos-Castro11/pizzashop-web',
    image: pizzaShop,
  },
  {
    id: 3,
    name: 'DT Money',
    description: 'Controle financeiro.',
    linkGithub: 'https://github.com/Carlos-Castro11/DT-Money',
    link: 'https://github.com/Carlos-Castro11/DT-Money',
    image: dtMoney,
  },
  {
    id: 4,
    name: 'Marques e Finelli',
    description: 'Imobiliária.',
    linkGithub: 'https://github.com/Carlos-Castro11/MF2.0',
    link: 'https://marquesefinelli.com.br/',
    image: mf,
  },
  {
    id: 5,
    name: 'Dogs',
    description: 'Rede social para cachorros.',
    linkGithub: 'https://github.com/Carlos-Castro11/Dogs',
    link: 'https://dogs-lemon.vercel.app/',
    image: dogs,
  },
]

export const EDUCATION: ResumeProps[] = [
  {
    id: 1,
    title: 'Engenharia de software',
    status: 'inProgress',
    duration: '4 anos',
    entity: 'Unicesumar',
    text: `
        O Bacharelado em Engenharia de Software cobre todas as etapas do desenvolvimento de software, 
        incluindo análise de requisitos, implementação, testes e manutenção.
      `,
    officialLink: 'https://www.unicesumar.edu.br/',
    worktType: 'Híbrido',
  },
  {
    id: 2,
    title: 'Origamid | React',
    status: 'completed',
    duration: '60 horas',
    entity: 'Origamid',
    text: `
        O curso oferece uma imersão prática na biblioteca React. 
        Aprendemos a criar interfaces de usuário dinâmicas e responsivas, 
        gerenciar estados de aplicações e integrar APIs externas. O curso também cobre ferramentas do ecossistema React, como React Router e Redux.
      `,
    officialLink:
      'https://www.origamid.com/?utm_medium=adwords&utm_campaign=&utm_source=&gad_source=1&gclid=Cj0KCQjwzva1BhD3ARIsADQuPnUZNUQITZ0se3tlMDH0-hoXN8yapPS9hlTESC94WgdNGfWbmsmmocYaAuZVEALw_wcB',
    worktType: 'A distância',
  },
  {
    id: 3,
    title: 'Rocket Seat | React',
    status: 'inProgress',
    duration: '64 horas',
    entity: 'Rocket Seat',
    text: `
        O curso oferece um aprendizado intensivo e prático da biblioteca React, 
        focando em conceitos fundamentais e ferramentas do ecossistema moderno. Desenvolvemos habilidades para criar interfaces de usuário interativas, 
        gerenciar o estado da aplicação e consumir APIs.
      `,
    officialLink:
      'https://www.rocketseat.com.br/?utm_source=google&utm_medium=cpc&utm_campaign=lead&utm_term=perpetuo&utm_content=institucional-lead-home-texto-lead-brandkws-none-none-institucional-none-none-br-google&utm_term=rocketseat&utm_campaign=PROGRAMAS-ALL-BRANDKWS-SEM&utm_source=adwords&utm_medium=cpc&hsa_acc=8545075154&hsa_cam=16048648686&hsa_grp=135825188594&hsa_ad=579096962131&hsa_src=g&hsa_tgt=kwd-679159515078&hsa_kw=rocketseat&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=Cj0KCQjwzva1BhD3ARIsADQuPnWE4J0ee-I44sBcVUI5QI8Fe0D-cVE_-7T5EyM0pOm37JA7v8DzQk4aAuLIEALw_wcB',
    worktType: 'A distância',
  },
  {
    id: 4,
    title: 'Rocket Seat | C#',
    status: 'inProgress',
    duration: '100 horas',
    entity: 'Rocket Seat',
    text: `
      O curso é projetado para ensinar desde conceitos básicos até avançados da linguagem, 
      com foco em práticas modernas e no ecossistema 
      .NET, preparando os alunos para o mercado de trabalho, principalmente com APIs.
    `,
    officialLink:
      'https://www.rocketseat.com.br/?utm_source=google&utm_medium=cpc&utm_campaign=lead&utm_term=perpetuo&utm_content=institucional-lead-home-texto-lead-brandkws-none-none-institucional-none-none-br-google&utm_term=rocketseat&utm_campaign=PROGRAMAS-ALL-BRANDKWS-SEM&utm_source=adwords&utm_medium=cpc&hsa_acc=8545075154&hsa_cam=16048648686&hsa_grp=135825188594&hsa_ad=579096962131&hsa_src=g&hsa_tgt=kwd-679159515078&hsa_kw=rocketseat&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=Cj0KCQjwzva1BhD3ARIsADQuPnWE4J0ee-I44sBcVUI5QI8Fe0D-cVE_-7T5EyM0pOm37JA7v8DzQk4aAuLIEALw_wcB',
    worktType: 'A distância',
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
    title: 'Estágio | TI',
    status: 'completed',
    duration: '6 meses',
    entity: 'CAA/NM',
    text: `
        Durante meu estágio, aprendi conceitos de computação, Linux, 
        infraestrutura, redes e habilidades interpessoais. 
        Essa experiência foi essencial para meu crescimento profissional e pessoal.
      `,
    officialLink: 'https://www.caa.org.br/',
    worktType: 'Presencial',
  },
  {
    id: 2,
    title: 'Estágio | Desenvolvimento',
    status: 'inProgress',
    duration: '1 ano',
    entity: 'Guardian',
    text: `
        Atualmente, estou envolvido em todas as etapas do desenvolvimento de software, 
        desde o levantamento de requisitos até o deploy para produção. 
        Trabalho no back-end e front-end, utilizando C# e React.js, e bancos de dados SQL.
      `,
    officialLink: 'https://blog.guardianrh.com.br/',
    worktType: 'A distância',
  },
]
