import { Link } from 'react-router-dom'

interface NavItemProps {
  link: string
  text: string
}

export function NavItem({ link, text }: NavItemProps) {
  return (
    <Link
      className={`after:content[''] relative font-semibold after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full`}
      to={link}
    >
      {text}
    </Link>
  )
}
