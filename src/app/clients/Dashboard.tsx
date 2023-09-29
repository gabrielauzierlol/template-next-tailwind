import { User, ArrowUp } from 'lucide-react'

export function Dashboard() {
  return (
    <div className="flex h-full w-full flex-1 flex-col p-2">
      <div className="shadow-3xl grid w-full grid-cols-3 rounded-xl bg-white px-24 py-8 shadow-violet-100">
        <div className="flex items-center gap-6">
          <div className="rounded-full bg-green-100 p-5">
            <User className="h-12 w-12 text-green-600" />
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-normal text-zinc-500">
              Total clients active
            </span>
            <span className="text-4xl font-semibold text-zinc-800">1.932</span>
            <div className="flex items-center text-sm text-green-600">
              <ArrowUp className="h-4 w-4" />
              <span>13%&nbsp;</span>
              <span className="text-sm text-zinc-700">this month</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="rounded-full bg-green-100 p-5">
            <User className="h-12 w-12 text-green-600" />
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-normal text-zinc-500">
              Total clients active
            </span>
            <span className="text-4xl font-semibold text-zinc-800">1.932</span>
            <div className="flex items-center text-sm text-green-600">
              <ArrowUp className="h-4 w-4" />
              <span>13%&nbsp;</span>
              <span className="text-sm text-zinc-700">this month</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="rounded-full bg-green-100 p-5">
            <User className="h-12 w-12 text-green-600" />
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-normal text-zinc-500">
              Total clients active
            </span>
            <span className="text-4xl font-semibold text-zinc-800">1.932</span>
            <div className="flex items-center text-sm text-green-600">
              <ArrowUp className="h-4 w-4" />
              <span>13%&nbsp;</span>
              <span className="text-sm text-zinc-700">this month</span>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  )
}
