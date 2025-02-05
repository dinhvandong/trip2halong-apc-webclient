import React from 'react'
import hi from './from.json';
import { HiOutlineUserGroup } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { RiFolderUserLine } from "react-icons/ri";
import { HiOutlineUsers } from "react-icons/hi";

const WhyTrip = () => {
  return (
    <div className='bg-[#F4F4F4] w-full h-auto flex flex-col'>
        <div className='flex items-center justify-center w-full h-auto p-3'>
            <p className='text-3xl text-[#0684C7] font-bold'>Why Trip2Halong</p>
        </div>
        <div className='flex flex-col items-center justify-center w-full h-auto p-3'>
            <p className='text-sm font-medium text-black'>Partnering with Trip2Halong opens the door to endless opportunities in the thriving Halong travel market. As a trusted platform,we connect sellers with a </p>
            <p className='text-sm font-medium text-black'>highly engged audience and provide the tools needed to grow and succeed. Together, we create seamless travel experiences that inspire and delight</p>
            <p className='text-sm font-medium text-black '>customers worldwide</p>
        </div>
        <div className="grid w-[55%] grid-cols-2 gap-4 mx-auto">
          {hi.map((itg) => (
            <div key={itg} className='flex flex-col items-center justify-center p-4 bg-white rounded-md'>
                <HiOutlineUserGroup className='w-8 h-8 text-blue-500'></HiOutlineUserGroup>
                <p className='mt-4 font-bold text-md'>{itg.t1}</p>
                <p className='text-sm '>{itg.t2}</p>
                <p className='text-sm '>{itg.t3}</p>
                <p className='text-sm '>{itg.t4}</p>
            </div>
          ))}
        </div>

      
    </div>
  )
}

export default WhyTrip
