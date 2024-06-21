import { Outlet } from 'react-router-dom'

import { Header } from '@/components/header'
import { Hero } from '@/components/hero'

export function AppLayout() {
  return (
    <div className="container my-5 grid grid-cols-12 gap-12">
      <div className="col-span-4">
        <Hero />
      </div>
      <div>
        <Header />
        <Outlet />
      </div>
    </div>
  )
}
