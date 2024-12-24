'use client'

import { useState } from 'react'
import MainLayout from '@/components/layout/MainLayout'
import Image from 'next/image'
import { Filter, Info, ShoppingCart } from 'lucide-react'

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
    capacity?: string
  }
}

const gearItems: GearItem[] = [
  {
    id: 1,
    name: 'Camping Tent',
    category: 'Tents',
    description: 'Four-season tent perfect for high-altitude camping.',
    image: 'https://media.istockphoto.com/id/614333886/photo/illuminated-green-tent-under-stars-at-night-forest.jpg?s=612x612&w=0&k=20&c=82MnAs8eS6LfVwY9zmphCpZdSZHFSoPB6nh07BtZ-oo=',
    pricePerDay: 200,
    availability: true,
    specifications: {
      brand: 'Mountain Hardwear',
      model: 'Trango 2',
      weight: '4.1 kg',
      material: 'Nylon ripstop'
    }
  },
  {
    id: 2,
    name: 'Duffle Bag',
    category: 'Bags',
    description: 'Waterproof duffle bag with 95L capacity, perfect for expeditions.',
    image: 'https://media.istockphoto.com/id/2187244347/photo/close-up-outdoor-trendy-fashion-sports-custom-nylon-crossbody-shoulder-strap-bag-medium-size.jpg?s=612x612&w=0&k=20&c=M9VOFf4OrlGKiptvbFVhc5e3Tmk3h_xucJhplFxnMNM=',
    pricePerDay: 100,
    availability: true,
    specifications: {
      brand: 'North Face',
      model: 'Base Camp',
      size: '95L',
      material: 'Ballistic nylon'
    }
  },
  {
    id: 3,
    name: 'Jacket',
    category: 'Clothing',
    description: 'Insulated down jacket for extreme cold conditions.',
    image: 'https://media.istockphoto.com/id/1737286185/photo/portrait-of-smiling-at-camera-high-altitude-mountaineer-dressed-red-warm-dawn-jacket-holding.webp?a=1&b=1&s=612x612&w=0&k=20&c=qtwxx9o6RZxrvwRs-ItJ4m2nh7PKg1qK8R5-ZwyQfq4=',
    pricePerDay: 200,
    availability: true,
    specifications: {
      brand: 'Mountain Equipment',
      model: 'Expedition',
      size: 'M/L/XL',
      material: '800-fill down'
    }
  },
  {
    id: 4,
    name: 'Gloves',
    category: 'Clothing',
    description: 'Waterproof and warm mountaineering gloves.',
    image: 'https://media.istockphoto.com/id/1096796490/photo/dark-blue-protective-cloth-gloves-handyman-equipment.webp?a=1&b=1&s=612x612&w=0&k=20&c=lLIfD0Xko0FO4MJJxRRlK6cDKfI_ntH8FknUBdHDTck=',
    pricePerDay: 50,
    availability: true,
    specifications: {
      brand: 'Black Diamond',
      model: 'Guide',
      size: 'S/M/L',
      material: 'Goretex'
    }
  },
  {
    id: 5,
    name: 'Gaiters',
    category: 'Clothing',
    description: 'Heavy-duty waterproof gaiters for snow and rough terrain.',
    image: 'https://media.istockphoto.com/id/1385629867/photo/hiker-wears-gaiters-over-trekking-boots-to-protect-against-water-insects-and-cold-clothing.jpg?s=612x612&w=0&k=20&c=Kb_hUxMOyDo_kpXIyhOhqNNs1UHm59CmzEogGwbhqgc=',
    pricePerDay: 80,
    availability: true,
    specifications: {
      brand: 'Outdoor Research',
      model: 'Crocodile',
      size: 'Universal',
      material: 'Cordura'
    }
  },
  {
    id: 6,
    name: 'Sleeping Bag',
    category: 'Sleeping Bags',
    description: 'Premium down sleeping bag rated for -7°C.',
    image: 'https://media.istockphoto.com/id/172719446/photo/two-blankets-in-blue-and-green-for-outdoor-events.jpg?s=612x612&w=0&k=20&c=tOFBAD85SMI3E1PRVvZ5j52KCieDTKdywb7FA9vvGsk=',
    pricePerDay: 100,
    availability: true,
    specifications: {
      brand: 'Western Mountaineering',
      model: 'UltraLite',
      weight: '850g',
      material: '850-fill down'
    }
  },
  {
    id: 7,
    name: 'Trekking Shoes',
    category: 'Footwear',
    description: 'Professional mountaineering boots for technical climbing.',
    image: 'https://media.istockphoto.com/id/458587727/photo/salomon-back-packing-shoe-quest-4d-gtx.jpg?s=612x612&w=0&k=20&c=xIQyYH9tyrpBWsP57GcB-jB5E9Y-OErt9mxMSAo9X8s=',
    pricePerDay: 200,
    availability: true,
    specifications: {
      brand: 'La Sportiva',
      model: 'Nepal EVO GTX',
      size: '40-46 EU',
      material: 'Leather/Gore-tex'
    }
  },
  {
    id: 8,
    name: 'Trekking Poles',
    category: 'Climbing Gear',
    description: 'Lightweight carbon fiber poles with FlickLock Pro.',
    image: 'https://media.istockphoto.com/id/133292145/photo/nordic-walking-and-hiking-woman.jpg?s=612x612&w=0&k=20&c=iMH3iGo7E_SKAYKf6B8j7ohL-OGH1si56PQZm-iM_aE=',
    pricePerDay: 70,
    availability: true,
    specifications: {
      brand: 'Black Diamond',
      model: 'Alpine Carbon',
      weight: '468g/pair',
      material: 'Carbon fiber'
    }
  },
  {
    id: 9,
    name: 'Rucksack Cover',
    category: 'Accessories',
    description: 'Waterproof cover for backpacks up to 70L.',
    image: 'https://media.istockphoto.com/id/891250344/photo/backpacker-on-green-field-man-hiking-with-bright-red-backpack-autumn-rural-landscape.jpg?s=612x612&w=0&k=20&c=xyo7h1fQZ2KtCFKk-MN8stDcOWuzSTrZmDEkX9hLn7o=',
    pricePerDay: 10,
    availability: true,
    specifications: {
      brand: 'Sea to Summit',
      model: 'Standard',
      size: '70L',
      material: 'Nylon ripstop'
    }
  },
  {
    id: 10,
    name: 'Flask',
    category: 'Accessories',
    description: '1L insulated flask keeps drinks hot for 24 hours.',
    image: 'https://media.istockphoto.com/id/1392673482/photo/close-up-of-womans-hands-holding-reusable-insulated-water-bottle-in-car.jpg?s=612x612&w=0&k=20&c=AFe2Jz80p63h4UDOOWOZEeieSzvsDwzGQJGWq2ck4p4=',
    pricePerDay: 20,
    availability: true,
    specifications: {
      brand: 'Stanley',
      model: 'Mountain',
      size: '1L',
      material: 'Stainless steel'
    }
  },
  {
    id: 11,
    name: 'Head Tourch',
    category: 'Accessories',
    description: 'Powerful 450 lumens rechargeable headlamp.',
    image: 'https://media.istockphoto.com/id/1134503663/photo/headlamp-isolated.jpg?s=612x612&w=0&k=20&c=r-VEljR_IUal2g_vPtVYDFNnCWGPh2dC4qN71gecgSA=',
    pricePerDay: 50,
    availability: true,
    specifications: {
      brand: 'Petzl',
      model: 'Actik Core',
      weight: '75g',
      material: 'Composite'
    }
  },
  {
    id: 12,
    name: 'Poncho',
    category: 'Clothing',
    description: 'Lightweight emergency rain protection.',
    image: 'https://media.istockphoto.com/id/1251386104/photo/man-in-red-poncho-walking-down-steps-during-rainy-day-on-street-road-sidewalk-near-gion-and.jpg?s=612x612&w=0&k=20&c=Ro2V06Lg_BG23jjVVp_81EO5wgvY48IltHQ-t4pyrSE=',
    pricePerDay: 100,
    availability: true,
    specifications: {
      brand: 'Black Diamond',
      model: 'Alpine',
      weight: '200g',
      material: 'Ripstop nylon'
    }
  },
  {
    id: 13,
    name: 'Dry Bag',
    category: 'Bags',
    description: 'Waterproof bag for protecting essential gear.',
    image: 'https://media.istockphoto.com/id/927592726/photo/outdoor-waterproof-bag-for-tourism.jpg?s=612x612&w=0&k=20&c=27HKqNAKu2NMTPwZeGP-sj5yaK-jV9wKbM_qQ-gtPlo=',
    pricePerDay: 50,
    availability: true,
    specifications: {
      brand: 'Sea to Summit',
      model: 'Big River',
      size: '20L',
      material: 'TPU-laminated nylon'
    }
  },
  {
    id: 14,
    name: 'Sunglass',
    category: 'Accessories',
    description: 'High-altitude glacier glasses with removable shields.',
    image: 'https://media.istockphoto.com/id/897713356/photo/shades.jpg?s=612x612&w=0&k=20&c=n10yb1l7JGs5k5KTmyKEvnmrQ9TiuQxFiIRM2yul0Gw=',
    pricePerDay: 50,
    availability: true,
    specifications: {
      brand: 'Julbo',
      model: 'Explorer 2.0',
      material: 'Polycarbonate'
    }
  },
  {
    id: 15,
    name: 'Power Bank',
    category: 'Electronics',
    description: 'High-capacity portable charger for multiple devices.',
    image: 'https://media.istockphoto.com/id/1198444825/photo/charging-of-smart-phone-from-power-bank.jpg?s=612x612&w=0&k=20&c=sqmFz3k_GHfNhoSbpP0ko9Csh1Z5C_HcLAUAWCk9_gU=',
    pricePerDay: 80,
    availability: true,
    specifications: {
      brand: 'Anker',
      model: 'PowerCore',
      capacity: '26800mAh',
      weight: '490g'
    }
  }
]

const categories = ['All', 'Tents', 'Sleeping Bags', 'Bags', 'Climbing Gear', 'Clothing', 'Footwear', 'Accessories', 'Electronics']

export default function RentGearPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [showSpecs, setShowSpecs] = useState<number | null>(null)

  const filteredGear = selectedCategory === 'All' 
    ? gearItems 
    : gearItems.filter(item => item.category === selectedCategory)

    const handleRentNow = () => {
      window.open('https://wa.me/919805203783', '_blank')
    }

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Rent Professional Gear
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Quality equipment for your Hike in Himalaya adventures. All gear is professionally maintained
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
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
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
                   ₹{item.pricePerDay}/day
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
                    {/* <button className="flex items-center text-gray-600 hover:text-gray-900">
                      <Calendar size={20} className="mr-1" />
                      Check Dates
                    </button> */}
                    <button 
                      className={`
                        flex items-center px-4 py-2 rounded-md
                        ${item.availability
                          ? 'bg-green-600 text-white hover:bg-green-700'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }
                      `}
                      disabled={!item.availability}
                      onClick={() => handleRentNow()}
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