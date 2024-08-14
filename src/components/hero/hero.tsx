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

import { LINKS } from '@/constants'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card'
import { Separator } from '../ui/separator'
import { Avatar } from './avatar'
import { HeroItem } from './hero-item'
import { HeroLink } from './hero-link'

export function Hero() {
  const [text] = useTypewriter({
    words: ['TypeScript', 'React', 'Node', '.NET'],
    loop: true,
    delaySpeed: 2000,
  })

  return (
    <Card className="flex flex-col items-center text-center h-[675px]">
      <CardHeader>
        <Avatar />
        <CardTitle>Carlos Castro</CardTitle>
        <CardDescription className="flex flex-col justify-center">
          Desenvolvedor
          <div>
            {text}
            <Cursor />
          </div>
        </CardDescription>
      </CardHeader>
      <Separator />
      <CardContent className="mt-6 mb-4">
        <ul className="space-y-7">
          <li>
            <HeroItem
              fieldName="Email"
              fieldValue="carloshenriquemg2020@gmail.com"
              icon={<Mail />}
            />
          </li>
          <li>
            <HeroItem
              icon={<Phone />}
              fieldName="Telefone"
              fieldValue="(38) 9 9128-5937"
            />
          </li>
          <li>
            <HeroItem
              icon={<Calendar />}
              fieldName="Data de nascimento"
              fieldValue="24/04/2002"
            />
          </li>
          <li>
            <HeroItem
              icon={<MapPin />}
              fieldName="Localização"
              fieldValue="Montes Claros, Minas Gerais - Brasil"
            />
          </li>
        </ul>
      </CardContent>
      <Separator />
      <div className="flex w-full h-full items-center justify-center gap-4">
        <HeroLink icon={<MessageCircleCodeIcon />} link={LINKS.WHATSAPP} />
        <HeroLink icon={<GithubIcon />} link={LINKS.GITHUB} />
        <HeroLink icon={<LinkedinIcon />} link={LINKS.LINKEDIN} />
      </div>
    </Card>
  )
}
