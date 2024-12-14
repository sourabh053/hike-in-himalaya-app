'use client'

import { useState } from 'react'
import MainLayout from './MainLayout'
import { Filter } from 'lucide-react'

interface Category {
  id: string
  name: string
  count: number
}

const categories: Category[] = [
  { id: 'trekking', name: 'Trekking', count: 12 },
  { id: 'climbing', name: 'Climbing', count: 8 },
  { id: 'culture', name: 'Culture', count: 6 },
  { id: 'photography', name: 'Photography', count: 4 },
  { id: 'gear', name: 'Gear Reviews', count: 5 },
]

export default function BlogLayout({
  children
}: {
  children: React.ReactNode
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <MainLayout showContactBar={false}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Mobile filter button */}
          <div className="lg:hidden mb-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="flex items-center text-gray-600 hover:text-gray-900"
            >
              <Filter size={20} className="mr-2" />
              Filter Categories
            </button>
          </div>

          {/* Sidebar */}
          <aside className={`
            lg:col-span-3
            ${isSidebarOpen ? 'block' : 'hidden'}
            lg:block
          `}>
            <div className="sticky top-20">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Categories</h2>
              <ul className="space-y-3">
                {categories.map((category) => (
                  <li key={category.id}>
                    <button className="flex items-center justify-between w-full text-left hover:text-green-600">
                      <span>{category.name}</span>
                      <span className="text-gray-500 text-sm">({category.count})</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Main content */}
          <main className="lg:col-span-9">
            {children}
          </main>
        </div>
      </div>
    </MainLayout>
  )
} 