"use client";

import { CheckCircle2 } from "lucide-react";

interface ChecklistItem {
  name: string;
  essential: boolean;
}

interface ChecklistCategory {
  title: string;
  items: ChecklistItem[];
}

const checklistData: ChecklistCategory[] = [
  {
    title: "Trekking Gear",
    items: [
      { name: "Ruck sack bag with rain cover. Qty -1", essential: true },
      {
        name: "Day Pack Bag - Recommended for treks with summit day",
        essential: true,
      },
      { name: "Head Torch with spare Batteries. Qty -1", essential: true },
      { name: "U V protection sunglasses. Qty -1", essential: true },
      { name: "Water Bottles: 2 bottles of 1 liter each", essential: true },
    ],
  },
  {
    title: "Clothing",
    items: [
      { name: "Quick Dry Warm lower or Track Pants. Qty - 2", essential: true },
      {
        name: "Full sleeves T-shirts/ Sweatshirts. 1 for every 2 days of trekking",
        essential: true,
      },
      {
        name: "Pair of thick woolen socks. 1 pair for every two days of trekking",
        essential: true,
      },
      { name: "Thermal Body warmer Upper & Lower. Qty-1", essential: true },
      {
        name: "Undergarments. Qty - 1 for every day of trekking",
        essential: true,
      },
      { name: "Warm jacket closed at wrist & neck .Qty-1", essential: true },
      { name: "Full sleeves sweater. Qty -1", essential: true },
      { name: "Rain wear ( Jacket & Pants ) . Qty-1", essential: true },
      { name: "Pair of waterproof, warm gloves. Qty-1", essential: true },
      { name: "Woolen cap. Qty-1", essential: true },
      { name: "Sun shielding Hat. Qty -1", essential: true },
    ],
  },
  {
    title: "Footwear",
    items: [
      {
        name: "Non-skid, deep treaded, high-ankle trekking shoes Qty -1",
        essential: true,
      },
      { name: "Pair of light weight Slipper/Sandals Qty -1", essential: true },
      { name: "Camp Sandals", essential: false },
    ],
  },
  {
    title: "Toiletries",
    items: [
      {
        name: "Personal toiletries kit (Small Towel, Toilet paper, paper soap, Bar soap, toothbrush, toothpaste, cold cream, etc.)",
        essential: true,
      },
      {
        name: "Sun screen lotion small pack. Qty -1 (Here is your Sun Protection 101 to stay safe in the bright sunny outdoors.)",
        essential: true,
      },
      {
        name: "Lip Balm small pack. Qty-1",
        essential: true,
      },
    ],
  },
  {
    title: "Utensils",
    items: [
      {
        name: "Small size, Light weight & Leak proof lunch box. Qty-1",
        essential: true,
      },
      {
        name: "Plate. Qty-1",
        essential: true,
      },
      {
        name: "Spoon. Qty-1",
        essential: true,
      },
      {
        name: "Tea/Coffee (plastic) Mug. Qty-1",
        essential: true,
      },
    ],
  },
  {
    title: "Miscellaneous",
    items: [
      {
        name: "Camera",
        essential: false,
      },
      {
        name: "Carry your medicines in plenty in case you have any specific ailment. Consult your doctor before joining the trek.",
        essential: true,
      },
      {
        name: "Dry fruits, Nuts, Chocolate bars",
        essential: false,
      },
    ],
  },
];

export default function TrekkingChecklist() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 my-8">
      <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
        <CheckCircle2 className="w-5 h-5 text-green-500" />
        Essential Trek Equipment
      </h2>
      <p className="text-gray-600 mb-4">
        Here is a list of essential items for participants trekking with Hike In
        Himalayas. It includes only the items that participants must bring
        themselves, excluding those provided by Bikat Adventures during the
        trek. The list is organized into five categories, with all items being
        essential unless marked as optional.
      </p>
      <div className="space-y-8">
        {checklistData.map((category, idx) => (
          <div key={idx}>
            <h3 className="text-lg font-medium mb-4 text-gray-900">
              {category.title}
            </h3>
            <ul className="space-y-3">
              {category.items.map((item, itemIdx) => (
                <li key={itemIdx} className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                  <span className="text-gray-600">
                    {item.name}
                    {!item.essential && (
                      <span className="text-gray-400 text-sm ml-2">
                        (Optional)
                      </span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
