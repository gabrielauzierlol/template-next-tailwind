'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { TabItem } from './TabItem'
import { ReactElement, useState } from 'react'
import { ScrollView } from '../ScrollView'

const tabId = (input: string) => input.trim().toLowerCase().replace(/\s+/g, '-')

export interface TabsListProps {
  items: Array<{
    title: string
    content: ReactElement
  }>
}

export function TabsList({ items }: TabsListProps) {
  const [currentTab, setCurrentTab] = useState(tabId(items[0].title))

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200">
        {items.map((item) => (
          <TabItem
            key={tabId(item.title)}
            value={tabId(item.title)}
            title={item.title}
            isSelected={currentTab === tabId(item.title)}
          />
        ))}
      </Tabs.List>
      {items.map((item) => (
        <Tabs.Content key={tabId(item.title)} value={tabId(item.title)}>
          <ScrollView>{item.content}</ScrollView>
        </Tabs.Content>
      ))}
    </Tabs.Root>
  )
}
