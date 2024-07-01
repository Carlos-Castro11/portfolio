import { Outlet } from 'react-router-dom'

import { Header } from '@/components/header'
import { Hero } from '@/components/hero/hero'
import { HeroMobile } from '@/components/hero-mobile/hero-mobile'
import useMedia from '@/hooks/useMedia'

export function AppLayout() {
  const isDesktopLayout = useMedia('(min-width: 1024px)')
  return (
    <>
      {isDesktopLayout ? (
        <div className="container lg:flex lg:gap-4 antialiased lg:my-5">
          <div>
            <Hero />
          </div>
          <div className="flex-1">
            <Header />
            <Outlet />
          </div>
        </div>
      ) : (
        <div className="antialiased m-2">
          <Header />
          <HeroMobile />
          <Outlet />
        </div>
      )}
    </>
  )
}
