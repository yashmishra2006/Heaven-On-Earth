import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf} from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#home" className="flex items-center space-x-2">
              <Leaf className={`h-8 w-8 ${isScrolled ? 'text-green-700' : 'text-white'}`} />
              <span className={`text-xl font-serif font-semibold ${
                isScrolled ? 'text-green-800' : 'text-white'
              }`}>
                Heaven on Earth Foundation
              </span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'About Us', 'Our Work', 'Impact', 'Gallery', 'Get Involved', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
                className={`font-medium transition-colors duration-200 ${
                  isScrolled
                    ? 'text-gray-800 hover:text-green-700'
                    : 'text-white hover:text-orange-300'
                }`}
              >
                {item}
              </a>
            ))}
            <a
              href="#donate"
              className={`px-4 py-2 rounded-md transition-colors duration-200 font-medium ${
                isScrolled
                  ? 'bg-orange-600 text-white hover:bg-orange-700'
                  : 'bg-white text-orange-600 hover:bg-orange-50'
              }`}
            >
              Donate Now
            </a>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-md transition-colors ${
                isScrolled
                  ? 'text-gray-700 hover:text-green-700'
                  : 'text-white hover:text-orange-300'
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-white shadow-lg`}
      >
        <div className="px-4 py-2 space-y-1">
          {['Home', 'About Us', 'Our Work', 'Impact', 'Gallery', 'Get Involved', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-green-700 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="#donate"
            className="block w-full text-center px-4 py-2 mt-4 rounded-md bg-orange-600 text-white hover:bg-orange-700 transition-colors font-medium"
            onClick={() => setIsOpen(false)}
          >
            Donate Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;