import { Calendar, Mail, MapPin, Phone, PhoneCall } from 'lucide-react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

import { Button } from '../ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card'
import { Separator } from '../ui/separator'
import { Avatar } from './avatar'
import { HeroItem } from './hero-item'

export function Hero() {
  const [text] = useTypewriter({
    words: ['TypeScript', 'React', 'Node', 'C#'],
    loop: true,
    delaySpeed: 2000,
  })

  return (
    <Card className="flex flex-col items-center text-center">
      <CardHeader>
        <Avatar />
        <CardTitle>Carlos Castro</CardTitle>
        <CardDescription className="flex flex-col justify-center">
          Desenvolvedor web
          <div>
            {text}
            <Cursor />
          </div>
        </CardDescription>
      </CardHeader>
      <Separator className="mb-4" />
      <CardContent>
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
      <Separator className="mb-4" />
      <CardFooter className="flex gap-4">
        <Button className="flex w-max gap-4">
          <PhoneCall />
        </Button>
        <Button className="flex w-max gap-4">
          <PhoneCall />
        </Button>
        <Button className="flex w-max gap-4">
          <PhoneCall />
        </Button>
      </CardFooter>
    </Card>
  )
}
