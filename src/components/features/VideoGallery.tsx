'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { Play, ChevronLeft, ChevronRight } from 'lucide-react'

interface Video {
  id: number
  title: string
  thumbnail: string
  duration: string
  uploadedAgo: string
  views: string
  link: string
}

const videos: Video[] = [
  {
    id: 1,
    title: 'Everest Base Camp Trek - A Journey to Remember',
    thumbnail: 'https://picsum.photos/id/1018/800/450',
    duration: '12:45',
    uploadedAgo: '2 days ago',
    views: '2.3K views',
    link: '/videos/everest-base-camp'
  },
  {
    id: 2,
    title: 'Annapurna Circuit - Through the Eyes of a Trekker',
    thumbnail: 'https://picsum.photos/id/1015/800/450',
    duration: '15:20',
    uploadedAgo: '5 days ago',
    views: '1.8K views',
    link: '/videos/annapurna-circuit'
  },
  {
    id: 3,
    title: 'Manali to Leh - The Ultimate Cycling Adventure',
    thumbnail: 'https://picsum.photos/id/1011/800/450',
    duration: '18:30',
    uploadedAgo: '1 week ago',
    views: '3.1K views',
    link: '/videos/manali-leh'
  },
  {
    id: 4,
    title: 'Wildlife Safari in Chitwan National Park',
    thumbnail: 'https://picsum.photos/id/1039/800/450',
    duration: '10:15',
    uploadedAgo: '2 weeks ago',
    views: '1.5K views',
    link: '/videos/chitwan-safari'
  },
  {
    id: 5,
    title: 'Peak Climbing Guide - Island Peak',
    thumbnail: 'https://picsum.photos/id/1036/800/450',
    duration: '20:45',
    uploadedAgo: '3 weeks ago',
    views: '2.7K views',
    link: '/videos/island-peak'
  }
]

export default function VideoGallery() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400 // Adjust based on card width + gap
      const scrollDirection = direction === 'left' ? -scrollAmount : scrollAmount
      scrollContainerRef.current.scrollBy({
        left: scrollDirection,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">
            See it to Believe it
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Watch our adventure documentaries and trek guides
          </p>
        </div>

        <div className="relative">
          {/* Scroll Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transform -translate-x-1/2"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transform translate-x-1/2"
          >
            <ChevronRight size={24} />
          </button>

          {/* Video Cards Container */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide gap-6 pb-6 -mx-4 px-4"
            style={{ 
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch' // For smooth scrolling on iOS
            }}
          >
            {videos.map((video) => (
              <div
                key={video.id}
                className="flex-none w-[400px] group cursor-pointer"
                style={{ scrollSnapAlign: 'start' }}
              >
                <div className="relative aspect-video mb-4">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300 rounded-lg" />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-white fill-current" />
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="absolute bottom-4 right-4 px-2 py-1 bg-black/70 text-white text-sm rounded">
                    {video.duration}
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
                  {video.title}
                </h3>
                
                <div className="flex items-center text-sm text-gray-400">
                  <span>{video.views}</span>
                  <span className="mx-2">•</span>
                  <span>{video.uploadedAgo}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 