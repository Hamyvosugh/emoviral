import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

// Define the number of slides available
const TOTAL_SLIDES = 5;

// Generate array of image paths - Remove 'public' from the path
const SLIDE_IMAGES = [
    { path: '/images/home/slider-hero/01.jpg', alt: 'Hero Slide 1' },
    { path: '/images/home/slider-hero/03.jpg', alt: 'Hero Slide 3' },
    { path: '/images/home/slider-hero/rr.png', alt: 'Hero Slide 4' },
    { path: '/images/home/slider-hero/05.jpg', alt: 'Hero Slide 5' },
    { path: '/images/home/slider-hero/06.jpg', alt: 'Hero Slide 6' }
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === TOTAL_SLIDES - 1 ? 0 : prevIndex + 1
    );
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? TOTAL_SLIDES - 1 : prevIndex - 1
    );
  }, []);

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        nextSlide();
      }, 5000); // 5 seconds interval

      return () => clearInterval(timer);
    }
  }, [nextSlide, isHovered]);

  return (
    <div 
      className="relative w-full aspect-[3/4] overflow-hidden bg-transparent"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Images */}
      <div 
        className="absolute w-full h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        <div className="flex h-full">
          {SLIDE_IMAGES.map((image, index) => (
            <div
              key={index}
              className="min-w-full h-full flex-shrink-0 relative"
            >
              <Image
                src={image.path}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                priority={index === 0}
                className="object-cover"
                quality={90}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows - Only visible on desktop */}
      <div className="hidden md:block">
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 text-primary-950 hover:bg-white transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 text-primary-950 hover:bg-white transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;