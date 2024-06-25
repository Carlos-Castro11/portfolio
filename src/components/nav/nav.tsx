import { NavItem } from './navItem'

export function Nav() {
  return (
    <nav className="col-start-2 flex justify-self-center">
      <ul className="flex gap-6 rounded-md border p-4">
        <li>
          <NavItem text={'Sobre'} link="/" />
        </li>
        <li>
          <NavItem text={'Portfólio'} link="/portfolio" />
        </li>
        <li>
          <NavItem text={'Currículo'} link="/resume" />
        </li>
        <li>
          <NavItem text={'Contato'} link="/contact" />
        </li>
      </ul>
    </nav>
  )
}
