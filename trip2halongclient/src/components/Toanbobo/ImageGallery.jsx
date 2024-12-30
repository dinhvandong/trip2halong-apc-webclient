
import React  from "react";

const ImageGallery = ({ images, currentIndex }) => {
  return (
    <div className="relative flex flex-row mr-3 overflow-hidden w-full h-[300px]">
      <div
        className="flex w-[400px] h-full transition-transform duration-300"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full mr-4 rounded-md"
            style={{ width: '100%' }}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="object-cover w-full h-auto rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
