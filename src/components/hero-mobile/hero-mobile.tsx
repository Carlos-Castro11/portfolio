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
import { Card, CardContent, CardDescription, CardHeader } from '../ui/card'
import { Separator } from '../ui/separator'

export function HeroMobile() {
  const [text] = useTypewriter({
    words: ['TypeScript', 'React', 'Node', 'C#'],
    loop: true,
    delaySpeed: 2000,
  })

  return (
    <Card className="mt-2 overflow-hidden">
      <div className="flex">
        <CardHeader>
          <img className="max-w-[160px]" src={perfil} alt="" />
          <CardDescription className="flex flex-col justify-center text-center">
            Desenvolvedor
            <div>
              {text}
              <Cursor />
            </div>
          </CardDescription>
        </CardHeader>
        <Separator className="mr-1" orientation="vertical" />
        <CardContent className="flex items-center">
          <div className="space-y-2 mt-5">
            <HeroItem
              icon={<Mail size={22} />}
              fieldValue="carloshenriquemg2020@gmail.com"
              fieldName="E-mail"
            />
            <HeroItem
              icon={<Phone size={22} />}
              fieldValue="(38) 9 9128-5937"
              fieldName="Telefone"
            />
            <HeroItem
              icon={<MapPin size={22} />}
              fieldValue="Minas Gerais - Brasil"
              fieldName="Localização"
            />
            <HeroItem
              icon={<Calendar size={22} />}
              fieldValue="24/04/2002"
              fieldName="Data de nascimento"
            />
          </div>
        </CardContent>
      </div>
      <Separator />
      <div className="flex justify-center">
        <HeroLink icon={<MessageCircleCodeIcon />} />
        <HeroLink icon={<GithubIcon />} />
        <HeroLink icon={<LinkedinIcon />} />
      </div>
    </Card>
  )
}
