'use client'

import { Activity } from '../../types/activity'
import { Mountain, Clock, ArrowUp, Users } from 'lucide-react'

interface StatsPanelProps {
  activity: Activity
}

export default function StatsPanel({ activity }: StatsPanelProps) {
  const stats = [
    {
      icon: <Mountain className="w-6 h-6" />,
      label: "Trek Difficulty",
      value: activity.difficulty
    },
    {
      icon: <Clock className="w-6 h-6" />,
      label: "Trek Duration",
      value: activity.duration
    },
    {
      icon: <ArrowUp className="w-6 h-6" />,
      label: "Highest Altitude",
      value: activity.altitude
    },
    {
      icon: <Users className="w-6 h-6" />,
      label: "Suitable For",
      value: activity.suitableFor
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-white rounded-lg shadow-md p-6 mb-8">
      {stats.map((stat, index) => (
        <div key={index} className="flex items-center space-x-3 p-4">
          <div className="text-gray-600">{stat.icon}</div>
          <div>
            <div className="text-sm text-gray-500">{stat.label}</div>
            <div className="font-semibold text-gray-900">{stat.value}</div>
          </div>
        </div>
      ))}
    </div>
  )
} 