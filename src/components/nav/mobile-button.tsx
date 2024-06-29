import { ComponentProps } from 'react'

interface ButtonMobileProps extends ComponentProps<'button'> {
  isMenuMobileActive: boolean
}

export function MobileButton({
  isMenuMobileActive,
  ...props
}: ButtonMobileProps) {
  return (
    <button
      {...props}
      className={`
      border p-6 w-[50px] justify-self-center rounded-full relative shadow-inner 
      before:content[''] before:absolute before:bg-primary before:left-1/2 before:top-1/2
      before:translate-x-[-50%] before:translate-y-[-50%] before:h-0.5 before:w-6
      before:shadow-[0_8px_0_0,0_-8px_0_0]
      before:transition before:duration-200 before:ease-out
        ${isMenuMobileActive && `before:rotate-90 before:w-[2px] before:h-[3px] before:rounded-full`}
    `}
    />
  )
}
