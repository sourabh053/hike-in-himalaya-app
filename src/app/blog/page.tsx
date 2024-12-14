'use client'

import BlogLayout from '@/components/layout/BlogLayout'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User } from 'lucide-react'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  image: string
  date: string
  author: string
  category: string
  readTime: string
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Essential Tips for Everest Base Camp Trek',
    excerpt: 'Prepare for your journey to the base of the world\'s highest peak with these crucial tips and insights.',
    image: 'https://picsum.photos/id/1036/800/600',
    date: '2024-03-15',
    author: 'John Doe',
    category: 'Trekking',
    readTime: '5 min read'
  },
  // Add more blog posts...
]

export default function BlogPage() {
  return (
    <BlogLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post) => (
          <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <Calendar size={16} className="mr-1" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
                <span className="mx-2">•</span>
                <User size={16} className="mr-1" />
                {post.author}
                <span className="mx-2">•</span>
                {post.readTime}
              </div>
              <h2 className="text-xl font-semibold mb-2">
                <Link href={`/blog/${post.id}`} className="hover:text-green-600">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-green-600 font-medium">
                  {post.category}
                </span>
                <Link
                  href={`/blog/${post.id}`}
                  className="text-green-600 hover:text-green-700 font-medium"
                >
                  Read more
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </BlogLayout>
  )
} 