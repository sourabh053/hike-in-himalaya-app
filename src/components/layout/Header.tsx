'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import logo from "../../../public/logo.svg"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: 'HOME', href: '/' },
    { label: 'ACTIVITIES', href: '/activities' },
    { label: 'RENT GEAR', href: '/rent-gear' },
    { label: 'BLOG', href: '/blog' },
    // { label: 'CUSTOMIZE YOUR TRIP', href: '/customize' },
  ]

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src={logo}
                alt="Himalaya Adventures"
                width={180}
                height={60}
                // className="h-[60px]"
                priority
              />
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {/* <Link
              href="/auth/register"
              className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium"
            >
              REGISTER
            </Link>
            <Link
              href="/auth/login"
              className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700"
            >
              LOG IN
            </Link> */}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-green-600"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-gray-700 hover:text-green-600 px-3 py-2 text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              {/* <Link
                href="/auth/register"
                className="block text-gray-700 hover:text-green-600 px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                REGISTER
              </Link>
              <Link
                href="/auth/login"
                className="block text-gray-700 hover:text-green-600 px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                LOG IN
              </Link> */}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header 