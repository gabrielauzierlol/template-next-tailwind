'use client'

import { SettingsTabs } from '@/presentation/components/SettingsTabs'
import { MyDetails } from './MyDetails'

import * as ScrollArea from '@radix-ui/react-scroll-area'

export default function Settings() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

      <SettingsTabs />

      <ScrollArea.Root className="mt-6 h-[80vh] w-full scroll-mr-2 overflow-hidden">
        <ScrollArea.Viewport className="h-full w-full">
          <MyDetails />
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar orientation="vertical">
          <ScrollArea.Thumb />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </>
  )
}
