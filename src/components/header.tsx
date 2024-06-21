import { ThemeToggle } from './theme/theme-toggle'

export function Header() {
  return (
    <header className="flex gap-2">
      <h1>Header</h1>
      <ThemeToggle />
    </header>
  )
}
