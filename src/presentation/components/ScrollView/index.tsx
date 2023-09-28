import * as ScrollArea from '@radix-ui/react-scroll-area'
import { ReactElement } from 'react'

interface ScrollViewProps {
  children: ReactElement
}

export function ScrollView({ children }: ScrollViewProps) {
  return (
    <ScrollArea.Root className="mt-6 h-[80vh] w-full scroll-mr-2 overflow-hidden">
      <ScrollArea.Viewport className="h-full w-full">
        {children}
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar orientation="vertical">
        <ScrollArea.Thumb />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  )
}
