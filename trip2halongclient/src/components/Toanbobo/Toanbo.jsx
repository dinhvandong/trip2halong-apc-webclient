import React from 'react'
import { FiChevronRight } from "react-icons/fi";
import { FiChevronLeft } from "react-icons/fi";
import toannn from './toan.json';
import ImageGallery from './ImageGallery';


const Toanbo = () => {
    const images = [
          { url: "https://static-images.vnncdn.net/files/publish/2022/7/27/ha-long-bay-1-852.jpg", alt: "Placeholder Image 1" },
          { url: "https://static-images.vnncdn.net/files/publish/2022/7/27/ha-long-bay-1-852.jpg", alt: "Placeholder Image 2" },
          { url: "https://static-images.vnncdn.net/files/publish/2022/7/27/ha-long-bay-1-852.jpg", alt: "Placeholder Image 3" },
          { url: "https://static-images.vnncdn.net/files/publish/2022/7/27/ha-long-bay-1-852.jpg", alt: "Placeholder Image 4" },
          { url: "https://static-images.vnncdn.net/files/publish/2022/7/27/ha-long-bay-1-852.jpg", alt: "Placeholder Image 5" },
        ];
  return (
    <div className='flex  flex-col w-full h-[450px] bg-cover bg-center relative bg-[url(https://vcdn1-dulich.vnecdn.net/2023/07/12/hl1-1689130193-1689130212-5586-1689130358.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=JDE3nuzFT6QKZqQ73hmZug)]'>
        <div className='absolute  w-full h-full bg-[#3C7FC4] opacity-95'></div>
        <div className=' absolute flex justify-end w-full h-full'>
            <div className='flex flex-col w-[85%] h-full'>
                <div className='w-full h-[30%] flex flex-row items-center'>
                    <p className='text-[33px] text-white font-bold leading-none'>Trending<span className='ml-1 mr-1 text-yellow-400'>Summer Tours</span>in Halong Bay<br/>
                      <span className='text-[13px] text-white'>It's here: Our ultimate list of places to experience</span>
                    </p>
                    <div className='w-[50%] h-[70px] flex items-center justify-center'>
                     <button className='w-[40px] h-[40px] text-white flex justify-center items-center rounded-md border border-white'><FiChevronLeft/></button>
                     <button className='w-[40px] h-[40px] ml-1 text-white flex justify-center items-center rounded-md border border-white'><FiChevronRight/></button>
                    </div>
                </div>
                <ImageGallery images={images} />
                {/* <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-full h-[50px]'>
                    {toannn.map((iit) => (
                        <div key={iit.id} className='w-[100px] h-full flex flex-col'>
                            <image src={iit.imgg} alt={iit.id} className='w-full h-full'></image>
                        </div>
                    ))}
                </div> */}
            </div>
        </div>
       
      
    </div>
  )
}

export default Toanbo

// Usage example:
// const images = [
//   { url: "https://via.placeholder.com/150", alt: "Placeholder Image 1" },
//   { url: "https://via.placeholder.com/150", alt: "Placeholder Image 2" },
//   { url: "https://via.placeholder.com/150", alt: "Placeholder Image 3" },
//   { url: "https://via.placeholder.com/150", alt: "Placeholder Image 4" },
//   { url: "https://via.placeholder.com/150", alt: "Placeholder Image 5" },
// ];

// <ImageGallery images={images} />
