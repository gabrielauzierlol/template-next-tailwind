import { InDevelopmentImage } from '@/presentation/assets/InDevelopmentImage'
import { Code, Code2 } from 'lucide-react'

export function InDevelopment() {
  return (
    <>
      <div className="flex h-full flex-col items-center justify-center gap-24">
        <div className="flex flex-col items-center gap-1">
          <h2 className="flex items-center gap-1 text-2xl">
            <Code className="h-10 w-10 text-violet-700" />
            <span className="font-semibold text-violet-700">This page</span>
            <span className="font-semibold text-violet-500">is</span>
            <span className="font-semibold text-violet-700">
              under development
            </span>
            <Code2 className="h-10 w-10 text-violet-700" />
          </h2>
          <span className="text-zinc-600">
            We are working on the next features to provide you the best
            experience!
          </span>
        </div>

        <InDevelopmentImage className="h-96 w-96" />
      </div>
    </>
  )
}
