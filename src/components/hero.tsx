import { PhoneCall } from 'lucide-react'

import { Avatar } from './avatar'
import { Button } from './ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card'
import { Separator } from './ui/separator'

export function Hero() {
  return (
    <Card className="flex flex-col items-center text-center">
      <CardHeader>
        <Avatar />
        <CardTitle>Carlos Castro</CardTitle>
        <CardDescription className="flex justify-center">
          Desenvolvedor web
        </CardDescription>
      </CardHeader>
      <Separator className="mb-4" />
      <CardContent>
        <ul>
          <li>Web Developer</li>
          <li>Web Developer</li>
          <li>Web Developer</li>
          <li>Web Developer</li>
        </ul>
      </CardContent>
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
