'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import testimonials1 from "../../assets/testimonials1.png";
import testimonials2 from "../../assets/testimonials2.png";
import testimonials3 from "../../assets/testimonials3.png";
import testimonials4 from "../../assets/testimonials4.png";
import testimonials5 from "../../assets/testimonials5.png";


const testimonials = [
  {
    id: 1,
    name: 'Rishika Rawat',
    role: getTimeDifferenceFromToday('2024-07-02'),
    image: testimonials1,
    quote: "Our Chandernahan Trek with Hike in Himalayas was amazing! Great food, clean facilities, friendly staff, and chill vibes made it unforgettable. Ankush bhaiya's guidance was the highlight. Highly recommend!",
    rating: 5
  },
  {
    id: 2,
    name: 'Anveksha Shivaprasad',
    role: getTimeDifferenceFromToday('2024-06-02'),
    image: testimonials2,
    quote: 'My first solo trek with Hike in Himalaya was unforgettable—safe, welcoming, and enriching. The team, local guides, and unique trails made it a truly life-changing journey.',
    rating: 5
  },
  {
    id: 3,
    name: 'Yash Sharma',
    role: getTimeDifferenceFromToday('2024-07-02'),
    image: testimonials3,
    quote: "We had a absolutely wonderful experience with hike in himalayas. Mr.Ranjeet who is the manager of the place is very helping and he was there whenever we needed help..very helpful people..the best trek..the best hospitality I've ever experienced",
    rating: 5
  },
  {
    id: 4,
    name: 'Manoj Prakassh',
    role: getTimeDifferenceFromToday('2024-02-08'),
    image: testimonials4,
    quote: 'One of the best Himalayan experiences with "HikeinHimalaya." The trek guide was friendly, humble, and knowledgeable, ensuring a safe journey. I highly recommend choosing them over expensive companies that often restrict your freedom to fully enjoy the mountains.',
    rating: 5
  },
  {
    id: 5,
    name: 'Jason patel',
    role: getTimeDifferenceFromToday('2024-02-02'),
    image: testimonials5,
    quote: "Our trek with Hike in Himalayas was absolutely fabulous. Everything was well-managed, the staff was friendly and helpful, and the food and accommodations were excellent. The area felt untouched, offering stunning scenery and cozy stays. Special thanks to Ranjit, Mohit, and Ashish Bhaiya for making it unforgettable.",
    rating: 5
  },

]

function getTimeDifferenceFromToday(pastDateStr: string): string | null {
  const pastDate = new Date(pastDateStr);
  const today = new Date();

  // Validate the date
  if (isNaN(pastDate.getTime())) {
    console.error("Invalid date format");
    return null;
  }

  const yearsDifference = today.getFullYear() - pastDate.getFullYear();
  const monthsDifference = today.getMonth() - pastDate.getMonth();

  const totalMonths = yearsDifference * 12 + monthsDifference;

  if (totalMonths >= 12) {
    const years = Math.floor(totalMonths / 12);
    return `${years} year${years > 1 ? "s" : ""} ago`;
  } else {
    return `${totalMonths} month${totalMonths !== 1 ? "s" : ""} ago`;
  }
}


const Testimonials = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350 // Adjust based on card width + gap
      const scrollDirection = direction === 'left' ? -scrollAmount : scrollAmount
      scrollContainerRef.current.scrollBy({
        left: scrollDirection,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          What Our Adventurers Say
        </h2>
        
        <div className="relative">
          {/* Scroll Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/10 hover:bg-black/20 text-gray-800 p-2 rounded-full transform -translate-x-1/2"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/10 hover:bg-black/20 text-gray-800 p-2 rounded-full transform translate-x-1/2"
          >
            <ChevronRight size={24} />
          </button>

          {/* Testimonials Container */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide gap-6 pb-6 -mx-4 px-4"
            style={{ 
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="flex-none w-[350px]"
                style={{ scrollSnapAlign: 'center' }}
              >
                <div className="bg-gray-50 rounded-lg p-6 shadow-sm h-full">
                  <div className="flex items-center mb-4">
                    <div className="relative w-12 h-12 mr-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="rounded-full object-cover"
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials 