import { FileInput } from '@/presentation/components/Form/FileInput'
import { Input } from '@/presentation/components/Form/Input'
import { Mail } from 'lucide-react'
import { Select } from '@/presentation/components/Form/Select'
import { Textarea } from '@/presentation/components/Form/Textarea'
import { Button } from '@/presentation/components/Button'

export function MyDetails() {
  return (
    <div className="h-full w-full">
      <div className="flex items-center justify-between  border-b border-zinc-200 pb-5">
        <div className="space-y-1">
          <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
          <span className="text-sm text-zinc-500">
            Update your photo and personal details here.
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" type="button">
            Cancel
          </Button>
          <Button type="submit" form="settings">
            Save
          </Button>
        </div>
      </div>

      <form
        id="settings"
        className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
      >
        {/* name */}
        <div className="grid grid-cols-form gap-3">
          <label
            htmlFor="firstName"
            className="text-sm font-medium text-zinc-700"
          >
            Name
          </label>
          <div className="grid grid-cols-2 gap-6">
            <Input.Root>
              <Input.Control id="firstName" defaultValue="Gabriel" />
            </Input.Root>

            <Input.Root>
              <Input.Control defaultValue="Auzier" />
            </Input.Root>
          </div>
          <div />
        </div>

        {/* email */}
        <div className="grid grid-cols-form gap-3 pt-5">
          <label htmlFor="email" className="text-sm font-medium text-zinc-700">
            Email address
          </label>
          <Input.Root>
            <Input.Prefix>
              <Mail className="h-5 w-5 text-zinc-600" />
            </Input.Prefix>
            <Input.Control
              id="email"
              type="email"
              defaultValue="gabrielvascoauzier@gmail.com"
            />
          </Input.Root>
        </div>

        {/* photo */}
        <div className="grid grid-cols-form gap-3 pt-5">
          <label htmlFor="email" className="text-sm font-medium text-zinc-700">
            Your photo
            <span className="mt-0.5 block text-sm font-normal text-zinc-500">
              This will be displayed on your profile.
            </span>
          </label>
          <FileInput.Root className="flex items-start gap-5">
            <FileInput.ImagePreview />
            <FileInput.Trigger />
            <FileInput.Control />
          </FileInput.Root>
          <div />
        </div>

        {/* role */}
        <div className="grid grid-cols-form gap-3 pt-5">
          <label htmlFor="role" className="text-sm font-medium text-zinc-700">
            Role
          </label>
          <Input.Root>
            <Input.Control id="role" defaultValue="Developer" />
          </Input.Root>
        </div>

        {/* country */}
        <div className="grid grid-cols-form gap-3 pt-5">
          <label
            htmlFor="country"
            className="text-sm font-medium text-zinc-700"
          >
            Country
          </label>
          <Select.Root placeholder="Select a country...">
            <Select.Item value="br" text="Brazil" />
            <Select.Item value="us" text="United States" />
          </Select.Root>
        </div>

        {/* timezone */}
        <div className="grid grid-cols-form gap-3 pt-5">
          <label
            htmlFor="timezone"
            className="text-sm font-medium text-zinc-700"
          >
            Timezone
          </label>
          <Select.Root placeholder="Select a timezone...">
            <Select.Item
              value="utc8"
              text="Pacific Standard Time (UTC-08:00)"
            />
            <Select.Item value="utc3" text="America São Paulo (UTC-03:00)" />
          </Select.Root>
        </div>

        {/* bio */}
        <div className="grid grid-cols-form gap-3 pt-5">
          <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
            Bio
            <span className="mt-0.5 block text-sm font-normal text-zinc-500">
              Write a short introduction
            </span>
          </label>
          <Textarea
            id="bio"
            defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategies and marketing."
          />
        </div>

        {/* portifolio */}
        <div className="grid grid-cols-form gap-3 pt-5">
          <label
            htmlFor="portifolio"
            className="text-sm font-medium text-zinc-700"
          >
            Portifolio projects
            <span className="mt-0.5 block text-sm font-normal text-zinc-500">
              Share a few snippets of your work.
            </span>
          </label>
          <FileInput.Root className="flex items-start gap-5">
            <FileInput.Trigger />
            <FileInput.Control multiple />
          </FileInput.Root>
        </div>

        <div className="flex items-center justify-end gap-2 pt-5">
          <button
            className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
            type="button"
          >
            Cancel
          </button>
          <button
            className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  )
}
