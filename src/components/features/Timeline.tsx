'use client'

import { Activity } from '@/types/activity'
import { Calendar } from 'lucide-react'

interface TimelineProps {
  activity: Activity
}

export default function Timeline({ activity }: TimelineProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="flex items-center gap-2 mb-6">
        <Calendar className="w-5 h-5 text-gray-600" />
        <h2 className="text-xl font-semibold">Brief Itinerary</h2>
      </div>

      <div className="space-y-6">
        {activity.brief_itinerary.map((day) => (
          <div key={day.day} className="flex items-start gap-4">
            <div className="flex-shrink-0 w-16">
              <div className="w-20 h-12 rounded-lg bg-gray-100 flex items-center justify-center">
                <span className="font-semibold text-gray-600">Day {day.day}</span>
              </div>
            </div>
            
            <div className="flex-grow self-center">
              <div className="relative pl-6">
                <h3 className="font-medium text-base text-gray-900 mb-1 sm:text-lg">{day.title}</h3>
                {/* <p className="text-gray-600">{day.description}</p> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}