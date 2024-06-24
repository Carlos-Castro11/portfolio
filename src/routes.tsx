import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { About } from './pages/app/about'
import { Contact } from './pages/app/contact'
import { Portfolio } from './pages/app/portfolio'
import { Resume } from './pages/app/resume'
import { Error } from './pages/base/error'
import { NotFound } from './pages/base/not-found'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [{ path: '/', element: <About /> }],
  },
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [{ path: '/portfolio', element: <Portfolio /> }],
  },
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [{ path: '/resume', element: <Resume /> }],
  },
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [{ path: '/contact', element: <Contact /> }],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
