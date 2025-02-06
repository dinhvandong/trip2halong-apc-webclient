import React from 'react'
import Quan from './Quan';
// import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Brand = () => {
  return (
    <div className='flex mt-44 w-full items-center flex-col  h-auto bg-[#F4F5F5]'>
       <div className=" flex flex flex-col w-11/12 lg:w-3/4 h-auto bg-[#F4F5F5] mt-10">
      <div className="relative w-full h-64">
        <img
          src="https://cdn.pixabay.com/photo/2021/11/02/02/01/ha-long-6762301_1280.jpg"
          alt="Ambassador Cruise Halong"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-4 bg-white border-2 rounded-lg shadow-md">
          <img className='h-20 w-20 rounded-lg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVepZ7GyVytAw5_jj6FWNc1WePd4ChkqAG8w&s" alt="Logo"  />
        </div>
      </div>
      <div className="p-6">
        <h1 className="text-2xl font-bold">Ambassador Cruise Halong</h1>
        <div className="flex items-center text-yellow-500 mt-2">
          <Star size={20} fill="currentColor" />
          <span className="ml-1 text-lg font-semibold">5.0</span>
          <span className="ml-2 text-gray-500">(5000+ reviews)</span>
        </div>
        <a
          href="#"
          className="text-blue-500 hover:underline mt-2 inline-block"
        >
          Depart from Halong International Cruise Port - Show on map
        </a>
      </div>
      {/* <Card className="mt-6 p-6">
        <CardContent>
          <h2 className="text-xl font-bold text-blue-600">About This Property</h2>
          <p className="text-gray-700 mt-4">
            Fugiat nostrud in reprehenderit minim voluptate enim laborum nisi eiusmod...
          </p>
        </CardContent>
      </Card> */}
    </div>

        <Quan/>
    </div>
  )
}

export default Brand