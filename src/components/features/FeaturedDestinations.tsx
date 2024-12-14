'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const destinations = [
  {
    id: 1,
    name: 'Mount Everest',
    region: 'Khumbu',
    image: 'https://picsum.photos/id/1018/1200/800',
    description: 'Home to the world\'s highest peak and rich Sherpa culture',
    link: '/destinations/everest'
  },
  {
    id: 2,
    name: 'Annapurna Sanctuary',
    region: 'Annapurna',
    image: 'https://picsum.photos/id/1036/1200/800',
    description: 'A natural amphitheater surrounded by majestic peaks',
    link: '/destinations/annapurna'
  }
]

const FeaturedDestinations = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Featured Destinations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {destinations.map((destination) => (
            <Link
              key={destination.id}
              href={destination.link}
              className="group relative overflow-hidden rounded-lg aspect-[4/3]"
            >
              <Image
                src={destination.image}
                alt={destination.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/0 flex flex-col justify-end p-6">
                <h3 className="text-white text-2xl font-bold mb-2">
                  {destination.name}
                </h3>
                <p className="text-white/90 mb-2">{destination.region}</p>
                <p className="text-white/80 mb-4">{destination.description}</p>
                <div className="flex items-center text-white">
                  <span className="mr-2">Explore</span>
                  <ArrowRight size={18} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedDestinations 