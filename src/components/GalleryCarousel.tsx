import React, { useRef, useEffect } from 'react';

const images = [
  'https://images.pexels.com/photos/32745006/pexels-photo-32745006.jpeg',
  'https://images.pexels.com/photos/340140/pexels-photo-340140.jpeg',
  'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg',
  'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg',
  'https://images.pexels.com/photos/210488/pexels-photo-210488.jpeg',
];

const GalleryCarousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    let animationFrame: number;
    let scrollAmount = 0;
    const speed = 1; // pixels per frame

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += speed;
      }
      animationFrame = requestAnimationFrame(scroll);
    };
    animationFrame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="w-full overflow-hidden py-8">
      <h2 className="text-2xl font-bold text-center mb-6 text-blue-800 dark:text-blue-400">Church Gallery</h2>
      <div
        ref={scrollRef}
        className="flex space-x-6 overflow-x-auto scrollbar-hide rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-4"
        style={{ scrollBehavior: 'smooth', whiteSpace: 'nowrap' }}
      >
        {[...images, ...images].map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Church Gallery ${idx + 1}`}
            className="h-56 w-96 object-cover rounded-xl shadow-md flex-shrink-0"
            draggable={false}
          />
        ))}
      </div>
    </div>
  );
};

export default GalleryCarousel;
