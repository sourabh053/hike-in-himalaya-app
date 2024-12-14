'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Clock, MapPin, Users, ArrowRight } from 'lucide-react'

interface Activity {
  id: number
  title: string
  description: string
  image: string
  duration: string
  location: string
  groupSize: string
  price: number
  slug: string
}

const activities: Activity[] = [
  {
    id: 1,
    title: 'Everest Base Camp Trek',
    description: 'Experience the majesty of the world\'s highest peak on this classic trek to Everest Base Camp.',
    image: 'https://picsum.photos/id/1036/800/600',
    duration: '14 Days',
    location: 'Khumbu Region',
    groupSize: '2-12 People',
    price: 1499,
    slug: 'everest-base-camp'
  },
  {
    id: 2,
    title: 'Annapurna Circuit',
    description: 'Trek through diverse landscapes and traditional villages on this comprehensive circuit.',
    image: 'https://picsum.photos/id/1018/800/600',
    duration: '21 Days',
    location: 'Annapurna Region',
    groupSize: '2-10 People',
    price: 1899,
    slug: 'annapurna-circuit'
  },
  {
    id: 3,
    title: 'Manali to Leh Cycling',
    description: 'Challenge yourself with this high-altitude cycling adventure through breathtaking landscapes.',
    image: 'https://picsum.photos/id/1015/800/600',
    duration: '12 Days',
    location: 'Himachal & Ladakh',
    groupSize: '4-8 People',
    price: 2199,
    slug: 'manali-leh-cycling'
  }
]

const ActivityCards = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Popular Adventures</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {activity.title}
                </h3>
                <p className="text-gray-600 mb-4">{activity.description}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-500">
                    <Clock size={18} className="mr-2" />
                    <span>{activity.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <MapPin size={18} className="mr-2" />
                    <span>{activity.location}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Users size={18} className="mr-2" />
                    <span>{activity.groupSize}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-600">
                    ${activity.price}
                  </span>
                  <Link
                    href={`/activities/${activity.slug}`}
                    className="flex items-center text-green-600 hover:text-green-700 font-medium"
                  >
                    View Details
                    <ArrowRight size={18} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ActivityCards 