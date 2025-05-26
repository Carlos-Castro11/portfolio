import { Helmet } from 'react-helmet-async'
import { Link, useRouteError } from 'react-router-dom'

export function Error() {
  const error = useRouteError() as Error

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <Helmet title="Error" />
      <h1 className="text-4xl font-bold">Oops, something happened...</h1>
      <p className="text-accent-foreground">
        An error occurred in the application, below you can find more details:
      </p>
      <pre>{error?.message || JSON.stringify(error)}</pre>
      <p className="text-accent-foreground">
        Back to{' '}
        <Link className="text-sky-500 dark:text-sky-400" to={'/'}>
          Dashboard
        </Link>
      </p>
    </div>
  )
}
