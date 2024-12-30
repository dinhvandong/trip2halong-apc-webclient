import React, { useState } from 'react';
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import ImageGallery from './ImageGallery';

const Toanbo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    { url: "https://static-images.vnncdn.net/files/publish/2022/7/27/ha-long-bay-1-852.jpg", alt: "Placeholder Image 1" },
    { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU33bZQlZZK2loOw-Ghq384roHamtC1s1AZ8k3xDl7CBj_vp3STiqZpmmuKzPRduEmu4U&usqp=CAU", alt: "Placeholder Image 2" },
    { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBh-CQleCMH20vWjPlavrDGi6TOE_0IRtzFUkE_Fq3tXePMqjwKfTPTrtOXL1SaVTdiiU&usqp=CAU", alt: "Placeholder Image 3" },
    { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCE9VFfjL66-3axkg6EM4jYVN0fy0obb_O9bGB0uDKHugdO8WlDbYmuc_VUO8-zpyV0eI&usqp=CAU", alt: "Placeholder Image 4" },
    { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgiH3htIeiiGZ26sW-nwuF3hX_UGd3eNg3EqmMXthtzidstsuNv6zvY-QZnNNr17LqCQA&usqp=CAU", alt: "Placeholder Image 5" },
  ];

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div className='flex flex-col w-full h-[450px] bg-cover bg-center relative bg-[url(https://vcdn1-dulich.vnecdn.net/2023/07/12/hl1-1689130193-1689130212-5586-1689130358.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=JDE3nuzFT6QKZqQ73hmZug)]'>
      <div className='absolute w-full h-full bg-[#3C7FC4] opacity-95'></div>
      <div className='absolute flex justify-end w-full h-full'>
        <div className='flex flex-col w-[85%] h-full'>
          <div className='w-full h-[30%] flex flex-row items-center'>
            <p className='text-[33px] text-white font-bold leading-none'>
              Trending<span className='ml-1 mr-1 text-yellow-400'>Summer Tours</span>in Halong Bay
              <br />
              <span className='text-[13px] text-white'>It's here: Our ultimate list of places to experience</span>
            </p>
            <div className='w-[50%] h-[70px] flex items-center justify-center'>
              <button
                className='w-[40px] h-[40px] text-white flex justify-center items-center rounded-md border border-white'
                onClick={handlePrev}
              >
                <FiChevronLeft />
              </button>
              <button
                className='w-[40px] h-[40px] ml-1 text-white flex justify-center items-center rounded-md border border-white'
                onClick={handleNext}
              >
                <FiChevronRight />
              </button>
            </div>
          </div>
          {/* Image Gallery */}
          <ImageGallery images={images} currentIndex={currentIndex} />
        </div>
      </div>
    </div>
  );
};

export default Toanbo;
