import React, { useState } from 'react'
import { AiTwotoneFile } from "react-icons/ai";
import { FiChevronRight } from "react-icons/fi";
import { FiChevronLeft } from "react-icons/fi";
import banna from './banner.json';

const Media = () => {
    const [banner] = useState(banna); // Gán dữ liệu JSON vào state
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = Math.ceil(banner.length / 3); // Tính số lượng slide (3 ảnh/slide)

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === slides - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className='w-full h-auto p-2 flex flex-col mt-3 bg-[#e1e3e1] rounded-md'>
            <p className='text-[20px] font-bold'>Media Center</p>
            <div className='flex flex-col w-full h-auto p-2'>
                <p className='text-[15px] ml-2 text-black font-bold'>Itlnerary<span className='text-red-500'>*</span></p>
                <div className="flex flex-row items-center w-full h-[40px] rounded-md">
                    <div className='w-full h-full rounded-md'>
                        <input
                            className="w-full h-full px-3 rounded-l-md focus:outline-none"
                            placeholder="Please upload your standand itnerery"
                            type="text"
                        />
                    </div>
                    <div className="px-3 py-3 text-black bg-white cursor-pointer rounded-r-md">
                        <AiTwotoneFile />
                    </div>
                </div>
                <p className='text-[13px] ml-2 text-gray-400 mt-2'>Your video may take extra time to be reviewed </p>
            </div>
            <div className='flex flex-col w-full h-auto p-2'>
                <p className='text-[15px] ml-2 text-black font-bold'>Video Gallery<span className='text-red-500'>*</span></p>
                <div className="flex flex-row items-center w-full h-[40px] rounded-md">
                    <div className='w-full h-full rounded-md'>
                        <input
                            className="w-full h-full px-3 rounded-l-md focus:outline-none"
                            placeholder="Please upload your standand itnerery"
                            type="text"
                        />
                    </div>
                    <div className="px-3 py-3 text-black bg-white cursor-pointer rounded-r-md">
                        <AiTwotoneFile />
                    </div>
                </div>
                <p className='text-[13px] ml-2 text-gray-400 mt-2'>Your video may take extra time to be reviewed </p>
            </div>
            <div className='flex flex-col w-full h-auto p-2'>
                <p className='text-[15px] ml-2 text-black font-bold'>Photo Gallery<span className='text-red-500'>*</span></p>
                <button className='w-full h-[100px] flex items-center justify-center font-medium text-black bg-white border border-gray-300 rounded-md'><AiTwotoneFile></AiTwotoneFile>Update Your Photo</button>
                <p className='text-[13px] ml-2 text-black mt-2'>You can upload a maximum of <span className='font-bold'>30 photos</span>.Each photo shound not exceed 5MB.<br />
                    Only <span className='font-bold'>PNG,JPEGs</span> formats are accepted.
                </p>
            </div>
            <div className='flex flex-col w-full h-auto p-2'>
                <p className='text-[15px] ml-2 text-black font-bold'>Banner Photo<span className='text-red-500'>*</span></p>
                <div className="flex flex-row items-center justify-between w-full h-auto overflow-hidden">
                    {/* Button Previous */}
                    <button
                        className="flex items-center justify-center w-10 h-10 text-white bg-blue-700 rounded-md"
                        onClick={handlePrev}
                    >
                        <FiChevronLeft />
                    </button>

                    {/* Carousel Images */}
                    <div className="w-[90%] h-auto flex overflow-hidden relative">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{
                                transform: `translateX(-${currentIndex * 100}%)`,
                                width: `${slides * 100}%`,
                            }}
                        >
                            {banner.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 w-1/3 px-2" // Mỗi ảnh chiếm 1/3 không gian
                                >
                                    <img
                                        src={item.img}
                                        alt={`img ${item.id}`}
                                        className="w-full h-auto rounded-md"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Button Next */}
                    <button
                        className="flex items-center justify-center w-10 h-10 text-white bg-blue-700 rounded-md"
                        onClick={handleNext}
                    >
                        <FiChevronRight />
                    </button>
                </div>
                <p className='text-[13px] ml-2 text-black mt-2'>You can upload a maximum of <span className='font-bold'>3 photos</span>.Each photo shound not exceed 5MB.<br />
                    Only <span className='font-bold'>PNG,JPEGs</span> formats are accepted.
                </p>
            </div>


        </div>
    )
}

export default Media
