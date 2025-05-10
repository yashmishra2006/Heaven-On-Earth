import React from 'react';

interface Photo {
  id: number;
  url: string;
  alt: string;
}

const photos: Photo[] = [
  {
    id: 1,
    url: "./gallery/moving/1.jpg",
    alt: "Children learning in classroom"
  },
  {
    id: 2,
    url: "./gallery/moving/2.jpg",
    alt: "Community gathering"
  },
  {
    id: 3,
    url: "./gallery/moving/3.jpg",
    alt: "Educational activities"
  },
  {
    id: 4,
    url: "./gallery/moving/4.jpg",
    alt: "Cultural celebration"
  },
  {
    id: 5,
    url: "./gallery/moving/5.jpg",
    alt: "Community support"
  },
  {
    id: 6,
    url: "./gallery/moving/6.jpg",
    alt: "Group activities"
  },
  {
    id: 7,
    url: "./gallery/moving/7.jpg",
    alt: "Educational programs"
  },
  {
    id: 8,
    url: "./gallery/moving/8.jpg",
    alt: "Community engagement"
  },
  {
    id: 9,
    url: "./gallery/moving/9.jpg",
    alt: "Children participating in art workshop"
  },
  {
    id: 10,
    url: "./gallery/moving/10.jpg",
    alt: "Volunteers distributing supplies"
  },
  {
    id: 11,
    url: "./gallery/moving/11.jpg",
    alt: "Outdoor educational session"
  },
  {
    id: 12,
    url: "./gallery/moving/12.jpg",
    alt: "Community health check-up camp"
  },
  {
    id: 13,
    url: "./gallery/moving/13.jpg",
    alt: "Children performing cultural dance"
  },
  {
    id: 14,
    url: "./gallery/moving/14.jpg",
    alt: "Group reading session"
  },
  {
    id: 15,
    url: "./gallery/moving/15.jpg",
    alt: "Community clean-up drive"
  },
  {
    id: 16,
    url: "./gallery/moving/16.jpg",
    alt: "Children's sports event"
  },
  {
    id: 17,
    url: "./gallery/moving/17.jpg",
    alt: "Art and craft exhibition"
  },
  {
    id: 18,
    url: "./gallery/moving/18.jpg",
    alt: "Nutrition awareness program"
  },
  {
    id: 19,
    url: "./gallery/moving/19.jpg",
    alt: "Tree plantation drive"
  },
  {
    id: 20,
    url: "./gallery/moving/20.jpg",
    alt: "Community celebration event"
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