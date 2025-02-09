import Recognition from "@/components/features/Recognition";
import Image from "next/image";
import AboutImage from "../../assets/activities/BuranGhati/buran-ghati4.jpg";
import FounderImage from "../../assets/founder.jpg";
import CoFounderImage1 from "../../assets/co-founder1.jpg";
import CoFounderImage2 from "../../assets/co-founder2.jpg";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Sanjay Negi",
      position: "Founder",
      image: FounderImage,
      bio: "8+ years of mountaineering experience in the Himalayas",
    },
    {
      name: "Ranjeet Negi",
      position: "Co-Founder",
      image: CoFounderImage1,
      bio: "Expert in adventure tour planning and logistics",
    },
    {
      name: "Ashish Negi",
      position: "Co-Founder",
      image: CoFounderImage2,
      bio: "Expert in adventure tour planning and logistics",
    },
    // Add more team members as needed
  ];

  return (
    <div className="bg-white">
      {/* About Company Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
            About Hike in Himalaya
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                At Hike in Himalayas, we believe that trekking is more than just
                a journey through the majestic landscapes of the Himalayas—it's
                an experience that connects you to nature, adventure, and the
                rich heritage of these mountains.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our story began eight years ago, rooted in a deep love for the
                trails and peaks of the Himalayas. Founded by locals who grew up
                exploring these awe-inspiring landscapes, Hike in Himalayas
                started as a humble trek equipment rental service. Fueled by a
                passion for sharing the wonders of the region, we soon began
                guiding small groups on local treks, introducing them to hidden
                gems and untouched beauty that only seasoned locals know.
              </p>
              <p className="text-lg text-gray-600">
                As word spread, our adventure naturally evolved. What started as
                small group treks grew into a professional trekking service
                dedicated to offering personalized and authentic Himalayan
                experiences. Today, we are proud to provide not only expertly
                guided treks but also high-quality trekking equipment rentals to
                ensure you have a safe and memorable journey.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src={AboutImage}
                alt="Himalayan landscape"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-green-600">
                Small Group Sizes
              </h3>
              <p className="text-gray-600">
                We keep our group sizes intentionally small to ensure a more intimate and personalized experience.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-green-600">
                Customized Trekking Experiences
              </h3>
              <p className="text-gray-600">
                Whether you're seeking a challenging adventure or a serene nature retreat, we offer the flexibility to customize your trek to match your preferences.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-green-600">
                Experienced Local Guides
              </h3>
              <p className="text-gray-600">
                Our guides and trek leaders are locals who know the trails like the back of their hands. Their extensive knowledge, passion, and commitment to your safety make every trek an unforgettable adventure.
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-lg text-gray-600 mb-4">
              At Hike in Himalayas, we're not just your guides—we're fellow explorers who share your love for the mountains. Whether you're a seasoned trekker or a first-timer, we invite you to join us and experience the Himalayas like never before.
            </p>
            <p className="text-lg font-semibold text-green-600">
              Your next great adventure awaits. Let's trek together!
            </p>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-green-600 mb-2">{member.position}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Recognition />
    </div>
  );
}
