import React from 'react'
import BestDeals from './BestDeals';
import logoAmba from "../../../assets/logoAMBA.webp";

import { Star } from "lucide-react";
import { FaLocationArrow } from "react-icons/fa6";
// import Evaluate from './Evaluate';

const Brand = () => {
  return (
    <div className='flex mt-44 w-full items-center flex-col  h-auto bg-[#F4F5F5] '>
       <div className=" flex flex flex-col w-11/12 lg:w-3/4 h-auto bg-[#F4F5F5] mt-10">
      <div className="relative w-full h-64 ">
        <img
          src="https://cdn.pixabay.com/photo/2021/11/02/02/01/ha-long-6762301_1280.jpg"
          alt="Ambassador Cruise Halong"
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute bottom-[-20%] left-5 bg-white border-2 rounded-lg shadow-md">
          <img className='h-28 w-28 rounded-lg' src={logoAmba} alt="Logo"  />
        </div>
      </div>
      <div className="p-6 mt-12">
        <h1 className="text-5xl text-[#454849] font-bold">Ambassador Cruise Halong</h1>
        <div className="flex items-center text-yellow-500 mt-2">
          <Star size={13} fill="currentColor" />
          <Star size={13} fill="currentColor" />
          <Star size={13} fill="currentColor" />
          <Star size={13} fill="currentColor" />
          <Star size={13} fill="currentColor" />
          <span className="ml-1 text-xs font-semibold bg-yellow-500 text-white px-1">5.0</span>
          <span className="ml-2 text-gray-500">(5000+ reviews)</span>
        </div>
       
        <p
          
          className="text-[#0081CE]  mt-2 inline-block flex items-center"
        >
         <FaLocationArrow className='mr-2'/>  Depart from Halong International Cruise Port  <a href="#" className='underline ml-3'> Show on map</a>
        </p>
      </div>
      <div className="mt-2 py-6 px-7 inset-shadow-2xs rounded-xl bg-white">
        <div>
          <h2 className="text-3xl font-bold text-[#0081CE]">About This Property</h2>
          <p className="text-gray-600 text-base mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quae obcaecati, molestiae repellat corporis nam deleniti expedita vel suscipit blanditiis modi maxime, praesentium quisquam ipsa sequi recusandae. Soluta harum deleniti velit, magnam iure veniam voluptatem veritatis porro quod perspiciatis adipisci facere voluptatibus eius molestias iste? Nulla nemo dolor repellendus perferendis facere adipisci assumenda ducimus quae, eum doloribus veritatis, sequi tempora sunt minima minus beatae culpa recusandae aliquid corrupti in suscipit? Quaerat porro magnam culpa dicta voluptatem sapiente? Iusto culpa corrupti dolor adipisci distinctio. Eum necessitatibus, natus mollitia, alias culpa accusantium atque optio similique sunt eius quasi porro aliquid ducimus tenetur itaque doloremque at magni in maiores dolorum. Quo voluptatem aspernatur porro tempore voluptatum similique natus dolores, aliquid neque alias sed a atque nesciunt voluptate magnam dolor doloribus beatae. Perferendis deleniti sequi eligendi et quo nobis ratione velit provident. Quidem repudiandae enim nobis vitae velit, placeat veniam, asperiores distinctio illo ipsam nisi in! Totam temporibus numquam quos, ut nulla ex ipsam.
          </p>
        </div>
      </div>
    </div>

        <BestDeals/>
    </div>
  )
}

export default Brand