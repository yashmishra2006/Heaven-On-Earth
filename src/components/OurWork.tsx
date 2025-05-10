import React, { useState } from 'react';
import { Briefcase, BookOpen, Gem, Cog as Yoga, Gift, Music, Heart, Leaf, School } from 'lucide-react';

interface WorkCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  image: string;
}

const OurWork: React.FC = () => {
  const categories: WorkCategory[] = [
    {
      id: 'independence',
      title: 'Independence Day Celebrations',
      icon: <Gift className="h-6 w-6 text-green-700" />,
      description: 'Annual celebrations bringing communities together to honor our nation and instill patriotic values in children.',
      image: './gallery/class-photo.jpg'
    },
    {
      id: 'vocational',
      title: 'Silai Kadai & Vocational Training',
      icon: <Briefcase className="h-6 w-6 text-green-700" />,
      description: 'Empowering women with sewing and tailoring skills to achieve financial independence and sustainable livelihoods.',
      image: 'https://images.pexels.com/photos/3961581/pexels-photo-3961581.jpeg'
    },
    {
      id: 'jewelry',
      title: 'Artificial Jewellery / Papad Making',
      icon: <Gem className="h-6 w-6 text-green-700" />,
      description: 'Training programs for women to create beautiful jewelry and traditional food products for economic empowerment.',
      image: 'https://images.pexels.com/photos/1458867/pexels-photo-1458867.jpeg'
    },
    {
      id: 'education',
      title: 'Education & Computer Literacy',
      icon: <BookOpen className="h-6 w-6 text-green-700" />,
      description: 'Providing quality education and digital literacy to bridge the technology gap and create future opportunities.',
      image: 'https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg'
    },
    {
      id: 'health',
      title: 'Yoga and Health Camps',
      icon: <Yoga className="h-6 w-6 text-green-700" />,
      description: 'Promoting holistic well-being through yoga sessions and regular health check-ups for communities.',
      image: 'https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg'
    },
    {
      id: 'cultural',
      title: 'Cultural Programs & Tribal Workshops',
      icon: <Music className="h-6 w-6 text-green-700" />,
      description: 'Preserving and celebrating cultural heritage through performances, workshops, and community engagement.',
      image: 'https://images.pexels.com/photos/1430931/pexels-photo-1430931.jpeg'
    },
    {
      id: 'covid',
      title: 'Covid-19 Relief Work',
      icon: <Heart className="h-6 w-6 text-green-700" />,
      description: 'Emergency response initiatives providing essential supplies, medical aid, and support during the pandemic.',
      image: 'https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg'
    },
    {
      id: 'environment',
      title: 'Environmental Initiatives',
      icon: <Leaf className="h-6 w-6 text-green-700" />,
      description: 'Tree plantation drives and awareness programs promoting environmental conservation and sustainability.',
      image: 'https://images.pexels.com/photos/4201831/pexels-photo-4201831.jpeg'
    },
    {
      id: 'infrastructure',
      title: 'Infrastructure Contributions',
      icon: <School className="h-6 w-6 text-green-700" />,
      description: 'Providing essential infrastructure like desks, chairs, and learning materials to under-resourced schools.',
      image: 'https://images.pexels.com/photos/5905445/pexels-photo-5905445.jpeg'
    }
  ];

  const [activeCategory, setActiveCategory] = useState<string>(categories[0].id);

  const activeItem = categories.find(cat => cat.id === activeCategory);

  return (
    <section id="work" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Work</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We implement various programs to create sustainable impact across different aspects of community development.
          </p>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center w-full p-4 rounded-lg transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-green-700 text-white shadow-md'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                }`}
              >
                <span className="mr-3">{category.icon}</span>
                <span className="font-medium">{category.title}</span>
              </button>
            ))}
          </div>

          <div className="lg:col-span-2 bg-gray-50 rounded-xl overflow-hidden shadow-lg">
            {activeItem && (
              <div className="h-full flex flex-col">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={activeItem.image}
                    alt={activeItem.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{activeItem.title}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">{activeItem.description}</p>
                  
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="text-lg font-semibold text-green-800 mb-2">Our Approach</h4>
                    <p className="text-gray-700">
                      We focus on sustainable solutions that empower communities to become self-reliant.
                      Our programs are designed with community input and participation to ensure they address real needs.
                    </p>
                  </div>
                </div>
                <div className="p-6 bg-green-50">
                  <a href="#involved" className="text-green-700 font-medium hover:text-green-800 transition-colors">
                    Want to support this initiative? Get involved →
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWork;