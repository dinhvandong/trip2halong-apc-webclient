import React, { useState } from 'react'
import ImgWe from './ImgWe'
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { IoIosArrowRoundForward } from "react-icons/io";

const Whatwe = () => {
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
            <div className='absolute w-full h-full bg-[#1A78C2] opacity-95'></div>
            <div className='absolute flex justify-end w-full h-full'>
                <div className='flex flex-col w-[88%] h-full '>
                    <div className='w-full h-[30%] flex flex-row items-center justify-between'>
                        <p className='text-[35px] text-white font-bold leading-none'>What we help</p>
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
                    <ImgWe currentIndex={currentIndex} />
                </div>
            </div>
        </div>
    )
}

export default Whatwe
