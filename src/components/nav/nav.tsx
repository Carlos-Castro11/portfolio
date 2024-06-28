import { NavItem } from './navItem'

export function Nav() {
  return (
    <nav className="col-start-2 flex justify-self-center">
      <ul className="flex gap-4 lg:gap-6 rounded-md border p-4 text-sm lg:text-base">
        <li>
          <NavItem text={'Portfólio'} link="/" />
        </li>
        <li>
          <NavItem text={'Sobre'} link="/about" />
        </li>
        <li>
          <NavItem text={'Currículo'} link="/resume" />
        </li>
        {/* <li>
          <NavItem text={'Contato'} link="/contact" />
        </li> */}
      </ul>
    </nav>
  )
}
