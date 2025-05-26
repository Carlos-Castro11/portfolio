import { NavItem } from './nav-item'

export function Nav() {
  return (
    <nav className="col-start-2 flex justify-self-center">
      <ul className="flex gap-4 lg:gap-6 rounded-md border p-4 text-sm lg:text-base">
        <li>
          <NavItem text={'Portfolio'} link="/" />
        </li>
        <li>
          <NavItem text={'About'} link="/about" />
        </li>
        <li>
          <NavItem text={'Resume'} link="/resume" />
        </li>
      </ul>
    </nav>
  )
}
