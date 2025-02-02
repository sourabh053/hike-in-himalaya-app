'use client'

import MainLayout from './MainLayout'

export default function BlogLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <MainLayout showContactBar={false}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Main content */}
          <main className="col-span-12">
            {children}
          </main>
        </div>
      </div>
    </MainLayout>
  )
} 