'use client'

import Image from 'next/image'
import Link from 'next/link'
import logo from '../../../public/logo.png'

export default function AuthLayout({
  children,
  title
}: {
  children: React.ReactNode
  title: string
}) {
  return (
    <div className="min-h-screen flex">
      {/* Left side - Form */}
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm">
          <div className="mb-8">
            <Link href="/" className="inline-block">
              <Image
                src={logo}
                alt="Himalaya Adventures"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <h2 className="mt-6 text-3xl font-bold text-gray-900">{title}</h2>
          </div>
          {children}
        </div>
      </div>
      
      {/* Right side - Image */}
      <div className="hidden lg:block relative w-0 flex-1">
        <Image
          src="https://picsum.photos/id/1036/1920/1080"
          alt="Mountain landscape"
          fill
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </div>
  )
} 