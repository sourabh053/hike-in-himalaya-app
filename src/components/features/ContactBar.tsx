'use client'

import { useState } from 'react'
import { Search, MessageCircle, Send } from 'lucide-react'

const ContactBar = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search functionality
    console.log('Searching for:', searchQuery)
  }

  const handleWhatsApp = () => {
    // Replace with your actual WhatsApp business number
    window.open('https://wa.me/919805203783', '_blank')
  }

  const handleOpenMail = () => {
    const recipient = 'info@hikeinhimalaya.com';
    const subject = 'Hello!';
    const body = 'I am reaching out to you for...';
    
    // Construct mailto URL
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open the mailto link
    window.location.href = mailtoLink;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t z-40 hidden sm:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="w-full md:w-1/3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search adventures..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </form>

          {/* Contact Buttons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={handleWhatsApp}
              className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
            >
              <MessageCircle size={20} />
              <span>Chat With Us</span>
            </button>

            <button
              onClick={handleOpenMail}
              className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              <Send size={20} />
              <span>Submit Enquiry</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactBar 