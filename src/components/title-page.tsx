interface TitlePageProps {
  title: string
}

export function TitlePage({ title }: TitlePageProps) {
  return (
    <h1
      className={`after:content[''] relative text-xl my-5
        sm:text-xl
        md:text-2xl
        font-bold uppercase after:absolute after:-bottom-1 after:left-0 
        after:h-[4px] after:w-[4%] after:rounded-md after:bg-muted`}
    >
      {title}
    </h1>
  )
}
