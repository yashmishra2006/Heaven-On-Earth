import React from 'react';
import PhotoCollage from './PhotoCollage';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <PhotoCollage />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Us</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
      </div>
      </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="/gallery/group-photo.jpg"
              alt="Heaven on Earth Foundation team" 
              className="rounded-lg shadow-xl w-full h-auto object-cover" 
            />
            <div className="absolute -bottom-6 -right-6 bg-orange-500 p-6 rounded-lg shadow-lg hidden md:block">
              <p className="text-white font-bold text-xl">Since 2010</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-green-800 mb-4">Our Journey</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Heaven on Earth Foundation was established with a mission to create sustainable change in the lives of underprivileged communities in Delhi. We believe in the power of education, skill development, and community empowerment to break the cycle of poverty.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Our grassroots approach focuses on understanding the unique challenges faced by each community we serve, and developing tailored solutions that address their specific needs while respecting their cultural context.
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Message from our President</h4>
              <p className="text-gray-700 italic">
                "We envision a society where every individual has equal opportunities to thrive and contribute. Our foundation is committed to civic-driven transformation that empowers communities to become self-reliant and prosperous. Together, we can create a better future for all."
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                <h5 className="text-green-800 font-semibold mb-2">Our Mission</h5>
                <p className="text-gray-700 text-sm">To empower underprivileged communities through education, skill development, and sustainable initiatives.</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                <h5 className="text-green-800 font-semibold mb-2">Our Vision</h5>
                <p className="text-gray-700 text-sm">A world where every individual has the opportunity to live with dignity, equality, and prosperity.</p>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default About;