import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { Home } from './pages/app/Home'
import { Error } from './pages/base/error'
import { NotFound } from './pages/base/not-found'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [{ path: '/', element: <Home /> }],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
