import './global.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'

import { ThemeProvider } from './components/theme/theme-provider'
import { router } from './routes'

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="carlos-castro-theme" defaultTheme="dark">
        <Helmet titleTemplate="%s | Carlos Castro" />
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  )
}
