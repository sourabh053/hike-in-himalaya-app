'use client'

import MainLayout from '@/components/layout/MainLayout'
import { Briefcase, MapPin, Clock, DollarSign } from 'lucide-react'

interface Job {
  id: number
  title: string
  location: string
  type: 'Full-time' | 'Part-time' | 'Contract'
  salary: string
  department: string
  description: string
  requirements: string[]
}

const jobs: Job[] = [
  {
    id: 1,
    title: 'Senior Trek Guide',
    location: 'Kathmandu, Nepal',
    type: 'Full-time',
    salary: '$30,000 - $45,000',
    department: 'Operations',
    description: 'Lead trekking groups through Himalayan routes while ensuring safety and providing cultural insights.',
    requirements: [
      'Minimum 5 years of professional trekking experience',
      'Advanced first aid certification',
      'Fluent in English and Nepali',
      'Excellent leadership and communication skills'
    ]
  },
  // Add more jobs...
]

export default function CareersPage() {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Join Our Adventure Team
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Be part of something extraordinary. Help others discover the magic of the Himalayas
            while building an exciting career in adventure tourism.
          </p>
        </div>

        {/* Job Listings */}
        <div className="grid grid-cols-1 gap-6">
          {jobs.map((job) => (
            <div key={job.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">{job.title}</h2>
                  <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-1" />
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-1" />
                      {job.type}
                    </div>
                    <div className="flex items-center">
                      <DollarSign size={16} className="mr-1" />
                      {job.salary}
                    </div>
                    <div className="flex items-center">
                      <Briefcase size={16} className="mr-1" />
                      {job.department}
                    </div>
                  </div>
                </div>
                <button className="mt-4 md:mt-0 bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700">
                  Apply Now
                </button>
              </div>
              
              <p className="text-gray-600 mb-4">{job.description}</p>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Requirements:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {job.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Why Work With Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Adventure Lifestyle',
                description: 'Experience the thrill of adventure as part of your daily work routine.'
              },
              {
                title: 'Growth Opportunities',
                description: 'Continuous training and clear career progression paths.'
              },
              {
                title: 'Great Benefits',
                description: 'Competitive salary, health insurance, and equipment allowances.'
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </MainLayout>
  )
} 