import { Outlet } from 'react-router-dom'

import { Header } from '@/components/header'
import { Hero } from '@/components/hero/hero'

export function AppLayout() {
  return (
    <div className="container my-5 flex gap-4">
      <div>
        <Hero />
      </div>
      <div>
        <Header />
        <Outlet />
      </div>
    </div>
  )
}
