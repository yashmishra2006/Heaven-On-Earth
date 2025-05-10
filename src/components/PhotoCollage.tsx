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
    <div className="relative w-full h-[400px] overflow-hidden -rotate-6 my-20">
      <div className="absolute inset-0 flex items-center">
        <div className="flex gap-4 animate-slide">
          {[...photos, ...photos].map((photo, index) => (
            <div
              key={`${photo.id}-${index}`}
              className="relative min-w-[300px] h-[250px] transform hover:scale-105 transition-transform duration-300"
              style={{
                clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0 100%)',
                animation: `fadeIn 0.5s ease-out ${index * 0.1}s forwards`,
                opacity: 0,
              }}
            >
              <img
                src={photo.url}
                alt={photo.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-20 hover:opacity-0 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoCollage;