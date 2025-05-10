import React from 'react';
import { Heart } from 'lucide-react';

const BeggarAssistance: React.FC = () => {
  return (
    <section className="relative h-[600px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="./gallery/street-effort.jpg"
          alt="Street Support Initiative"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
      </div>
      
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl text-white">
          <div className="  flex items-center mb-4">
            <Heart className="h-8 w-8 text-orange-400 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold">Street Support Initiative</h2>
          </div>
          
          <div className="h-1 w-20 bg-orange-500 mb-6" />
          
          <p className="text-xl text-gray-200 mb-6">
            In January 2024, we launched a comprehensive support program for street dwellers,
            providing essential supplies, medical care, and rehabilitation opportunities.
          </p>
          
          <div className="space-y-4 text-gray-200">
            <div className="flex items-start">
              <div className="h-2 w-2 bg-orange-400 rounded-full mt-2 mr-3" />
              <p>Distributed warm meals and clothing to over 200 individuals</p>
            </div>
            <div className="flex items-start">
              <div className="h-2 w-2 bg-orange-400 rounded-full mt-2 mr-3" />
              <p>Provided basic medical check-ups and essential medicines</p>
            </div>
            <div className="flex items-start">
              <div className="h-2 w-2 bg-orange-400 rounded-full mt-2 mr-3" />
              <p>Connected beneficiaries with job opportunities and skill development programs</p>
            </div>
          </div>
          
          <button className="mt-8 px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors">
            Support Our Initiative
          </button>
        </div>
      </div>
    </section>
  );
};

export default BeggarAssistance;