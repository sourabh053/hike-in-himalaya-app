"use client";

import { useState, Suspense, useRef } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Sliders, MapPin, Clock, Users, Search } from "lucide-react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

import { activities } from "@/data/activities";
import DownArrowIcon from "../../assets/down-arrow.svg";

const ALL_MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function ActivitiesContent() {
  const searchParams = useSearchParams();
  const month = searchParams.get("month");
  const router = useRouter();
  const [filters, setFilters] = useState({
    difficulty: "",
    duration: "",
    priceRange: "",
    altitude: "",
    month: month ? [month] : [],
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [monthsHidden, setMonthsHidden] = useState(true);
  const filtersRef = useRef<HTMLDivElement>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality
    console.log("Searching for:", searchQuery);
  };
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        {/* Sidebar */}
        <aside
          className={`lg:col-span-3 sticky top-20 bg-white p-2 rounded-lg shadow z-10 transition-[height] duration-300`}
          style={{
            height: isFiltersOpen
              ? `${
                  filtersRef.current?.scrollHeight
                    ? filtersRef.current?.scrollHeight + 10
                    : filtersRef.current?.scrollHeight
                }px`
              : "70px", // Collapsed height
            overflow: isFiltersOpen ? "visible" : "hidden",
          }}
        >
          <div
            className="sticky top-20 bg-white p-4 rounded-lg"
            ref={filtersRef}
          >
            <div className="flex items-center justify-between mb-4">
              <div
                className="flex items-center"
                onClick={() => setIsFiltersOpen(!isFiltersOpen)}
              >
                <Sliders className="mr-2" size={20} />
                <h2 className="text-lg font-semibold">Filters</h2>
                <Image
                  src={DownArrowIcon}
                  alt="Down arrow icon"
                  width={10}
                  height={10}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  // className="ml-2 md:hidden rotate-180"
                  className={`transition-transform duration-300 ml-2 ${
                    isFiltersOpen ? "rotate-180" : ""
                  }`}
                />
              </div>
              <button
                onClick={() => {
                  setFilters({
                    difficulty: "",
                    duration: "",
                    priceRange: "",
                    altitude: "",
                    month: [],
                  });
                  setSearchQuery("");
                  setMonthsHidden(true);
                }}
                className="text-sm px-3 py-1 text-white bg-red-500 hover:bg-red-600 rounded-md transition-colors"
              >
                Reset
              </button>
            </div>

            {/* Filter sections */}
            <div
              className={`space-y-6 md:block overflow-hidden transform transition-transform duration-300 origin-top ${
                isFiltersOpen
                  ? "scale-y-100 overflow-visible"
                  : "scale-y-0 overflow-hidden"
              }`}
            >
              {/* Difficulty */}
              <div>
                <h3 className="font-medium mb-2">Difficulty</h3>
                <select
                  value={filters.difficulty}
                  onChange={(e) =>
                    setFilters({ ...filters, difficulty: e.target.value })
                  }
                  className="w-full p-2 border rounded"
                >
                  <option value="All">All</option>
                  <option value="Easy">Easy</option>
                  <option value="Moderate">Moderate</option>
                  <option value="Challenging">Challenging</option>
                </select>
              </div>

              {/* Duration */}
              <div>
                <h3 className="font-medium mb-2">Duration</h3>
                <select
                  value={filters.duration}
                  onChange={(e) =>
                    setFilters({ ...filters, duration: e.target.value })
                  }
                  className="w-full p-2 border rounded"
                >
                  <option value="">Any duration</option>
                  <option value="1-7">1-7 days</option>
                  <option value="8-14">8-14 days</option>
                  <option value="15+">15+ days</option>
                </select>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="font-medium mb-2">Price Range</h3>
                <select
                  value={filters.priceRange}
                  onChange={(e) =>
                    setFilters({ ...filters, priceRange: e.target.value })
                  }
                  className="w-full p-2 border rounded"
                >
                  <option value="">Any price</option>
                  <option value="0-10000">₹0 - ₹10,000</option>
                  <option value="10000-20000">₹10,000 - ₹20,000</option>
                  <option value="20000+">₹20,000+</option>
                </select>
              </div>

              {/* Altitude*/}
              <div>
                <h3 className="font-medium mb-2">Altitude</h3>
                <select
                  value={filters.altitude}
                  onChange={(e) =>
                    setFilters({ ...filters, altitude: e.target.value })
                  }
                  className="w-full p-2 border rounded"
                >
                  <option value="">Any Altitude</option>
                  <option value="0-15000-">Below 15,000 ft</option>
                  <option value="15000-18000">15,000 ft - 18,000ft</option>
                  <option value="18000+">Above 18000 ft</option>
                </select>
              </div>

              {/* Best Time to Visit */}
              <div>
                <h3 className="font-medium mb-2">Best Time to Visit</h3>
                <div className="relative">
                  <button
                    className="w-full p-2 border rounded bg-[#efefef] text-left"
                    onClick={(e) => {
                      e.preventDefault();
                      setMonthsHidden((prev) => !prev);
                    }}
                  >
                    <p>Select Months</p>
                    <Image
                      src={DownArrowIcon}
                      alt="Down arrow icon"
                      width={10}
                      height={10}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className={`absolute right-2 top-4 transition-transform ${
                        monthsHidden ? "" : "rotate-180"
                      }`}
                    />
                  </button>
                  <div
                    id="monthDropdown"
                    className={`absolute z-50 w-full bg-white border rounded shadow-lg p-2 ${
                      monthsHidden ? "hidden" : ""
                    }`}
                    style={{
                      bottom: "100%", // Position above the button
                      marginBottom: "0.5rem", // Add spacing between button and dropdown
                    }}
                  >
                    {ALL_MONTHS.map((month) => (
                      <div key={month} className="flex items-center mb-1">
                        <input
                          type="checkbox"
                          id={month}
                          value={month}
                          checked={filters.month.includes(month)}
                          onChange={(e) => {
                            const { value, checked } = e.target;
                            setFilters((prev) => ({
                              ...prev,
                              month: checked
                                ? [...prev.month, value]
                                : prev.month.filter((m) => m !== value),
                            }));
                          }}
                          className="mr-2"
                        />
                        <label htmlFor={month} className="text-sm">
                          {month}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* search */}
              <div className="p-[2px]">
                <h3 className="font-medium mb-2">Search</h3>
                <form onSubmit={handleSearch} className="w-full">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search adventures..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <Search
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                      size={20}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="lg:col-span-9 mt-8 lg:mt-0">
          {(() => {
            const filteredActivities = activities.filter((activity) => {
              if (
                searchQuery &&
                !activity.title
                  .toLowerCase()
                  .includes(searchQuery.toLowerCase())
              ) {
                return false;
              }
              if (
                filters.difficulty &&
                filters.difficulty !== "All" &&
                activity.difficulty !== filters.difficulty
              )
                return false;
              if (
                filters.month.length > 0 &&
                !filters.month.some((m) => activity.popularMonths.includes(m))
              ) {
                return false;
              }
              if (filters.duration) {
                const [min, max] = filters.duration.split("-").map(Number);
                const activityDays = parseInt(activity.duration);
                if (max) {
                  if (activityDays < min || activityDays > max) return false;
                } else {
                  if (activityDays < 15) return false;
                }
              }
              if (filters.priceRange) {
                const [min, max] = filters.priceRange.split("-").map(Number);
                if (max) {
                  if (activity.price < min || activity.price > max)
                    return false;
                } else {
                  if (activity.price < 20000) return false;
                }
              }
              if (filters.altitude) {
                const [min, max] = filters.altitude.split("-").map(Number);
                const extractedNumber = parseInt(
                  activity.altitude.replace(/[^\d]/g, ""),
                  10
                );
                if (max) {
                  if (extractedNumber < min || extractedNumber > max)
                    return false;
                } else {
                  if (extractedNumber < 18000) return false;
                }
              }
              return true;
            });

            return filteredActivities.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredActivities.map((activity) => (
                  <div
                    key={activity.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
                    onClick={() => router.push(`/activities/${activity.slug}`)}
                  >
                    <div className="relative h-48">
                      <Image
                        src={activity.images[0]}
                        alt={activity.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-2 line-clamp-1">
                        {activity.title}
                      </h3>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-2" />
                          {activity.location}
                        </div>
                        <div className="flex items-center">
                          <Clock size={16} className="mr-2" />
                          {activity.duration}
                        </div>
                        <div className="flex items-center">
                          <Users size={16} className="mr-2" />
                          {activity.groupSize}
                        </div>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-2xl font-bold text-green-600">
                          ₹{activity.price}
                        </span>
                        <span
                          className={`
                          px-3 py-1 rounded-full text-sm
                          ${
                            activity.difficulty === "Easy"
                              ? "bg-green-100 text-green-800"
                              : activity.difficulty === "Moderate"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                          }
                        `}
                        >
                          {activity.difficulty}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-10">
                <p className="text-gray-500 text-lg">
                  No activities available for the selected filters.
                </p>
              </div>
            );
          })()}
        </main>
      </div>
    </div>
  );
}

export default function ActivitiesPage() {
  return (
    <Suspense
      fallback={
        <MainLayout>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center">Loading activities...</div>
          </div>
        </MainLayout>
      }
    >
      <ActivitiesContent />
    </Suspense>
  );
}
