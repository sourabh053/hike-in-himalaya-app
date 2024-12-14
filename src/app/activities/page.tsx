'use client'

import { useState } from 'react'
import MainLayout from '@/components/layout/MainLayout'
import { Sliders, MapPin, Clock, Users } from 'lucide-react'
import Image from 'next/image'

interface Activity {
  id: number
  title: string
  location: string
  duration: string
  groupSize: string
  difficulty: 'Easy' | 'Moderate' | 'Challenging'
  price: number
  image: string
}

const activities: Activity[] = [
  {
    id: 1,
    title: 'Everest Base Camp Trek',
    location: 'Khumbu Region',
    duration: '14 Days',
    groupSize: '2-12 People',
    difficulty: 'Challenging',
    price: 1499,
    image: 'https://picsum.photos/id/1036/800/600'
  },
  // Add more activities...
]

export default function ActivitiesPage() {
  const [filters, setFilters] = useState({
    difficulty: '',
    duration: '',
    priceRange: ''
  })

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-3">
            <div className="sticky top-20 bg-white p-4 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <Sliders className="mr-2" size={20} />
                <h2 className="text-lg font-semibold">Filters</h2>
              </div>
              
              {/* Filter sections */}
              <div className="space-y-6">
                {/* Difficulty */}
                <div>
                  <h3 className="font-medium mb-2">Difficulty</h3>
                  <div className="space-y-2">
                    {['Easy', 'Moderate', 'Challenging'].map((level) => (
                      <label key={level} className="flex items-center">
                        <input
                          type="radio"
                          name="difficulty"
                          value={level}
                          checked={filters.difficulty === level}
                          onChange={(e) => setFilters({...filters, difficulty: e.target.value})}
                          className="mr-2"
                        />
                        {level}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Duration */}
                <div>
                  <h3 className="font-medium mb-2">Duration</h3>
                  <select
                    value={filters.duration}
                    onChange={(e) => setFilters({...filters, duration: e.target.value})}
                    className="w-full p-2 border rounded"
                  >
                    <option value="">Any duration</option>
                    <option value="1-7">1-7 days</option>
                    <option value="8-14">8-14 days</option>
                    <option value="15+">15+ days</option>
                  </select>
                </div>

                {/* Price Range */}
                <div>
                  <h3 className="font-medium mb-2">Price Range</h3>
                  <select
                    value={filters.priceRange}
                    onChange={(e) => setFilters({...filters, priceRange: e.target.value})}
                    className="w-full p-2 border rounded"
                  >
                    <option value="">Any price</option>
                    <option value="0-1000">$0 - $1,000</option>
                    <option value="1000-2000">$1,000 - $2,000</option>
                    <option value="2000+">$2,000+</option>
                  </select>
                </div>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <main className="lg:col-span-9 mt-8 lg:mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activities.map((activity) => (
                <div key={activity.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={activity.image}
                      alt={activity.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{activity.title}</h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2" />
                        {activity.location}
                      </div>
                      <div className="flex items-center">
                        <Clock size={16} className="mr-2" />
                        {activity.duration}
                      </div>
                      <div className="flex items-center">
                        <Users size={16} className="mr-2" />
                        {activity.groupSize}
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-2xl font-bold text-green-600">
                        ${activity.price}
                      </span>
                      <span className={`
                        px-3 py-1 rounded-full text-sm
                        ${activity.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                          activity.difficulty === 'Moderate' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'}
                      `}>
                        {activity.difficulty}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </MainLayout>
  )
} 