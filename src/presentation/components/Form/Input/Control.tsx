import { ComponentProps } from 'react'

type ControlProps = ComponentProps<'input'>

export function Control(props: ControlProps) {
  return (
    <input
      className="w-full border-0 bg-transparent text-zinc-900 placeholder-zinc-600 focus:outline-none"
      {...props}
    />
  )
}
