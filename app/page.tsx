'use client'
import { ThemeToggle } from '@/theme/ThemeToggle'
import { Inter } from 'next/font/google'
import { Switch } from '@headlessui/react'
import { useState } from 'react'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [enabled, setEnabled] = useState(false)
  return (
    <div className="text-3xl font-bold text-black dark:text-green-600">
      Hello world
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? 'bg-blue-600' : 'bg-gray-200'
          } relative inline-flex h-6 w-11 items-center rounded-full`}
      >
        <span className="sr-only">Enable notifications</span>
        <span
          className={`${enabled ? 'translate-x-6' : 'translate-x-1'
            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        />
      </Switch>
      {/* <ThemeToggle /> */}
    </div>
  )
}
