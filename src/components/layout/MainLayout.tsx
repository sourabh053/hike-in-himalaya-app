'use client'

import Header from './Header'
import Footer from './Footer'
import ContactBar from '../features/ContactBar'

export default function MainLayout({
  children,
  showContactBar = true
}: {
  children: React.ReactNode
  showContactBar?: boolean
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow pt-1">
        {children}
      </main>
      {/* {showContactBar && <ContactBar />} */}
      {/* <Footer /> */}
    </div>
  )
} 