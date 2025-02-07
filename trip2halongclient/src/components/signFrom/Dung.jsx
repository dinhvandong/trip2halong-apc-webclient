import React, { useState } from 'react';

const tourData = {
  "pageTitle": {
    "prefix": "Trending",
    "highlight": "Summer Tours",
    "suffix": "in Halong Bay"
  },
  "subtitle": "It's here: Our ultimate list of places to experience",
  "tours": [
    {
      "id": 1,
      "highlights": [
        "Kayaking through limestone caves",
        "Swimming in hidden lagoons",
        "Traditional lunch onboard"
      ]
    },
    {
      "id": 2,
      "highlights": [
        "Overnight on traditional junk boat",
        "Sunset viewing",
        "Morning Tai Chi"
      ]
    },
    {
      "id": 3,
      "highlights": [
        "Photography spots",
        "Dinner cruise",
        "Cave exploration"
      ]
    },
    {
      "id": 4,
      "highlights": [
        "Professional cave guide",
        "Swimming opportunities",
        "Light lunch included"
      ]
    }
  ],
  "settings": {
    "slidesPerView": 4,
    "autoplay": true,
    "autoplayDelay": 3000,
    "navigation": true
  }
};

const TourSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % tourData.tours.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + tourData.tours.length) % tourData.tours.length);
  };

  return (
    <div className="w-full min-h-screen p-8 bg-blue-600">
      <div className="max-w-6xl mx-auto">
        <div className="relative mb-12">
          <h1 className="mb-4 text-5xl font-bold text-white">
            {tourData.pageTitle.prefix}{' '}
            <span className="text-yellow-400">{tourData.pageTitle.highlight}</span>{' '}
            {tourData.pageTitle.suffix}
          </h1>
          
          {tourData.settings.navigation && (
            <div className="absolute right-0 flex gap-2 top-14">
              <button 
                onClick={prevSlide}
                className="flex items-center justify-center w-10 h-10 text-white transition border rounded border-white/30 hover:bg-white/10"
              >
                ←
              </button>
              <button 
                onClick={nextSlide}
                className="flex items-center justify-center w-10 h-10 text-white transition border rounded border-white/30 hover:bg-white/10"
              >
                →
              </button>
            </div>
          )}
          
          <p className="text-xl text-white">
            {tourData.subtitle}
          </p>
        </div>

        <div className="flex gap-4">
          {tourData.tours.map((tour, index) => (
            <div 
              key={tour.id} 
              className="w-1/4 overflow-hidden bg-white rounded-lg shadow-lg"
            >
              <img 
                src={tour.image} 
                alt={tour.title}
                className="object-cover w-full h-48"
              />
              <div className="p-4">
                <h3 className="font-bold">{tour.title}</h3>
                <p className="text-gray-600">{tour.description}</p>
                <p className="mt-2 text-blue-600">${tour.price}</p>
                <p className="text-sm text-gray-500">{tour.duration}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end mt-8">
          <button className="flex items-center gap-2 px-6 py-3 text-white transition bg-blue-400 rounded-lg hover:bg-blue-500">
            Explore The List
            <span className="ml-2">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourSlider;