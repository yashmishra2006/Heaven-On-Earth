import React from 'react';
import { Calendar, Award } from 'lucide-react';

const PastEvents: React.FC = () => {
  const events = [
    {
      title: "Bhu Worth Child Club Launch",
      date: "March 2024",
      description: "Launched free education program for underprivileged children with sports skills and music classes",
      image: "/gallery/class-photo.jpg"
    },
    {
      title: "Jewelry Making Workshop",
      date: "February 2024",
      description: "Conducted skill development workshop teaching artificial jewelry making to empower local women",
      image: "/gallery/jewelry-workshop.jpg"
    }
  ];

  const awards = [
    {
      title: "Best NGO Award 2023",
      organization: "Delhi Social Welfare Board",
      description: "Recognized for outstanding contribution to community development"
    },
    {
      title: "Excellence in Education",
      organization: "Ministry of Education",
      description: "Awarded for innovative approaches in children's education"
    }
  ];

  return (
    <section id="past-events" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
        </div>

        {/* Past Events */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-green-800 mb-8 flex items-center justify-center">
            <Calendar className="mr-2" /> Recent Events
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h4>
                  <p className="text-orange-600 mb-3">{event.date}</p>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Awards */}
        <div>
          <h3 className="text-2xl font-semibold text-green-800 mb-8 flex items-center justify-center">
            <Award className="mr-2" /> Awards & Recognition
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{award.title}</h4>
                <p className="text-orange-600 mb-3">{award.organization}</p>
                <p className="text-gray-600">{award.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PastEvents;