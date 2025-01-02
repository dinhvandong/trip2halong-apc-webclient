// rafce Kien to create class Kien
import React, { useState, useEffect } from "react";
import Header from "./Header";
import images from './image.json'

const Kien = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update the index to the next image, or reset to 0 if at the last image
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Auto-transition every 3 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);
  return (
    
  <div className='h-auto '>
  <Header/>
  <div className="relative w-full h-auto overflow-hidden">
      {/* Image Container */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image) => (
          <div 
            key={image.id}
            className="min-w-full h-[800px] "
          >
            
            <img
              src={image.src}
              alt={image.alt}
              className="w-screen h-full object-center "
            />
          </div>
          
        ))}
      </div>

      
      
    </div>  
</div>
  )
}
// anh h-800px
export default Kien