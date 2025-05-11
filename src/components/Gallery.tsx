import React, { useState } from 'react';
import { X } from 'lucide-react';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

// Create a shared type for gallery images that can be imported by Admin
export type { GalleryImage };

// Create initial images array that can be imported and modified by Admin
export const initialImages: GalleryImage[] = [
  {
    id: 1,
    src: '/gallery/group-photo.jpg',
    alt: 'Foundation members and volunteers at an event',
    category: 'Cultural Events'
  },
  {
    id: 2,
    src: '/gallery/banner.jpg',
    alt: 'Health camp and government schemes awareness program',
    category: 'Health Camps'
  },
  {
    id: 3,
    src: '/gallery/collage1.jpg',
    alt: 'Various foundation activities and programs',
    category: 'Training Programs'
  },
  {
    id: 4,
    src: 'public/gallery/tree-planting.jpg',
    alt: 'Environmental initiatives and tree planting',
    category: 'Environmental'
  },
  {
    id: 5,
    src: '/gallery/independence.jpg',
    alt: 'Independence Day celebrations with children',
    category: 'Independence Day'
  }
];

const Gallery: React.FC = () => {
  const categories = ['All', 'Independence Day', 'Health Camps', 'Cultural Events', 'Environmental', 'Training Programs'];
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [images, setImages] = useState<GalleryImage[]>(initialImages);

  // Load images from localStorage on component mount
  React.useEffect(() => {
    const savedImages = localStorage.getItem('galleryImages');
    if (savedImages) {
      setImages(JSON.parse(savedImages));
    }
  }, []);

  const filteredImages = activeCategory === 'All' 
    ? images 
    : images.filter(image => image.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Gallery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Witness our journey of creating positive change in the community
          </p>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-4"></div>
        </div>

        <div className="flex flex-wrap justify-center mb-8 gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeCategory === category
                  ? 'bg-green-700 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div 
              key={image.id} 
              className="overflow-hidden rounded-lg shadow-md cursor-pointer transform transition-all duration-300 hover:shadow-xl hover:scale-105"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative h-64">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-30 transition-opacity duration-300"></div>
              </div>
              <div className="p-4 bg-white">
                <p className="text-gray-700">{image.alt}</p>
                <p className="text-sm text-green-700 mt-1">{image.category}</p>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex justify-center items-center p-4">
            <div className="relative max-w-4xl w-full">
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-colors z-10"
              >
                <X className="h-6 w-6" />
              </button>
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt} 
                className="w-full h-auto max-h-[80vh] rounded-lg"
              />
              <div className="bg-white p-4 rounded-b-lg">
                <p className="text-gray-800 font-medium">{selectedImage.alt}</p>
                <p className="text-sm text-green-700">{selectedImage.category}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;