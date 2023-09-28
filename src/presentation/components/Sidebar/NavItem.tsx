'use client'

import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ElementType } from 'react'

export interface NavItemProps {
  title: string
  icon: ElementType
  href: string
}

export function NavItem({ title, icon: Icon, href }: NavItemProps) {
  const pathname = usePathname()
  let isActive = false

  if (href === pathname) {
    isActive = true
  }

  return !isActive ? (
    <Link
      href={href}
      className="group flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-violet-50"
    >
      <Icon className="h-5 w-5 text-zinc-500 group-hover:text-violet-400" />
      <span className="font-medium text-zinc-700 group-hover:text-violet-500 ">
        {title}
      </span>
      <ChevronRight className="ml-auto h-5 w-5 text-zinc-400 group-hover:text-violet-400" />
    </Link>
  ) : (
    <Link
      href={href}
      className="flex items-center gap-3 rounded-lg bg-violet-700 px-3 py-2 text-white"
    >
      <Icon className="h-5 w-5" />
      <span className="font-medium">{title}</span>
      <ChevronRight className="ml-auto h-5 w-5" />
    </Link>
  )
}
