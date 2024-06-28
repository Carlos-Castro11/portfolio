interface TitlePageProps {
  title: string
}

export function TitlePage({ title }: TitlePageProps) {
  return (
    <h1
      className={`after:content[''] relative text-2xl lg:text-3xl font-bold uppercase after:absolute after:-bottom-1 after:left-0 after:h-[4px] after:w-1/6 after:rounded-md after:bg-muted`}
    >
      {title}
    </h1>
  )
}
