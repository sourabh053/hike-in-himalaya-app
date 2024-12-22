"use client";

import { Check, X } from "lucide-react";

interface PackageDetailsProps {
  inclusions: string[];
  exclusions: string[];
}

export default function PackageDetails({ inclusions, exclusions }: PackageDetailsProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 my-8">
      <h2 className="text-xl font-semibold mb-6">Package Details</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Inclusions */}
        <div>
          <h3 className="text-lg font-medium mb-4 text-gray-900">
            What&apos;s Included
          </h3>
          <ul className="space-y-3">
            {inclusions.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Exclusions */}
        <div>
          <h3 className="text-lg font-medium mb-4 text-gray-900">
            What&apos;s Not Included
          </h3>
          <ul className="space-y-3">
            {exclusions.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}