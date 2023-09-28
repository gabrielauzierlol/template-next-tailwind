'use client'

import { TabsList } from '@/presentation/components/Tabs'
import { MyDetails } from './MyDetails'

export default function Settings() {
  const tabsData = [
    {
      title: 'My details',
      content: <MyDetails />,
    },
    {
      title: 'Profile',
      content: <h1>Hello, people!</h1>,
    },
    {
      title: 'Password',
      content: <h1>Change your password here</h1>,
    },
  ]

  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

      <TabsList items={tabsData} />
    </>
  )
}
