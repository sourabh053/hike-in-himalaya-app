import { StaticImageData } from 'next/image'

export interface Activity {
  id: number
  title: string
  description: string
  longDescription: string
  images: (string | StaticImageData)[]
  duration: string
  location: string
  groupSize: string
  price: number
  slug: string
  difficulty: string
  altitude: string
  suitableFor: string
  itinerary: {
    day: number
    title: string
    description: string
  }[]
  brief_itinerary: {
    day: number
    title: string
  }[]
  inclusions: string[];
  exclusions: string[];
} 