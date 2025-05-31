import React, { useState } from 'react';
import { supabase } from '../lib/supabase';

interface FormData {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
}

const GetInvolved: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { error: supabaseError } = await supabase
        .from('volunteers')
        .insert([formData]);

      if (supabaseError) throw supabaseError;

      setFormSubmitted(true);
      setError(null);

      // Reset form after submission
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          interest: '',
          message: ''
        });
        setFormSubmitted(false);
      }, 5000);
    } catch (err) {
      setError('Failed to submit form. Please try again.');
      console.error('Form submission error:', err);
    }
  };

  return (
    <section id="involved" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get Involved</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join our mission to create sustainable change. There are many ways you can contribute to our cause.
          </p>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-green-800 mb-6">Ways to Help</h3>
            
            <div className="space-y-6">
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Volunteer</h4>
                <p className="text-gray-700 mb-4">
                  Share your time and skills to support our programs. Whether you can help teach, organize events,
                  or assist with administrative tasks, your contribution makes a difference.
                </p>
                <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
                  <li>Weekend teaching programs</li>
                  <li>Skill-sharing workshops</li>
                  <li>Event organization</li>
                  <li>Administrative support</li>
                </ul>
              </div>
              
              <div id="donate" className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-600">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Donate</h4>
                <p className="text-gray-700 mb-4">
                  Support our mission with a financial contribution. Your donations help fund our programs and create lasting impact.
                </p>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="bg-white p-3 rounded text-center border border-gray-200 hover:border-orange-400 cursor-pointer transition-colors">
                    <p className="font-bold text-orange-600">₹500</p>
                    <p className="text-sm text-gray-600">Monthly</p>
                  </div>
                  <div className="bg-white p-3 rounded text-center border border-gray-200 hover:border-orange-400 cursor-pointer transition-colors">
                    <p className="font-bold text-orange-600">₹1,000</p>
                    <p className="text-sm text-gray-600">Monthly</p>
                  </div>
                  <div className="bg-white p-3 rounded text-center border border-gray-200 hover:border-orange-400 cursor-pointer transition-colors">
                    <p className="font-bold text-orange-600">₹5,000</p>
                    <p className="text-sm text-gray-600">One-time</p>
                  </div>
                </div>
                <button className="w-full py-2 bg-orange-600 text-white font-medium rounded hover:bg-orange-700 transition-colors">
                  Donate Now
                </button>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Partner With Us</h4>
                <p className="text-gray-700">
                  Organizations, schools, and businesses can partner with us for CSR initiatives, sponsorships, and collaborative projects.
                  Together we can create greater impact and reach more communities.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-green-800 mb-6">Volunteer Registration</h3>
            
            {formSubmitted && (
              <div className="bg-green-100 p-4 rounded-lg text-green-800 mb-4">
                <p className="font-medium">Thank you for your interest!</p>
                <p>We've received your information and will contact you soon about volunteer opportunities.</p>
              </div>
            )}

            {error && (
              <div className="bg-red-100 p-4 rounded-lg text-red-800 mb-4">
                <p>{error}</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="interest" className="block text-gray-700 font-medium mb-1">Area of Interest *</label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="">Select an area</option>
                    <option value="Teaching">Teaching</option>
                    <option value="Vocational Training">Vocational Training</option>
                    <option value="Health Camps">Health Camps</option>
                    <option value="Environmental Work">Environmental Work</option>
                    <option value="Event Organization">Event Organization</option>
                    <option value="Administrative Support">Administrative Support</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Tell us about your skills and availability..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full py-3 bg-green-700 text-white font-medium rounded-md hover:bg-green-800 transition-colors shadow-md"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;