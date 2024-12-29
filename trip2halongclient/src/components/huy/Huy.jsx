import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import { PiBoatThin } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import { LuTickets } from "react-icons/lu";
import { MdTour } from "react-icons/md";
const Huy = () => {

  return (
    <div>
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 lg:w-3/4 bg-[#1478C3] rounded-lg shadow-lg p-6">
        <h1 className="text-center text-2xl md:text-3xl font-bold text-white">
          Your Trip to Halong <span className="text-yellow-500">starts here</span>
        </h1>
        <div className="absolute top-[22%] right-[11%] mt-4 items-center flex justify-center text-sm font-semibold font-md:text-base text-white bg-slate-800  rounded-lg p-1">
          <button className='flex  py-3 px-5 rounded-full transition duration-300  hover:bg-slate-700 hover:border-slate-300 border border-transparent'>
          <PiBoatThin className="mr-2 text-white text-base mt-[3px]" />
          Day & Dinner Crise
          </button>
          <button className='flex  py-3 px-5 rounded-full  transition duration-300  hover:bg-slate-700 hover:border-slate-300 border border-transparent '>
          <PiBoatThin className="mr-2 text-white text-base mt-[3px] " />
            Day & Dinner Crise
          </button >
          <button className='flex  py-3 px-5 rounded-full transition duration-300 hover:bg-slate-700 hover:border-slate-300 border border-transparent'>
            <LuTickets className="mr-2 text-white text-base mt-[3px] "/>
            Day & Dinner Crise
          </button>
          <button className='flex  py-3 px-5 rounded-full transition duration-300  hover:bg-slate-700 hover:border-slate-300 border border-transparent'>
            <MdTour className="mr-2 text-white text-base mt-[3px] "/>
            Day & Dinner Crise
          </button>

        </div>
        <div className=" static mt-[45px]  mt-6 flex flex-wrap items-center gap-4 bg-white pt-10 pb-5 px-5 rounded-lg">
          <div className="flex-1">

            <div className=" bg-white flex items-center p-2 border rounded-md w-full">

              <PiBoatThin className="mr-2 text-[#1478C3]" />

              <select className="w-full text-sm bg-transparent p-0 border-0 outline-none">
                <option>Where are you crusing</option>
              </select>
            </div>
          </div>
          <div className="flex-1">

            <div className=" bg-white flex items-center p-2 border rounded-md w-full">

              <MdOutlineDateRange className="mr-2 text-[#1478C3]" />

              <select className="w-full text-sm bg-transparent p-0 border-0 outline-none">
                <option>Departure Date</option>
              </select>
            </div>
          </div>
          <div className="flex-1">

            <div className=" bg-white flex items-center p-2 border rounded-md w-full">

              <CiUser className="mr-2 text-[#1478C3]" />

              <select className="w-full text-sm bg-transparent p-0 border-0 outline-none">
                <option>2 Adults · 0 Children · 1 Infant</option>
              </select>
            </div>
          </div>
          <button className="bg-blue-700 text-white  px-3 py-3 rounded-md font-medium hover:bg-blue-800">
            <IoSearchOutline />
          </button>
        </div>

        <p className="mt-3 text-center text-white">
          Your World Heritage Journey Begins in a Click!
        </p>
      </div>
      );
    </div>
  )
}

export default Huy