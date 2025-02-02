import Recognition from '@/components/features/Recognition'
import Image from 'next/image'
import AboutImage from "../../assets/activities/BuranGhati/buran-ghati4.jpg";

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Rajesh Negi',
      position: 'Founder & Lead Guide',
      image: AboutImage,
      bio: '15+ years of mountaineering experience in the Himalayas'
    },
    {
      name: 'Ranjeet Negi',
      position: 'Operations Manager',
      image: AboutImage,
      bio: 'Expert in adventure tour planning and logistics'
    },
    // Add more team members as needed
  ]

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
                Founded in 2010, Hike in Himalaya has been at the forefront of adventure tourism
                in the Himalayan region. We specialize in creating unforgettable experiences
                that combine the thrill of adventure with the rich cultural heritage of the
                Himalayas.
              </p>
              <p className="text-lg text-gray-600">
                Our team of experienced guides and adventure specialists ensures that every
                expedition is not just safe but also enriching, educational, and environmentally
                conscious.
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

      {/* Our Vision Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Our Vision
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-green-600">Adventure Excellence</h3>
              <p className="text-gray-600">
                To provide world-class adventure experiences while maintaining the highest
                safety standards and environmental responsibility.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-green-600">Community Impact</h3>
              <p className="text-gray-600">
                To support local communities and promote sustainable tourism practices
                that benefit both visitors and residents.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-green-600">Cultural Preservation</h3>
              <p className="text-gray-600">
                To preserve and promote the rich cultural heritage of the Himalayan
                region while facilitating meaningful cultural exchanges.
              </p>
            </div>
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
  )
} 