import { Helmet } from 'react-helmet-async'

import { ThemeToggle } from '@/components/theme/theme-toggle'

export function Home() {
  return (
    <>
      <Helmet title="Home" />
      <h1>Home</h1>
      <div>
        <ThemeToggle />
      </div>
    </>
  )
}
