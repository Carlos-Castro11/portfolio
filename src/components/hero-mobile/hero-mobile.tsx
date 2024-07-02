import {
  Calendar,
  GithubIcon,
  LinkedinIcon,
  Mail,
  MapPin,
  MessageCircleCodeIcon,
  Phone,
} from 'lucide-react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

import perfil from '../../assets/images/perfil.png'
import { HeroItem } from '../hero/hero-item'
import { Card, CardDescription } from '../ui/card'
import { Separator } from '../ui/separator'
import { HeroLinkMobile } from './hero-link-mobile'

export function HeroMobile() {
  const [text] = useTypewriter({
    words: ['TypeScript', 'React', 'Node', 'C#'],
    loop: true,
    delaySpeed: 2000,
  })

  return (
    <Card className="my-2">
      <div className="flex justify-center p-2">
        <div className="flex-1 grid text-center">
          <img
            className="sm:max-w-[160px] max-w-[135px] justify-self-center"
            src={perfil}
            alt=""
          />
          <CardDescription className="">
            Desenvolvedor
            <div>
              {text}
              <Cursor />
            </div>
          </CardDescription>
        </div>
        <div className="flex flex-col flex-1 gap-3 place-content-center">
          <HeroLinkMobile icon={<LinkedinIcon />} text="Linkedin" />
          <HeroLinkMobile icon={<GithubIcon />} text="Github" />
          <HeroLinkMobile icon={<MessageCircleCodeIcon />} text="Whatsapp" />
        </div>
      </div>
      <Separator />
      <div className="flex items-center justify-center py-2">
        <div className="flex gap-3">
          <div className="space-y-2">
            <HeroItem
              icon={<Phone size={21} />}
              fieldValue="(38) 9 9128-5937"
              fieldName="Telefone"
            />
            <HeroItem
              icon={<MapPin size={21} />}
              fieldValue="Minas Gerais - Brasil"
              fieldName="Localização"
            />
          </div>
          <div className="space-y-2 justify-self-start">
            <HeroItem
              icon={<Mail size={21} />}
              fieldValue="carloshenriquemg2020@gmail.com"
              fieldName="E-mail"
            />
            <HeroItem
              icon={<Calendar size={21} />}
              fieldValue="24/04/2002"
              fieldName="Data de nascimento"
            />
          </div>
        </div>
      </div>
    </Card>
  )
}
