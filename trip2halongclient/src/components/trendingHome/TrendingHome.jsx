import React, { useState } from 'react';
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import ImageGallery from './ImageGallery';
import { IoIosArrowRoundForward } from "react-icons/io";

const Toanbo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div className='flex flex-col w-full h-[450px] bg-cover bg-center relative bg-[url(https://vcdn1-dulich.vnecdn.net/2023/07/12/hl1-1689130193-1689130212-5586-1689130358.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=JDE3nuzFT6QKZqQ73hmZug)]'>
      <div className='absolute w-full h-full bg-[#3C7FC4] opacity-95'></div>
      <div className='absolute flex justify-end w-full h-full'>
        <div className='flex flex-col w-[88%] h-full '>
          <div className='w-full h-[30%] flex flex-row items-center'>
            <p className='text-[35px] text-white font-bold leading-none'>
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
          <ImageGallery currentIndex={currentIndex}/>
          <div className='w-full h-[80px] flex justify-end items-center pr-4'>
            <button className='w-[10%] h-[50%] bg-blue-400 rounded-lg items-center text-[13px] font-bold justify-center text-white flex-row flex'>Expoler The List<IoIosArrowRoundForward/> </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toanbo;
