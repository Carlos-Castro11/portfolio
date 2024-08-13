import { Outlet, useLocation } from 'react-router-dom'

import Graphic from '@/components/graphic'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero/hero'
import { HeroMobile } from '@/components/hero-mobile/hero-mobile'
import useMedia from '@/hooks/useMedia'

import { TitlePage } from '../../components/title-page'

interface AppPagesProps {
  route: string
  title: string
}

const AppPages: AppPagesProps[] = [
  {
    route: '/',
    title: 'Portfólio',
  },
  {
    route: '/about',
    title: 'Sobre',
  },
  {
    route: '/resume',
    title: 'Currículo',
  },
  {
    route: '/contact',
    title: 'Contato',
  },
]

export function AppLayout() {
  const { pathname } = useLocation()
  const page = AppPages.find((page) => page.route === pathname)
  const isDesktopLayout = useMedia('(min-width: 1024px)')

  return (
    <>
      {isDesktopLayout ? (
        <>
          <div className="container lg:flex lg:gap-4 antialiased lg:my-5">
            <div className="grid gap-5">
              <Hero />
              <div className="pl-3">
                <Graphic />
              </div>
            </div>
            <div className="flex-1">
              <Header />
              <div className="container">
                <TitlePage title={page!.title} />
                <Outlet />
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="antialiased m-3 sm:m-4">
          <Header />
          <HeroMobile />
          <TitlePage title={page!.title} />
          <Outlet />
        </div>
      )}
    </>
  )
}
