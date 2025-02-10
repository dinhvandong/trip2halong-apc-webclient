import React, { useState } from 'react'
import Evaluate from './Evaluate';
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import GridWithSelect from './GridWithSelect';


const BestDeals = () => {
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
    <div className='flex flex-col w-full h-[820px] bg-cover bg-center relative '>
      <div className='absolute w-full h-full'></div>
      <div className='absolute flex justify-end w-full h-full'>
        <div className='flex flex-col w-[88%] h-full '>
          <div className='w-full h-[10%] flex flex-row items-center justify-between'>
            <p className='text-4xl text-[#0081CE] font-bold leading-none ml-9 mb-2'>Property's <span className='text-yellow-400'>Best Deals</span></p>
            <div className='w-[50%] h-[70px] flex items-center justify-center'>
              <button
                className='w-[40px] h-[40px] text-white flex justify-center items-center rounded-md border border-[#0081CE]'
                onClick={handlePrev}
              >
                <FiChevronLeft />
              </button>
              <button
                className='w-[40px] h-[40px] ml-1 text-white flex justify-center items-center rounded-md border  border-[#0081CE]'
                onClick={handleNext}
              >
                <FiChevronRight />
              </button>
            </div>
          </div>
          <GridWithSelect currentIndex={currentIndex} />
          <h1 className='text-4xl text-[#0081CE] font-bold ml-9 my-4 '>Guest Reviews</h1>
          <Evaluate currentIndex={currentIndex} />
        </div>
      </div>
    </div>

  )
}

export default BestDeals