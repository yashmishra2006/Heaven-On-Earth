import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or want to learn more about our programs? Reach out to us.
          </p>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-green-700 p-6 text-white">
              <h3 className="text-xl font-semibold mb-2">Get In Touch</h3>
              <p className="text-green-100">
                We'd love to hear from you. Send us a message or visit our office.
              </p>
            </div>
            
            <div className="p-6 space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <MapPin className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-3">
                  <h4 className="text-gray-900 font-medium">Address</h4>
                  <p className="text-gray-600 mt-1">
                    E3/8, Sector 11, Rohini,
                    <br />
                    Delhi-110085, India
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Phone className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-3">
                  <h4 className="text-gray-900 font-medium">Phone</h4>
                  <p className="text-gray-600 mt-1">+91 9312130306</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Mail className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-3">
                  <h4 className="text-gray-900 font-medium">Email</h4>
                  <p className="text-gray-600 mt-1">heavenonearth.change@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Clock className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-3">
                  <h4 className="text-gray-900 font-medium">Office Hours</h4>
                  <p className="text-gray-600 mt-1">
                    Monday - Friday: 9:00 AM - 5:00 PM
                    <br />
                    Saturday: 10:00 AM - 2:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Send Us a Message</h3>
              
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="contact-name" className="block text-gray-700 font-medium mb-1">Your Name *</label>
                    <input
                      type="text"
                      id="contact-name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="contact-email" className="block text-gray-700 font-medium mb-1">Email Address *</label>
                    <input
                      type="email"
                      id="contact-email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="contact-phone" className="block text-gray-700 font-medium mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="contact-phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="contact-subject" className="block text-gray-700 font-medium mb-1">Subject *</label>
                    <input
                      type="text"
                      id="contact-subject"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="contact-message" className="block text-gray-700 font-medium mb-1">Message *</label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full py-3 bg-green-700 text-white font-medium rounded-md hover:bg-green-800 transition-colors shadow-md"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="mt-12 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="aspect-w-16 aspect-h-9 h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.9508476767097!2d77.1114271!3d28.7115949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0138a74f7da7%3A0xf09b9b0b6c5bbb79!2sSector%2011%2C%20Rohini%2C%20Delhi%2C%20110085!5e0!3m2!1sen!2sin!4v1656567125879!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Heaven on Earth Foundation location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;