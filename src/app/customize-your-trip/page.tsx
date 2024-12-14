'use client'

import { useState } from 'react'
import MainLayout from '@/components/layout/MainLayout'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ChevronLeft, ChevronRight, Mail, Mountain } from "lucide-react"

interface FormData {
  tripType: string
  duration: string
  groupSize: number
  startDate: string
  difficulty: 'Easy' | 'Moderate' | 'Challenging'
  preferences: string[]
  specialRequirements: string
  name: string
  email: string
  phone: string
}

const initialFormData: FormData = {
  tripType: '',
  duration: '',
  groupSize: 2,
  startDate: '',
  difficulty: 'Moderate',
  preferences: [],
  specialRequirements: '',
  name: '',
  email: '',
  phone: ''
}

export default function CustomizeTripPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>(initialFormData)

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Implement form submission logic
    console.log('Form submitted:', formData)
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Type of Trip
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {['Trekking', 'Peak Climbing', 'Cultural Tour'].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => updateFormData('tripType', type)}
                    className={`
                      p-4 border rounded-lg text-center
                      ${formData.tripType === type
                        ? 'border-green-500 bg-green-50 text-green-700'
                        : 'border-gray-200 hover:border-green-500'
                      }
                    `}
                  >
                    <Mountain className="mx-auto h-6 w-6 mb-2" />
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Duration
              </label>
              <select
                value={formData.duration}
                onChange={(e) => updateFormData('duration', e.target.value)}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 rounded-md"
              >
                <option value="">Select duration</option>
                <option value="1-7">1-7 days</option>
                <option value="8-14">8-14 days</option>
                <option value="15+">15+ days</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Group Size
              </label>
              <div className="flex items-center space-x-4">
                <button
                  type="button"
                  onClick={() => updateFormData('groupSize', Math.max(1, formData.groupSize - 1))}
                  className="p-2 border rounded-md"
                >
                  -
                </button>
                <span className="text-lg font-medium">{formData.groupSize}</span>
                <button
                  type="button"
                  onClick={() => updateFormData('groupSize', formData.groupSize + 1)}
                  className="p-2 border rounded-md"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Start Date
              </label>
              <input
                type="date"
                value={formData.startDate}
                onChange={(e) => updateFormData('startDate', e.target.value)}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Difficulty Level
              </label>
              <div className="grid grid-cols-3 gap-4">
                {['Easy', 'Moderate', 'Challenging'].map((level) => (
                  <button
                    key={level}
                    type="button"
                    onClick={() => updateFormData('difficulty', level)}
                    className={`
                      p-3 border rounded-lg text-center
                      ${formData.difficulty === level
                        ? 'border-green-500 bg-green-50 text-green-700'
                        : 'border-gray-200 hover:border-green-500'
                      }
                    `}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Special Requirements
              </label>
              <textarea
                value={formData.specialRequirements}
                onChange={(e) => updateFormData('specialRequirements', e.target.value)}
                rows={4}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                placeholder="Any specific requirements or preferences..."
              />
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => updateFormData('name', e.target.value)}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => updateFormData('email', e.target.value)}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => updateFormData('phone', e.target.value)}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              />
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <MainLayout>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Customize Your Adventure
          </h1>
          <p className="mt-2 text-gray-600">
            Tell us your preferences and we&apos;ll create the perfect itinerary for you
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {[1, 2, 3].map((step) => (
              <div
                key={step}
                className={`flex items-center ${
                  step < 3 ? 'flex-1' : ''
                }`}
              >
                <div
                  className={`
                    w-8 h-8 rounded-full flex items-center justify-center
                    ${currentStep >= step
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-200 text-gray-600'
                    }
                  `}
                >
                  {step}
                </div>
                {step < 3 && (
                  <div
                    className={`
                      flex-1 h-0.5 mx-4
                      ${currentStep > step ? 'bg-green-600' : 'bg-gray-200'}
                    `}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-sm">Trip Details</span>
            <span className="text-sm">Preferences</span>
            <span className="text-sm">Contact Info</span>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {renderStepContent()}

          <div className="mt-8 flex justify-between">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={() => setCurrentStep(currentStep - 1)}
                className="flex items-center text-gray-600 hover:text-gray-900"
              >
                <ChevronLeft className="mr-1" size={20} />
                Previous
              </button>
            )}
            
            {currentStep < 3 ? (
              <button
                type="button"
                onClick={() => setCurrentStep(currentStep + 1)}
                className="ml-auto flex items-center bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
              >
                Next
                <ChevronRight className="ml-1" size={20} />
              </button>
            ) : (
              <button
                type="submit"
                className="ml-auto bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
              >
                Submit Request
              </button>
            )}
          </div>
        </form>
      </div>
    </MainLayout>
  )
} 