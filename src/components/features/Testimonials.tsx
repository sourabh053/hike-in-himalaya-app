'use client'

import Image from 'next/image'
import { Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Adventure Enthusiast',
    image: 'https://picsum.photos/id/1027/150/150',
    quote: 'The Everest Base Camp trek was life-changing. Our guide was incredibly knowledgeable and supportive throughout the journey.',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Photography Expert',
    image: 'https://picsum.photos/id/1012/150/150',
    quote: 'The Annapurna Circuit offered stunning photography opportunities. The team ensured we had the best spots for sunrise shots.',
    rating: 5
  },
  {
    id: 3,
    name: 'Emma Wilson',
    role: 'Cycling Adventurer',
    image: 'https://picsum.photos/id/1025/150/150',
    quote: 'The Manali to Leh cycling tour was challenging but incredibly rewarding. The support team was excellent.',
    rating: 5
  }
]

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          What Our Adventurers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-gray-50 rounded-lg p-6 shadow-sm"
            >
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-600 italic">&ldquo;{testimonial.quote}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials 