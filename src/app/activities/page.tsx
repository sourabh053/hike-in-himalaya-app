'use client'

import { useState, Suspense } from 'react'
import MainLayout from '@/components/layout/MainLayout'
import { Sliders, MapPin, Clock, Users } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'

import buranGhati from '@/assets/activities/BuranGhati/buran-ghati3.jpg'
import chandranahan from '@/assets/activities/Chandernahan/chandernahan.jpg'
import pinParvati from '@/assets/activities/PinParvati/pin-parvati6.jpg'
import rupinPass from '@/assets/activities/RupinPass/rupin-pass3.jpg'

interface Activity {
  id: number
  title: string
  location: string
  duration: string
  groupSize: string
  difficulty: 'Easy' | 'Moderate' | 'Challenging'
  price: number
  image: string | StaticImageData
  slug: string
  popularMonths: string[]
}

const ALL_MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const activities: Activity[] = [
  {
    id: 1,
    title: 'Buran Ghati Trek',
    location: 'Himachal',
    duration: '8 Days',
    groupSize: '2-15 People',
    difficulty: 'Challenging',
    price: 1499,
    image: buranGhati,
    slug: 'buran-ghati-trek',
    popularMonths: ["May", "June", "September", "October"],
  },
  {
    id: 2,
    title: 'Chandranahan Lake Trek',
    location: 'Himachal',
    duration: '6 Days',
    groupSize: '2-15 People',
    difficulty: 'Moderate',
    price: 1899,
    image: chandranahan,
    slug: 'chandernahan-lake-trek',
    popularMonths: ["May", "June", "July", "September", "October"],
  },
  {
    id: 3,
    title: 'Pin Parvati Pass',
    location: 'Himachal',
    duration: '12 Days',
    groupSize: '4-8 People',
    difficulty: 'Challenging',
    price: 2199,
    image: pinParvati,
    slug: 'pin-parvati-pass',
    popularMonths: ["July", "August", "September"],
  },
  {
    id: 4,
    title: 'Rupin Pass Trek',
    location: 'Himachal',
    duration: '7 Days',
    groupSize: '4-10 People',
    difficulty: 'Moderate',
    price: 2099,
    image: rupinPass,
    slug: 'rupin-pass-trek',
    popularMonths: ["May", "June", "September", "October"],
  },
  // Add more activities...
]

function ActivitiesContent() {
  const searchParams = useSearchParams();
  const month = searchParams.get('month');
  const router = useRouter()
  const [filters, setFilters] = useState({
    difficulty: '',
    duration: '',
    priceRange: '',
    month: `${month ? month : ''}`
  })
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        {/* Sidebar */}
        <aside className="lg:col-span-3">
          <div className="sticky top-20 bg-white p-4 rounded-lg shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Sliders className="mr-2" size={20} />
                <h2 className="text-lg font-semibold">Filters</h2>
              </div>
              <button
                onClick={() => setFilters({
                  difficulty: '',
                  duration: '',
                  priceRange: '',
                  month: ''
                })}
                className="text-sm px-3 py-1 text-white bg-red-500 hover:bg-red-600 rounded-md transition-colors"
              >
                Reset
              </button>
            </div>
            
            {/* Filter sections */}
            <div className="space-y-6">
              {/* Difficulty */}
              <div>
                <h3 className="font-medium mb-2">Difficulty</h3>
                <div className="space-y-2">
                  {['All', 'Easy', 'Moderate', 'Challenging'].map((level) => (
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
                  <option value="0-1000">₹0 - ₹1,000</option>
                  <option value="1000-2000">₹1,000 - ₹2,000</option>
                  <option value="2000+">₹2,000+</option>
                </select>
              </div>

              <div>
                <h3 className="font-medium mb-2">Best Time to Visit</h3>
                <select
                  value={filters.month}
                  onChange={(e) => setFilters({...filters, month: e.target.value})}
                  className="w-full p-2 border rounded"
                >
                  <option value="">Any month</option>
                  {ALL_MONTHS.map(month => (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="lg:col-span-9 mt-8 lg:mt-0">
          {(() => {
            const filteredActivities = activities.filter(activity => {
              if (filters.difficulty && filters.difficulty !== 'All' && activity.difficulty !== filters.difficulty) return false;
              if (filters.month && !activity.popularMonths.includes(filters.month)) return false;
              if (filters.duration) {
                const [min, max] = filters.duration.split('-').map(Number);
                // if(isNaN(min)) min = 15;
                const activityDays = parseInt(activity.duration);                  
                if (max) {
                  if (activityDays < min || activityDays > max) return false;
                } else {
                  if (activityDays < 15) return false;
                }
              }
              if (filters.priceRange) {
                const [min, max] = filters.priceRange.split('-').map(Number);
                if (max) {
                  if (activity.price < min || activity.price > max) return false;
                } else {
                  if (activity.price < min) return false;
                }
              }
              return true;
            });

            return filteredActivities.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredActivities.map((activity) => (
                  <div key={activity.id} className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"  
                  onClick={() => router.push(`/activities/${activity.slug}`)}>
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
                        ₹{activity.price}
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
            ) : (
              <div className="text-center py-10">
                <p className="text-gray-500 text-lg">No activities available for the selected filters.</p>
              </div>
            );
          })()}
        </main>
      </div>
    </div>
  )
}

export default function ActivitiesPage() {
  return (
    <Suspense fallback={
      <MainLayout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            Loading activities...
          </div>
        </div>
      </MainLayout>
    }>
      <ActivitiesContent />
    </Suspense>
  )
} 