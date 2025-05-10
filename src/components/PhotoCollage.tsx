import React from 'react';

interface Photo {
  id: number;
  url: string;
  alt: string;
}

const photos: Photo[] = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/8363104/pexels-photo-8363104.jpeg",
    alt: "Children learning in classroom"
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/8363149/pexels-photo-8363149.jpeg",
    alt: "Community gathering"
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/8364026/pexels-photo-8364026.jpeg",
    alt: "Educational activities"
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/8364589/pexels-photo-8364589.jpeg",
    alt: "Cultural celebration"
  },
  {
    id: 5,
    url: "https://images.pexels.com/photos/8364898/pexels-photo-8364898.jpeg",
    alt: "Community support"
  },
  {
    id: 6,
    url: "https://images.pexels.com/photos/8365152/pexels-photo-8365152.jpeg",
    alt: "Group activities"
  },
  {
    id: 7,
    url: "https://images.pexels.com/photos/8365667/pexels-photo-8365667.jpeg",
    alt: "Educational programs"
  },
  {
    id: 8,
    url: "https://images.pexels.com/photos/8365834/pexels-photo-8365834.jpeg",
    alt: "Community engagement"
  }
];

const PhotoCollage: React.FC = () => {
  return (
    <div className="relative w-full h-[500px] overflow-hidden bg-gray-100 rounded-xl">
      <div className="absolute inset-0 flex flex-wrap gap-4 p-8 transform -rotate-6">
        {photos.map((photo, index) => (
          <div
            key={photo.id}
            className={`
              relative overflow-hidden rounded-lg shadow-lg
              transform transition-all duration-500 hover:scale-105 hover:z-10
              ${index % 2 === 0 ? 'rotate-3' : '-rotate-3'}
              w-[calc(25%-1rem)] h-[200px]
            `}
            style={{
              animation: `fadeIn 0.5s ease-out ${index * 0.1}s forwards`,
              opacity: 0
            }}
          >
            <img
              src={photo.url}
              alt={photo.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 hover:bg-opacity-10" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoCollage;