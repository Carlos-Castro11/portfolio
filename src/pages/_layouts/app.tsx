import { Outlet } from 'react-router-dom'

import { Header } from '@/components/header'
import { Hero } from '@/components/hero/hero'

export function AppLayout() {
  return (
    <div className="container flex gap-4 antialiased my-5 lg:bg-red-500">
      <div>
        <Hero />
      </div>
      <div className="flex-1">
        <Header />
        <Outlet />
      </div>
    </div>
  )
}
