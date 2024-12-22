"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, Users, ArrowRight } from "lucide-react";
import { Activity } from "@/types/activity";

interface ActivityCardsProps {
  activities: Activity[];
}
const getHeroImageIndex = (slug: string): number => {
  switch (slug) {
    case "buran-ghati-trek":
      return 1;
    case "chandernahan-lake-trek":
      return 2;
    case "pin-parvati-pass":
      return 5;
    case "rupin-pass-trek":
      return 8;
    // Add more cases for other treks
    default:
      return 0; // fallback to first image
  }
};

const ActivityCards = ({ activities }: ActivityCardsProps) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Popular Adventures
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={activity.images[getHeroImageIndex(activity.slug)]}
                  alt={activity.title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {activity.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {activity.description}
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-500">
                    <Clock size={18} className="mr-2" />
                    <span>{activity.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <MapPin size={18} className="mr-2" />
                    <span>{activity.location}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Users size={18} className="mr-2" />
                    <span>{activity.groupSize}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-600">
                    ₹ {activity.price}
                  </span>
                  <Link
                    href={`/activities/${activity.slug}`}
                    className="flex items-center text-green-600 hover:text-green-700 font-medium"
                  >
                    View Details
                    <ArrowRight size={18} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivityCards;
