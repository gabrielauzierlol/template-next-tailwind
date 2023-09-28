'use client'

import { Logo } from './Logo'
import {
  Cog,
  Search,
  CheckSquare,
  Flag,
  Home,
  Users,
  MonitorCheck,
} from 'lucide-react'
import { NavItem } from './NavItem'
import { UsedSpaceWidget } from './UsedSpaceWidget'
import { Profile } from './Profile'
import { Input } from '../Form/Input'

export function Sidebar() {
  return (
    <aside className="flex max-h-screen flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />

      <Input.Root>
        <Input.Prefix>
          <Search className="h-5 w-5 text-zinc-500" />
        </Input.Prefix>
        <Input.Control placeholder="Search" />
      </Input.Root>

      <nav className="space-y-0.5">
        <NavItem title="Home" icon={Home} href="/" />
        <NavItem title="Clients" icon={Users} href="/clients" />
        <NavItem title="Automation" icon={MonitorCheck} href="/automation" />
        <NavItem title="Tasks" icon={CheckSquare} href="/tasks" />
      </nav>

      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-0.5">
          <NavItem title="Support" icon={Flag} href="/support" />
          <NavItem title="Settings" icon={Cog} href="/settings" />
        </nav>
      </div>

      <UsedSpaceWidget />

      <div className="h-px bg-zinc-200" />

      <Profile />
    </aside>
  )
}
