"use client";

import { useParams } from "next/navigation";
import MainLayout from "@/components/layout/MainLayout";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import Image from "next/image";
import { activities } from "@/data/activities";
import StatsPanel from "@/components/features/StatsPanel";
import Timeline from "@/components/features/Timeline";
import PackageDetails from "@/components/features/PackageDetails";
import TrekkingChecklist from "@/components/features/TrekkingChecklist";
import ImageGallery from "@/components/features/ImageGallery";
import ImageIcon from "@/assets/photos-icon.svg";
import DownArrowIcon from "@/assets/down-arrow.svg";
import { useRef } from "react";
import Script from "next/script";

declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => RazorpayInstance;
  }
}

interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  handler: (response: RazorpayResponse) => void;
  prefill?: {
    name: string;
    email: string;
    contact: string;
  };
}

interface RazorpayResponse {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}

interface RazorpayInstance {
  open: () => void;
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

export default function ActivityPage() {
  const params = useParams();
  const activity = activities.find((a) => a.slug === params.slug);
  // const handlePayment = async () => {
  //   if (!activity) {
  //     console.error("Activity not found");
  //     return; // Exit if activity is undefined
  //   }
  //   try {
  //     const res = await fetch("/api/createOrder", {
  //       method: "POST",
  //       body: JSON.stringify({ amount: activity.price * 100 }),
  //     });
  //     const data = await res.json();
  //     const razorpayKey = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;

  //     if (!razorpayKey) {
  //       console.error("Razorpay key is not defined");
  //       return; // Exit if key is undefined
  //     }

  //     const paymentData = {
  //       key: razorpayKey,
  //       amount: data.amount,
  //       currency: "INR",
  //       name: "Hike In Himalaya",
  //       description: "Test Description",
  //       order_id: data.id,
  //       handler: async function (response: RazorpayResponse) {
  //         //verify payment
  //         const res = await fetch("/api/verifyOrder", {
  //           method: "POST",
  //           body: JSON.stringify({
  //             orderId: response.razorpay_order_id,
  //             razorpayPaymentId: response.razorpay_payment_id,
  //             razorpaySignature: response.razorpay_signature,
  //           }),
  //         });
  //         const data = await res.json();
  //         console.log(data);
  //         if (data.isOk) {
  //           alert("Payment successful");
  //         } else {
  //           alert("Payment failed");
  //         }
  //       },
  //       prefill: {
  //         name: "Jhon Doe",
  //         email: "jhondoe@gmail.com",
  //         contact: "9999999999",
  //       },
  //     };

  //     const payment = new window.Razorpay(paymentData);
  //     payment.open();
  //   } catch (error) {
  //     console.error("Payment Failed", error);
  //   }
  // };

  const handleHostedCheckout = async () => {
    if (!activity) {
      console.error("Activity not found");
      return;
    }

    try {
      // Step 1: Create an order via API
      const res = await fetch("/api/createOrder", {
        method: "POST",
        body: JSON.stringify({ amount: activity.price * 100 }), // Amount in paise
      });

      const orderData = await res.json();

      if (!orderData.id) {
        throw new Error("Failed to generate order ID");
      }

      // Step 2: Redirect to the Razorpay hosted checkout URL with the order ID
      const baseUrl = getBaseUrl(activity?.slug);
      const hostedCheckoutUrl = `${baseUrl}?order_id=${orderData.id}`;
      window.location.href = hostedCheckoutUrl;
    } catch (error) {
      console.error("Error in hosted checkout:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  const getBaseUrl = (slug: string): string => {
    switch (slug) {
      case "buran-ghati-trek":
        return "https://pages.razorpay.com/pl_PjoSRJTGzGZJQ1/view";
      case "chandernahan-lake-trek":
        return "https://pages.razorpay.com/pl_Pjoz8SUATaxwWC/view";
      case "pin-parvati-pass":
        return "https://pages.razorpay.com/pl_Pjp2IOgms74VZP/view";
      case "rupin-pass-trek":
        return "https://pages.razorpay.com/pl_Pjp59Dx4kOa4z4/view";
      case "kedarkantha-trek":
        return "https://pages.razorpay.com/pl_PjPZdNOYWtKTd3/view";
      case "pin-bhaba-pass-trek":
        return "https://pages.razorpay.com/pl_PjpBWOxNXhLtkh/view";
      case "hampta-pass-trek":
        return "https://pages.razorpay.com/pl_PjpCGKPbWIw5kX/view";
      case "friendship-peak-trek":
        return "https://pages.razorpay.com/pl_PjpD8YCtaOQTfC/view";
      case "kashmir-great-lakes-trek":
        return "https://pages.razorpay.com/pl_PjpEEukEQG6bwU/view";
      case "parang-la-expedition":
        return "https://pages.razorpay.com/pl_PjpFIk7w1v5vHa/view";
      case "bhrigu-lake-trek":
        return "https://pages.razorpay.com/pl_PjpGNDWeiYX4co/view";
      case "kang-yatse-ii-peak-expedition":
        return "https://pages.razorpay.com/pl_PjpJOMngRtrdFE/view";
      case "everest-base-camp-trek":
        return "https://pages.razorpay.com/pl_PjpHhbnUZHnPeh/view";
      case "annapurna-circuit-trek":
        return "https://pages.razorpay.com/pl_PjpL9WYWQBLjfs/view";
      case "black-peak-expedition":
        return "https://pages.razorpay.com/pl_PjpLzGynm1BK4b/view";
      // Add more cases for other treks
      default:
        return "https://pages.razorpay.com/pl_PjPZdNOYWtKTd3/view"; // fallback to first image
    }
  };
  const images =
    activity?.images.map((image) => ({
      src: typeof image === "string" ? image : image.src, // Handle both string and StaticImageData
      caption: "",
    })) || []; // Provide empty array fallback

  const sectionRef = useRef<HTMLDivElement>(null);

  const handleScrollToSection = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  if (!activity) {
    return (
      <MainLayout>
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900">
            Activity not found
          </h1>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        type="text/javascript"
      />
      <div className="max-w-7xl mx-auto pb-8">
        <div className="relative w-full h-[75vh] mb-8">
          <div className="absolute inset-0">
            <Image
              src={activity.images[getHeroImageIndex(activity.slug)]}
              alt={activity.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          <div className="relative h-full max-w-7xl mx-auto px-4 py-10 flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-8">
              {activity.title}
            </h1>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="px-8 py-3 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors"
                onClick={handleHostedCheckout}
              >
                Book Now
              </button>
              <button 
                className="px-8 py-3 bg-[#FF5722] text-white rounded-full hover:bg-[#f4511e] transition-colors"
                onClick={() => window.open('https://wa.me/919805203783', '_blank')}
              >
                Enquire Now
              </button>
            </div>

            <div className="absolute bottom-6 right-4 sm:bottom-16 sm:right-16">
              <button
                className="flex items-center space-x-2 rounded-full bg-white shadow-lg px-4 py-2 text-sm font-medium text-gray-800 hover:shadow-xl transition-all"
                onClick={handleScrollToSection}
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-yellow-400">
                  <Image
                    src={ImageIcon}
                    alt="Gallery icon"
                    width={20}
                    height={20}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <span>Gallery</span>
                {/* Down Arrow */}
                <Image
                  src={DownArrowIcon}
                  alt="Down arrow icon"
                  width={12}
                  height={12}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="px-4">
          <StatsPanel activity={activity} />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="px-3">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {activity.title}
                </h1>
                <p className="text-gray-600 mb-6">{activity.longDescription}</p>
              </div>

              <Timeline activity={activity} />
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Calendar className="w-5 h-5 text-gray-600" />
                  <h2 className="text-xl font-semibold">Detailed Itinerary</h2>
                </div>
                <div className="space-y-4">
                  {activity.itinerary.map((day) => (
                    <div key={day.day} className="border-b pb-4">
                      <h3 className="font-medium">
                        Day {day.day}: {day.title}
                      </h3>
                      <p className="text-gray-600 mt-1">{day.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <PackageDetails
                inclusions={activity.inclusions}
                exclusions={activity.exclusions}
              />

              <TrekkingChecklist />
              <div ref={sectionRef}>
                <h2 className="text-xl font-semibold mb-6">Gallery</h2>
                <ImageGallery images={images} />
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-32">
                <div className="text-3xl font-bold text-green-600 mb-4">
                  ₹{activity.price}
                  <span className="text-sm text-gray-600">/person</span>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Clock size={20} className="mr-2" />
                    <span>{activity.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin size={20} className="mr-2" />
                    <span>{activity.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users size={20} className="mr-2" />
                    <span>{activity.groupSize}</span>
                  </div>
                </div>

                <button
                  className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors"
                  // onClick={() =>
                  //   (window.location.href = "/customize-your-trip")
                  // }
                  onClick={handleHostedCheckout}
                >
                  Book This Trip
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
