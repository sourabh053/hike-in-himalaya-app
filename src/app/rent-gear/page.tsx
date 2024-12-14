'use client'

import { useState } from 'react'
import MainLayout from '@/components/layout/MainLayout'
import Image from 'next/image'
import { Filter, Calendar, Info, ShoppingCart } from 'lucide-react'

interface GearItem {
  id: number
  name: string
  category: string
  description: string
  image: string
  pricePerDay: number
  availability: boolean
  specifications: {
    brand: string
    model: string
    size?: string
    weight?: string
    material?: string
  }
}

const gearItems: GearItem[] = [
  {
    id: 1,
    name: 'Mountain Hardwear Trango 2 Tent',
    category: 'Tents',
    description: 'Four-season tent perfect for high-altitude camping.',
    image: 'https://picsum.photos/id/1018/800/600',
    pricePerDay: 25,
    availability: true,
    specifications: {
      brand: 'Mountain Hardwear',
      model: 'Trango 2',
      weight: '4.1 kg',
      material: 'Nylon ripstop'
    }
  },
  // Add more gear items...
]

const categories = ['All', 'Tents', 'Sleeping Bags', 'Backpacks', 'Climbing Gear', 'Clothing']

export default function RentGearPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [showSpecs, setShowSpecs] = useState<number | null>(null)

  const filteredGear = selectedCategory === 'All' 
    ? gearItems 
    : gearItems.filter(item => item.category === selectedCategory)

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Rent Professional Gear
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Quality equipment for your Himalayan adventures. All gear is professionally maintained
            and tested for high-altitude conditions.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex items-center gap-4 mb-8 overflow-x-auto pb-4">
          <Filter size={20} className="text-gray-500 flex-shrink-0" />
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`
                px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap
                ${selectedCategory === category
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gear Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGear.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.category}</p>
                  </div>
                  <span className="text-lg font-bold text-green-600">
                    ${item.pricePerDay}/day
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4">{item.description}</p>

                {/* Specifications */}
                <div className="mb-4">
                  <button
                    onClick={() => setShowSpecs(showSpecs === item.id ? null : item.id)}
                    className="flex items-center text-sm text-gray-600 hover:text-gray-900"
                  >
                    <Info size={16} className="mr-1" />
                    Specifications
                  </button>
                  
                  {showSpecs === item.id && (
                    <div className="mt-2 text-sm text-gray-600 space-y-1">
                      {Object.entries(item.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <span className="capitalize">{key}:</span>
                          <span>{value}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <span className={`
                    px-3 py-1 rounded-full text-sm
                    ${item.availability 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'}
                  `}>
                    {item.availability ? 'Available' : 'Out of Stock'}
                  </span>
                  <div className="flex gap-2">
                    <button className="flex items-center text-gray-600 hover:text-gray-900">
                      <Calendar size={20} className="mr-1" />
                      Check Dates
                    </button>
                    <button 
                      className={`
                        flex items-center px-4 py-2 rounded-md
                        ${item.availability
                          ? 'bg-green-600 text-white hover:bg-green-700'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }
                      `}
                      disabled={!item.availability}
                    >
                      <ShoppingCart size={20} className="mr-1" />
                      Rent Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  )
} 