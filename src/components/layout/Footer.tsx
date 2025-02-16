'use client'

import Link from 'next/link'
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Hike In Himalaya</h3>
            <div className="space-y-3">
              <p className="flex items-center gap-2">
                <MapPin size={18} />
                <span>Vill. Janglikh, P.O. Tangnu, Chirgaon, Shimla, H.P. - 171208</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={18} />
                <span>+91 9816722069</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={18} />
                <span>info@hikeinhimalaya.com</span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-green-500">About Us</Link>
              </li>
              <li>
                <Link href="/activities" className="hover:text-green-500">Activities</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-green-500">Blog</Link>
              </li>             
            </ul>
          </div>
          
          {/* Social Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/p/Hike-in-Himalaya-100080457680916/" className="hover:text-green-500">
                <Facebook size={24} />
              </Link>
              <Link href="https://www.instagram.com/hikeinhimalaya?igsh=MXBubDV1ODB5MDhiYw==" className="hover:text-green-500">
                <Instagram size={24} />
              </Link>
              <Link href="https://twitter.com" className="hover:text-green-500">
                <Twitter size={24} />
              </Link>
              <Link href="https://www.youtube.com/@hikeinhimalaya8242" className="hover:text-green-500">
                <Youtube size={24} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {currentYear} Hike In Himalaya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 