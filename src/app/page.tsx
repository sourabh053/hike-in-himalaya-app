import HeroSlider from '@/components/layout/HeroSlider'
import ActivityCards from '@/components/features/ActivityCards'
import AdventureCalendar from '@/components/features/AdventureCalendar'
import AdventureSports from '@/components/features/AdventureSports'
import VideoGallery from '@/components/features/VideoGallery'
import FeaturedDestinations from '@/components/features/FeaturedDestinations'
import Testimonials from '@/components/features/Testimonials'
import ContactBar from '@/components/features/ContactBar'
import { activities } from '@/data/activities'

export default function Home() {
  return (
    <>
      <HeroSlider />
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Discover Your Next Adventure
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the thrill of the Himalayas with our expertly guided tours. 
            From trekking to cycling, we offer unforgettable adventures for all skill levels.
          </p>
        </div>
      </section>
      <ActivityCards activities={activities} />
      <AdventureCalendar />
      <AdventureSports />
      <VideoGallery />
      <FeaturedDestinations />
      <Testimonials />
      <ContactBar />
    </>
  )
}
