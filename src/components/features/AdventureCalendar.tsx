'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Calendar, MapPin, Users } from 'lucide-react'

interface Adventure {
  id: number
  title: string
  month: string
  image: string
  location: string
  groupSize: string
  startDate: string
  link: string
}

const adventures: Adventure[] = [
  {
    id: 1,
    title: 'Everest Base Camp Trek',
    month: 'March',
    image: 'https://picsum.photos/id/1018/800/600',
    location: 'Khumbu Region',
    groupSize: '8-12 people',
    startDate: 'March 15, 2024',
    link: '/activities/everest-base-camp'
  },
  {
    id: 2,
    title: 'Annapurna Circuit',
    month: 'April',
    image: 'https://picsum.photos/id/1015/800/600',
    location: 'Annapurna Region',
    groupSize: '6-10 people',
    startDate: 'April 5, 2024',
    link: '/activities/annapurna-circuit'
  },
  {
    id: 3,
    title: 'Langtang Valley Trek',
    month: 'May',
    image: 'https://picsum.photos/id/1036/800/600',
    location: 'Langtang Region',
    groupSize: '4-8 people',
    startDate: 'May 10, 2024',
    link: '/activities/langtang-valley'
  },
  {
    id: 4,
    title: 'Upper Mustang Trek',
    month: 'June',
    image: 'https://picsum.photos/id/1019/800/600',
    location: 'Mustang Region',
    groupSize: '4-8 people',
    startDate: 'June 1, 2024',
    link: '/activities/upper-mustang'
  },
  {
    id: 5,
    title: 'Island Peak Climbing',
    month: 'July',
    image: 'https://picsum.photos/id/1016/800/600',
    location: 'Solukhumbu Region',
    groupSize: '4-6 people',
    startDate: 'July 15, 2024',
    link: '/activities/island-peak'
  },
  {
    id: 6,
    title: 'Manaslu Circuit Trek',
    month: 'August',
    image: 'https://picsum.photos/id/1039/800/600',
    location: 'Manaslu Region',
    groupSize: '6-10 people',
    startDate: 'August 1, 2024',
    link: '/activities/manaslu-circuit'
  }
]

export default function AdventureCalendar() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Upcoming Adventures
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Plan your next journey with our scheduled departures
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {adventures.map((adventure) => (
            <Link
              key={adventure.id}
              href={adventure.link}
              className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={adventure.image}
                  alt={adventure.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-white text-xl font-semibold mb-1">
                    {adventure.title}
                  </div>
                  <div className="text-white/90 text-sm">
                    {adventure.month}
                  </div>
                </div>
              </div>
              
              <div className="p-4 space-y-3">
                <div className="flex items-center text-gray-600">
                  <Calendar size={18} className="mr-2" />
                  <span>{adventure.startDate}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin size={18} className="mr-2" />
                  <span>{adventure.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users size={18} className="mr-2" />
                  <span>{adventure.groupSize}</span>
                </div>
              </div>

              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/90 text-gray-900">
                  {adventure.month}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
} 