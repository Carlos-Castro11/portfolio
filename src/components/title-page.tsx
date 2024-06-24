interface TitlePageProps {
  title: string
}

export function TitlePage({ title }: TitlePageProps) {
  return <h1 className="text-3xl font-bold underline">{title}</h1>
}
