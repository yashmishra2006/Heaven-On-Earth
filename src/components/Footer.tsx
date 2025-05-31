import React from 'react';
import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Heart className="h-6 w-6 text-orange-400" />
              <span className="ml-2 text-xl font-semibold">Heaven on Earth</span>
            </div>
            <p className="mb-4 text-gray-300">
              Catalyst for sustainable change in lives of underprivileged children, youth, and women.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/15D6mWxgKj/?mibextid=qi2Omg" className="text-gray-300 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/heavenonearth.change" className="text-gray-300 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="https://x.com/heavengoearth?t=6drU1r9UaOo-6RWH4BSjGg&s=08" className="text-gray-300 hover:text-white">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#work" className="text-gray-300 hover:text-white transition-colors">Our Work</a></li>
              <li><a href="#impact" className="text-gray-300 hover:text-white transition-colors">Impact</a></li>
              <li><a href="#gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Our Programs</h3>
            <ul className="space-y-2">
              <li><a href="#work" className="text-gray-300 hover:text-white transition-colors">Vocational Training</a></li>
              <li><a href="#work" className="text-gray-300 hover:text-white transition-colors">Education Camps</a></li>
              <li><a href="#work" className="text-gray-300 hover:text-white transition-colors">Health Initiatives</a></li>
              <li><a href="#work" className="text-gray-300 hover:text-white transition-colors">Environmental Projects</a></li>
              <li><a href="#work" className="text-gray-300 hover:text-white transition-colors">Cultural Workshops</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-orange-400 mr-2 mt-0.5" />
                <span className="text-gray-300">E3/8, Sector 11, Rohini, Delhi-110085</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-orange-400 mr-2" />
                <span className="text-gray-300">+91 9312130306</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-orange-400 mr-2" />
                <span className="text-gray-300">heavenonearth.change@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-300 text-sm">
            <p>&copy; {new Date().getFullYear()} Heaven on Earth Foundation. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/policies/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/policies/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
              <Link to="/policies/refund" className="hover:text-white transition-colors">Refund Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;