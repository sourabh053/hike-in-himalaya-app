"use client";

import Image from "next/image";
import TripAdviser from "../../assets/TripAdvisorLogo.svg";
import HimachalTourism from "../../assets/Himachal_Tourism.svg";

const recognitions = [
  {
    id: 1,
    name: "Trip adviser",
    image: TripAdviser,
  },
  {
    id: 2,
    name: "Himachal Tourism",
    image: HimachalTourism,
  },
];

const Recognition = () => {
  return (
    <section className="pt-8 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Recognition & Association
        </h2>
        <div className="flex justify-center gap-5">       
          {recognitions.map((recognition) => (
            
              <Image
                src={recognition.image}
                alt={recognition.name}
                width={100}
                height={recognition.id === 1 ? 100 : 70}
                // fill
                className="object-cover"
                sizes="(max-width: 768px) 10vw, (max-width: 1200px) 50vw, 33vw"
                key={recognition.id}
              />
            
          ))}          
        </div>
      </div>
    </section>
  );
};

export default Recognition;
