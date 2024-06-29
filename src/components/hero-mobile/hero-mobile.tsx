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
import { HeroLink } from '../hero/hero-link'
import { Card, CardDescription } from '../ui/card'
import { Separator } from '../ui/separator'

export function HeroMobile() {
  const [text] = useTypewriter({
    words: ['TypeScript', 'React', 'Node', 'C#'],
    loop: true,
    delaySpeed: 2000,
  })

  return (
    <Card className="mt-2">
      <div className="flex justify-center">
        <div className="flex gap-1 sm:gap-6 md:gap-10">
          <div className="text-center flex flex-col items-center">
            <img className="max-w-[150px] rounded-md" src={perfil} alt="" />
            <CardDescription className="flex flex-col justify-center">
              Desenvolvedor
              <div>
                {text}
                <Cursor />
              </div>
            </CardDescription>
          </div>
          <div className="flex-1 space-y-2 flex flex-col my-2 md:flex-none md:grid md:grid-cols-2 md:my-auto">
            <HeroItem
              icon={<Phone />}
              fieldName="Telefone"
              fieldValue="(38) 9 9128-5937"
            />
            <HeroItem
              fieldName="Email"
              fieldValue="carloshenriquemg2020@gmail.com"
              icon={<Mail />}
            />
            <HeroItem
              icon={<Calendar />}
              fieldName="Data de nascimento"
              fieldValue="24/04/2002"
            />
            <HeroItem
              icon={<MapPin />}
              fieldName="Localização"
              fieldValue="Minas Gerais - BR"
            />
          </div>
        </div>
      </div>
      <Separator className="" />
      <div className="flex justify-center">
        <HeroLink icon={<MessageCircleCodeIcon />} />
        <HeroLink icon={<GithubIcon />} />
        <HeroLink icon={<LinkedinIcon />} />
      </div>
    </Card>
  )
}
