// rafce Kien to create class Kien
import React, { useState, useEffect } from "react";
import images from './image.json'
import icon from './assets/icon_trip.jpg';
import usa from './assets/USA.png';
import { RiRefund2Line } from "react-icons/ri";
import { PiUserCircleLight } from "react-icons/pi";
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
    
  <div className='h-[2000px]'>
  <header className='w-full bg-[#167dc8] h-[80px] flex'>
      <div className="w-1/2">
          <img src={icon} className="h-10/12 mt-1 ml-7 scale-90"/>
      </div>
      <div className="w-1/2 h-full flex justify-start items-center">
      <button className="text-white font-semibold text-lg  w-1/5">Explore</button>
      <button className="text-white font-semibold text-lg w-1/5">Travel Essentials</button>
      <button className="text-white font-semibold text-lg w-1/5">My Trip</button>
      <button className="text-white font-semibold text-lg h-[60%] w-[20%] border rounded-full border-white mr-6">List Your Property</button>
      <button><RiRefund2Line className="text-white text-3xl mr-2"/></button>
      <button><img src={usa} className=" scale-75 mr-2"/></button>
      <button><PiUserCircleLight className="text-white text-3xl "/></button>
      </div>

  </header>
  <div className="relative w-full h-auto overflow-hidden">
      {/* Image Container */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image) => (
          <div
            key={image.id}
            className="min-w-full h-[800px]"
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