import React from 'react';
import { Users, BookOpen, Home, Award } from 'lucide-react';

const Impact: React.FC = () => {
  const impactStats = [
    {
      icon: <Users className="h-10 w-10 text-orange-500" />,
      count: '5,000+',
      label: 'Women Trained',
      description: 'Empowered with vocational skills for financial independence'
    },
    {
      icon: <BookOpen className="h-10 w-10 text-orange-500" />,
      count: '10,000+',
      label: 'Children Educated',
      description: 'Provided quality education and digital literacy'
    },
    {
      icon: <Home className="h-10 w-10 text-orange-500" />,
      count: '50+',
      label: 'Villages Reached',
      description: 'Extended our programs to remote communities'
    },
    {
      icon: <Award className="h-10 w-10 text-orange-500" />,
      count: '12',
      label: 'Years of Service',
      description: 'Committed to creating sustainable change'
    }
  ];

  return (
    <section id="impact" className="py-20 bg-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Through dedication and community partnership, we've created measurable change in the lives of thousands.
          </p>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactStats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-green-700 rounded-lg p-6 text-center transform transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold mb-2">{stat.count}</h3>
              <h4 className="text-xl font-semibold mb-2">{stat.label}</h4>
              <p className="text-gray-200">{stat.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-green-700 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Beneficiary Stories</h3>
            <div className="space-y-6">
              <div className="bg-green-600 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <img 
                    src="/gallery/student-photo.jpg"
                    alt="Student" 
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">Rahul Kumar</h4>
                    <p className="text-sm text-gray-200">Computer Literacy Program</p>
                  </div>
                </div>
                <p className="text-gray-200 italic">
                  "The computer literacy program opened new doors for me. I now work as a data entry operator and am continuing my education."
                </p>
              </div>
              <div className="bg-green-600 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <img 
                    src="/gallery/jewelry-student.jpg"
                    alt="Jewelry Making Student" 
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">Meena Devi</h4>
                    <p className="text-sm text-gray-200">Jewelry Making Program</p>
                  </div>
                </div>
                <p className="text-gray-200 italic">
                  "After completing the jewelry making program, I started my own small business. Now I can support my family and send my children to school."
                </p>
              </div>
            </div>
          </div>

          <div className="bg-green-700 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Donor Testimonials</h3>
            <div className="space-y-6">
              <div className="bg-green-600 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center mr-4">
                    <span className="text-2xl font-bold">RK</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Rajesh Kumar</h4>
                    <p className="text-sm text-gray-200">Monthly Donor since 2020</p>
                  </div>
                </div>
                <p className="text-gray-200 italic">
                  "Seeing the direct impact of my contributions through regular updates gives me immense satisfaction. The foundation's transparency and dedication to the cause is commendable."
                </p>
              </div>
              <div className="bg-green-600 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center mr-4">
                    <span className="text-2xl font-bold">SP</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Sunita Patel</h4>
                    <p className="text-sm text-gray-200">Corporate Partner</p>
                  </div>
                </div>
                <p className="text-gray-200 italic">
                  "Our company's partnership with Heaven on Earth Foundation has been incredibly rewarding. Their systematic approach to community development and regular impact reports make them an ideal CSR partner."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;