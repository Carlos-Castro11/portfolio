import dogs from './assets/images/dogs.jpg'
import dtMoney from './assets/images/DT_Money.jpg'
import mf from './assets/images/marquesefinelli.jpg'
import muflix from './assets/images/Muflix.jpg'
import pizzaShop from './assets/images/Pizza_Shop.jpg'

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
    linkGithub: 'https://github.com/Carlos-Castro11/Muflix-2.0',
    link: 'https://muflix-2-0.vercel.app/',
    image: muflix,
  },
  {
    id: 2,
    name: 'Pizzashop',
    description: 'Gerenciamento de pedidos',
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
    description: 'Empreendimentos imobiliarios.',
    linkGithub: 'https://github.com/Carlos-Castro11/MF2.0',
    link: 'https://www.marquesefinelliemp.com',
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
    status: 'Cursando',
    duration: '5 anos',
    entity: 'Unicesumar',
    text: `
        O Bacharelado em Engenharia de Software cobre todas as etapas do desenvolvimento de software, 
        incluindo análise de requisitos, implementação, testes e manutenção.
      `,
  },
  {
    id: 2,
    title: 'Origamid | React',
    status: 'Concluído',
    duration: '60 horas',
    entity: 'Origamid',
    text: `
        O curso oferece uma imersão prática na biblioteca React. 
        Aprendemos a criar interfaces de usuário dinâmicas e responsivas, 
        gerenciar estados de aplicações e integrar APIs externas. O curso também cobre ferramentas do ecossistema React, como React Router e Redux.
      `,
  },
  {
    id: 3,
    title: 'Rocket Seat | React',
    status: 'Cursando',
    duration: '64 horas',
    entity: 'Rocket Seat',
    text: `
        O curso oferece um aprendizado intensivo e prático da biblioteca React, 
        focando em conceitos fundamentais e ferramentas do ecossistema moderno. Desenvolvemos habilidades para criar interfaces de usuário interativas, 
        gerenciar o estado da aplicação e consumir APIs.
      `,
  },
  {
    id: 4,
    title: 'Rocket Seat | C#',
    status: 'Cursando',
    duration: '100 horas',
    entity: 'Rocket Seat',
    text: `
      O curso é projetado para ensinar desde conceitos básicos até avançados da linguagem, 
      com foco em práticas modernas e no ecossistema 
      .NET, preparando os alunos para o mercado de trabalho, principalmente com APIs.
    `,
  },
]

export const JOBS: ResumeProps[] = [
  {
    id: 1,
    title: 'Estágio | TI',
    status: 'Concluído',
    duration: '6 meses',
    entity: 'CAA/NM',
    text: `
        Durante meu estágio, aprendi conceitos de computação, Linux, 
        infraestrutura, redes e habilidades interpessoais. 
        Essa experiência foi essencial para meu crescimento profissional e pessoal.
      `,
  },
  {
    id: 2,
    title: 'Estágio | Desenvolvimento',
    status: 'Em andamento',
    duration: '1 ano',
    entity: 'Guardian',
    text: `
        Atualmente, estou envolvido em todas as etapas do desenvolvimento de software, 
        desde o levantamento de requisitos até o deploy para produção. 
        Trabalho no back-end e front-end, utilizando C# e React.js, e bancos de dados SQL.
      `,
  },
]
