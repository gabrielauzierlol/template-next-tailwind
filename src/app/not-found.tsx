import { NotFoundImage } from '@/presentation/assets/NotFoundImage'

export default function NotFound() {
  return (
    <>
      <div className="flex h-full flex-col items-center justify-center gap-24">
        <div className="flex flex-col items-center gap-1">
          <h2 className="flex items-center gap-1 text-2xl">
            <span className="font-semibold text-violet-700">This page</span>
            <span className="font-semibold text-violet-500">does not</span>
            <span className="font-semibold text-violet-700">exist</span>
          </h2>
          <span className="text-zinc-600">
            The page you&apos;ve request was not found.
          </span>
        </div>

        <NotFoundImage className="mt-12 h-96 w-96" />
      </div>
    </>
  )
}
