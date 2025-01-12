import React, { useState } from 'react'
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import all from './all.json';
import { MdFlagCircle } from "react-icons/md";

const Allnew2 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };

    const handleNext = () => {
        // Nếu ảnh hiện tại là ảnh cuối, trở về ảnh đầu
        if (currentIndex < all.length - 3) { // Chỉ cho phép cuộn đến ảnh thứ 3 từ cuối
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    return (
        <div className='flex flex-col w-full h-auto bg-white'>
            <div className='flex flex-col w-full h-auto pb-8 bg-blue-600'>
                <div className='flex flex-row w-full justify-center items-center h-[100px] '>
                    <p className='text-[35px] text-white font-bold'>Best of Halong Destination</p>
                    <div className='w-[48%] h-[70px] flex flex-row items-center justify-end'>
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

                {/* Slider Container */}
                <div className='relative flex justify-end w-full h-auto overflow-hidden'>
                    <div
                        className='flex transition-transform duration-500 ease-in-out w-[89%]'
                        style={{
                            transform: `translateX(-${currentIndex * 90}%)`, // Cuộn từ phải sang trái
                            // width: `${all.length * 100}%`, // Tổng chiều rộng của slider (tất cả ảnh)
                        }}
                    >
                        {all.map((item) => (
                            <div
                                key={item.id}
                                className='flex flex-col w-[300px] ml-4 h-auto bg-white flex-shrink-0 rounded-lg'
                            >
                                <img
                                    src={item.image}
                                    className='object-cover w-full h-auto bg-center'
                                />
                                <div className='flex flex-col w-full h-auto p-2'>
                                    <p className='text-[20px] text-black font-bold leading-none'>{item.text}</p>
                                    <p className='text-[13px] mt-2 text-black leading-none'>{item.text2}</p>
                                </div>
                                <div className='flex flex-row justify-between w-full h-auto p-2 mt-2'>
                                    <p className='text-[11px] text-black font-medium flex flex-row items-center'><MdFlagCircle className='w-5 h-5 text-blue-600'></MdFlagCircle>Trip2Halong * <span className='text-gray-400'>Dec-22-2024</span></p>
                                    <button className='px-3 py-2 text-[10px] font-medium bg-gray-200 rounded-lg text-black'>5 mins read</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Allnew2
