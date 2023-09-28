'use client'

import { SettingsTabs } from '@/presentation/components/Tabs'

export default function Settings() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

      <SettingsTabs />
    </>
  )
}
