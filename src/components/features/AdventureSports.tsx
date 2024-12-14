'use client'

import Image from 'next/image'
import Link from 'next/link'
import { 
  Mountain, Waves, Flag, Map, Compass, Anchor, TreePine, Snowflake,
  Users, Star, Award, Clock
} from 'lucide-react'

interface Category {
  id: number
  name: string
  icon: React.ReactNode
  link: string
  image: string
}

interface Stat {
  id: number
  value: string
  label: string
  icon: React.ReactNode
}

const categories: Category[] = [
  {
    id: 1,
    name: 'Skiing Courses',
    icon: <Snowflake className="h-8 w-8" />,
    link: '/courses/skiing',
    image: 'https://picsum.photos/id/1036/400/400'
  },
  {
    id: 2,
    name: 'Kayaking Courses',
    icon: <Waves className="h-8 w-8" />,
    link: '/courses/kayaking',
    image: 'https://picsum.photos/id/1015/400/400'
  },
  {
    id: 3,
    name: '6000M+ Peaks',
    icon: <Flag className="h-8 w-8" />,
    link: '/peaks',
    image: 'https://picsum.photos/id/1018/400/400'
  },
  {
    id: 4,
    name: 'Nepal Treks',
    icon: <Mountain className="h-8 w-8" />,
    link: '/treks/nepal',
    image: 'https://picsum.photos/id/1019/400/400'
  },
  {
    id: 5,
    name: 'Offbeat Treks',
    icon: <Compass className="h-8 w-8" />,
    link: '/treks/offbeat',
    image: 'https://picsum.photos/id/1039/400/400'
  },
  {
    id: 6,
    name: 'Scuba Courses',
    icon: <Anchor className="h-8 w-8" />,
    link: '/courses/scuba',
    image: 'https://picsum.photos/id/1029/400/400'
  },
  {
    id: 7,
    name: 'Wild Life Treks',
    icon: <TreePine className="h-8 w-8" />,
    link: '/treks/wildlife',
    image: 'https://picsum.photos/id/1020/400/400'
  },
  {
    id: 8,
    name: 'Winter Treks',
    icon: <Map className="h-8 w-8" />,
    link: '/treks/winter',
    image: 'https://picsum.photos/id/1016/400/400'
  }
]

const stats: Stat[] = [
  {
    id: 1,
    value: '4.8/5',
    label: 'Customer Rating',
    icon: <Star className="h-6 w-6 text-yellow-400" />
  },
  {
    id: 2,
    value: '8-12',
    label: 'Perfect Group Size',
    icon: <Users className="h-6 w-6 text-blue-500" />
  },
  {
    id: 3,
    value: '15+',
    label: 'Years Experience',
    icon: <Award className="h-6 w-6 text-green-500" />
  },
  {
    id: 4,
    value: '100+',
    label: 'Expert Guides',
    icon: <Clock className="h-6 w-6 text-purple-500" />
  }
]

export default function AdventureSports() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Categories Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Popular Categories
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose from our wide range of adventure sports and activities
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-16">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.link}
              className="group relative flex flex-col items-center"
            >
              <div className="relative w-24 h-24 rounded-full overflow-hidden mb-3 group-hover:ring-4 ring-green-500 transition-all duration-300">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center text-white">
                  {category.icon}
                </div>
              </div>
              <span className="text-sm font-medium text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                {category.name}
              </span>
            </Link>
          ))}
        </div>

        {/* Stats Section */}
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-gray-50" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-4">
                {stats.map((stat) => (
                  <div
                    key={stat.id}
                    className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r"
                  >
                    <div className="flex items-center justify-center mb-2">
                      {stat.icon}
                    </div>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                    <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
            Explore All Adventures
          </button>
        </div>
      </div>
    </section>
  )
} 