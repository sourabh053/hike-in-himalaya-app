'use client'

import { useRef } from 'react'
import Image, { StaticImageData } from 'next/image'
import { Play, ChevronLeft, ChevronRight } from 'lucide-react'
import BuranGhatiPic1 from "../../assets/activities/BuranGhati/buran-ghati4.jpg";
import BuranGhatiPic2 from "../../assets/activities/BuranGhati/buran-ghati17.jpg";
import Thumbnail3 from "../../assets/thumbnail3.png";
import Thumbnail4 from "../../assets/thumbnail4.png";
import Thumbnail5 from "../../assets/thumbnail5.png";


interface Video {
  id: number
  title: string
  thumbnail: string | StaticImageData
  duration: string
  uploadedAgo: string
  views: string
  link: string
}

const videos: Video[] = [
  {
    id: 1,
    title: 'BURAN PASS TREK ( OCTOBER 2021)',
    thumbnail: BuranGhatiPic1,
    duration: '03:47',
    uploadedAgo: getDateDifference("2021-11-19"),
    views: '109 views',
    link: 'https://www.youtube.com/watch?v=t3i86kMhcM8'
  },
  {
    id: 2,
    title: 'BURAN GHATTI TREK WITH @hikeinhimalaya 👣|July 2021| Glimpse of Buran|',
    thumbnail: BuranGhatiPic2,
    duration: '00:53',
    uploadedAgo: getDateDifference("2021-08-23"),
    views: '73 views',
    link: 'https://www.youtube.com/watch?v=CW67ofEUMLk'
  },
  {
    id: 3,
    title: 'Journey Through The Himalayas in 4K: Discovering Chandernahan | Part -II | An Epic Trek',
    thumbnail: Thumbnail3,
    duration: '09:46',
    uploadedAgo: getDateDifference("2024-06-14"),
    views: '2.6k views',
    link: 'https://www.youtube.com/watch?v=_HMFbTCYDMs'
  },
  {
    id: 4,
    title: 'Buran Ghati Trek | Reached The Summit Now Descend Starts',
    thumbnail: Thumbnail4,
    duration: '13:43',
    uploadedAgo: getDateDifference("2021-09-18"),
    views: '1.7K views',
    link: 'https://www.youtube.com/watch?v=bDPy6KwjA2E'
  },
  {
    id: 5,
    title: 'Journey Through the Himalayas in 4K: Discovering Chandernahan| Part 2| An Epic Trek',
    thumbnail: Thumbnail5,
    duration: '09:24',
    uploadedAgo: getDateDifference("2024-06-10"),
    views: '1.8K views',
    link: 'https://www.youtube.com/watch?v=VAWEvRqs5D0'
  }
]

function getDateDifference(inputDate: string | Date): string {
  const today = new Date();
  const targetDate = new Date(inputDate);

  if (isNaN(targetDate.getTime())) {
    throw new Error("Invalid date provided");
  }

  const diffInMilliseconds = today.getTime() - targetDate.getTime();

  if (diffInMilliseconds < 0) {
    throw new Error("Input date cannot be in the future");
  }

  const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
  if (diffInDays < 7) {
    return `${diffInDays} day${diffInDays > 1 ? "s" : ""} ago`;
  }

  const diffInWeeks = Math.floor(diffInDays / 7);
  if (diffInDays < 30) {
    return `${diffInWeeks} week${diffInWeeks > 1 ? "s" : ""} ago`;
  }

  const diffInMonths =
    today.getFullYear() * 12 +
    today.getMonth() -
    (targetDate.getFullYear() * 12 + targetDate.getMonth());
  if (diffInMonths < 12) {
    return `${diffInMonths} month${diffInMonths > 1 ? "s" : ""} ago`;
  }

  const diffInYears = today.getFullYear() - targetDate.getFullYear() - 1;
  return `${diffInYears} year${diffInYears > 1 ? "s" : ""} ago`;
}

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
              <a key={video.id} href={video.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <div                
                className="flex-none w-[400px] group cursor-pointer"
                style={{ scrollSnapAlign: 'center' }}
              >
                <div className="relative aspect-video mb-4">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover rounded-lg"
                     sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
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
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 