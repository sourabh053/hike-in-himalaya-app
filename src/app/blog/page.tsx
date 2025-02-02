"use client";

import BlogLayout from "@/components/layout/BlogLayout";
import Image, { StaticImageData } from "next/image";
import { Calendar, User } from "lucide-react";
import BuranGhati from "../../assets/activities/BuranGhati/buran-ghati1.jpg";
import kendarkantha from "../../assets/activities/KedarkanthaTrek/Kedarkantha-Trek.jpg";
import Chandranahan from "../../assets/activities/Chandernahan/chandernahan3.jpg";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string | StaticImageData;
  date: string;
  author: string;
  category: string;
  readTime: string;
  highlightedWords: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Essential Tips for Everest Base Camp Trek",
    excerpt:
      "Prepare for your journey to the base of the world's highest peak with these crucial tips and insights.",
    content: `https://iantaylortrekking.com/blog/top-10-tips-for-a-trek-to-everest-base-camp/`,
    image:
      "https://media.istockphoto.com/id/2074326406/photo/mount-cho-oyu-with-prayer-flags-way-to-cho-oyu-base-camp.jpg?s=612x612&w=0&k=20&c=bj-JEYkA6glFD0wiIaK617arTZF8xMnU1ox2FOq7jGg=",
    date: "2024-03-15",
    author: "Ian Taylor",
    category: "Trekking",
    readTime: "5 min read",
    highlightedWords: [],
  },
  {
    id: 2,
    title: "Understanding Altitude Sickness: A Comprehensive Guide",
    excerpt:
      "Learn about the symptoms, prevention, and treatment of altitude sickness for safer high-altitude adventures.",
    content: `https://www.betterhealth.vic.gov.au/health/healthyliving/altitude-sickness`,
    image:
      "https://media.istockphoto.com/id/2134809201/photo/woman-watching-the-sunset-over-himalayas-everest-region.jpg?s=612x612&w=0&k=20&c=fP9hV3IwzIVrUcoft6NMzMoSyoSuTNr3DRS_jybQc_I=",
    date: "2024-03-10",
    author: "Better Health",
    category: "Health & Safety",
    readTime: "7 min read",
    highlightedWords: [],
  },
  {
    id: 3,
    title: "Best Treks in the Indian Himalayas: Hike In Himalayas",
    excerpt:
      "Discover the most breathtaking trails across the Indian Himalayas, from beginner-friendly to challenging expeditions.",
    content: `https://indiahikes.com/blog/22-best-himalayan-treks#gref`,
    image:
      "https://media.istockphoto.com/id/1297500238/photo/spituk-gompa-indus-valley-near-leh-ladakh-india.jpg?s=612x612&w=0&k=20&c=IhawDKQhl-WIrYxJprcUGLg3YS84s7VMMOFzt443vzs=",
    date: "2024-03-05",
    author: "Gautam Singh",
    category: "Destinations",
    readTime: "6 min read",
    highlightedWords: [],
  },
  {
    id: 4,
    title:
      "Trek into the Wild: Discover Bali Pass, Har Ki Dun, Kedar kantha, KGL, and Buran Ghati Treks",
    excerpt:
      "Trekking is an experience where you tend to come closer to nature, challenge your limits, and take-home memories you'll never forget. India has some of the most phenomenal treks-in its diverse and vast landscapes. These are a few special treks with respect to the package and diversity in topography: Bali Pass, Har Ki Dun, Kedar kantha, Kashmir Great Lakes (KGL), and Buran Ghati.",
    content: "https://discoveryhike.in/trek-into-the-wild-discover-bali-pass-har-ki-dun-kedar-kantha-kgl-and-buran-ghati-treks/",
    image: BuranGhati,
    date: "2024-03-05",
    author: "Ganga Rana",
    category: "Destinations",
    readTime: "10 min read",
    highlightedWords: [
      "Bali Pass Trek:",
      "Har Ki Dun Trek:",
      "Kedarkantha trek:",
      "Kashmir Great Lakes:",
      "Buran Ghati Trek:",
    ],
  },
  {
    id: 5,
    title: "Whispers of the Himalayas: A Trekker's Odyssey into the Unknown",
    excerpt:
      "The mist curled around the jagged peaks as if it was guarding some forgotten time. Legends whispered around campfires had brought me here – not just to trek but to uncover stories buried in the snow. Har Ki Dun Trek, they said, was a cradle of myths, its valleys singing songs of ancient Pandavas and their celestial journey. Yet, my journey had barely begun, and the Himalayas were already crafting tales of their own.",
    content: `https://discoveryhike.in/whispers-of-the-himalayas-a-trekkers-odyssey-into-the-unknown/`,
    image: kendarkantha,
    date: "2024-03-05",
    author: "Ganga Rana",
    category: "Destinations",
    readTime: "7 min read",
    highlightedWords: [
      "The Enigma of Har Ki Dun trek: Where Myths Come Alive",
      "From Legends to Labyrinths: The Buran Ghati Pass Trek Surprise",
      "Bali Pass Trek: The Portal to Hidden Realms",
      "KGL Trek: A tapestry of lakes and legends",
      "Kedarkantha Trek: A Journey Beyond the Summit"
    ],
  },
  {
    id: 6,
    title: "Trek to Chandranahan Lake and  Buran Ghati Pass",
    excerpt: "Trekking is perhaps the only activity that gives you a glimpse of a world full of surprises. An adventure sport is as good for your soul as it is for the body. The trails that pass through the different sections of some regions are mostly beautiful, but some parts grudgingly admit the imperfections. However, the shepherd trail of Chandranahan Lake and Buran Ghati Pass trek is hard to spot a moment where you are disappointed.",
    content: "https://www.solitarytraveller.com/trek-to-chandranahan-lake-and-buran-ghati-pass/",
    image: Chandranahan,
    date: "2024-03-05",
    author: "Ganga Rana",
    category: "Destinations",
    readTime: "7 min read",
    highlightedWords: [],
  },
];

export default function BlogPage() {
  return (
    <BlogLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="relative h-48">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center">
                  <Calendar size={16} className="mr-1" />
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
                <div className="flex items-center">
                  <User size={16} className="mr-1" />
                  {post.author}
                </div>
              </div>
              <h2 className="text-xl font-semibold mb-2">
                  <a
                    href={post.content}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-600 line-clamp-2"
                  >
                    {post.title}
                  </a>                
              </h2>
              <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-green-600 font-medium">
                  {post.category}
                </span>
                  <a
                    href={post.content}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-700 font-medium"
                  >
                    Read more
                  </a>                
              </div>
            </div>
          </article>
        ))}
      </div>
    </BlogLayout>
  );
}
