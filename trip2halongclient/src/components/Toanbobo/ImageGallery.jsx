
import React, { useRef } from "react";

const ImageGallery = ({ images }) => {
  const containerRef = useRef(null);

  const scrollNext = () => {
    if (containerRef.current) {
      const scrollAmount = containerRef.current.offsetWidth; // Scroll by the width of the container
      containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col items-end">
      <div
        ref={containerRef}
        className="flex space-x-4 overflow-x-auto scrollbar-hide"
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-1/4 p-2"
          >
            <img
              src={image.url}
              alt={image.alt}
              className="object-cover w-full h-auto rounded-lg"
            />
          </div>
        ))}
      </div>
      <button
        onClick={scrollNext}
        className="px-5 py-3 w-[200px] mt-3 rounded-md mr-5 mb-4  bg-[#6FACE6]">
        Explore The List
      </button>
    </div>
  );
};

export default ImageGallery;

// Usage example:
// const images = [
//   { url: "https://via.placeholder.com/150", alt: "Placeholder Image 1" },
//   { url: "https://via.placeholder.com/150", alt: "Placeholder Image 2" },
//   { url: "https://via.placeholder.com/150", alt: "Placeholder Image 3" },
//   { url: "https://via.placeholder.com/150", alt: "Placeholder Image 4" },
//   { url: "https://via.placeholder.com/150", alt: "Placeholder Image 5" },
// ];

// <ImageGallery images={images} />
