import { TabsList } from '@/presentation/components/Tabs'
import { Dashboard } from './Dashboard'
import { AdvancedFilter } from './AdvancedFilter'

export default function Clients() {
  const tabItems = [
    {
      title: 'Dashboard',
      content: <Dashboard />,
    },
    {
      title: 'Advanced filter',
      content: <AdvancedFilter />,
    },
  ]

  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Clients</h1>

      <TabsList items={tabItems} />
    </>
  )
}
