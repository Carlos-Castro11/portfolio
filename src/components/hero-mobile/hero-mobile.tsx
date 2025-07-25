import { GithubIcon, LinkedinIcon, MessageCircleCodeIcon } from 'lucide-react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

import { LINKS } from '@/constants'

import perfil from '../../assets/images/perfil.png'
import { Card, CardDescription } from '../ui/card'
import { HeroLinkMobile } from './hero-link-mobile'

export function HeroMobile() {
  const [text] = useTypewriter({
    words: ['TypeScript', 'React', 'Node', '.NET'],
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
            Developer
            <div>
              {text}
              <Cursor />
            </div>
          </CardDescription>
        </div>
        <div className="flex flex-col flex-1 gap-3 place-content-center">
          <HeroLinkMobile
            icon={<LinkedinIcon />}
            text="Linkedin"
            link={LINKS.LINKEDIN}
          />
          <HeroLinkMobile
            icon={<GithubIcon />}
            text="Github"
            link={LINKS.GITHUB}
          />
          <HeroLinkMobile
            icon={<MessageCircleCodeIcon />}
            text="Whatsapp"
            link={LINKS.WHATSAPP}
          />
        </div>
      </div>
    </Card>
  )
}
