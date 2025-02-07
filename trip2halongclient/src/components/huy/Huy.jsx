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
      <div className="absolute top-[800px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 lg:w-3/4 bg-[#1478C3] rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center text-white md:text-3xl">
          Your Trip to Halong <span className="text-yellow-500">starts here</span>
        </h1>
        <div className='flex justify-center w-full'>
          <div className="absolute top-[22%] mt-4 items-center flex justify-center text-sm font-semibold font-md:text-base text-white bg-slate-800  rounded-lg p-1">
            <button className='flex px-5 py-3 transition duration-300 border border-transparent rounded-full hover:bg-slate-700 hover:border-slate-300'>
              <PiBoatThin className="mr-2 text-white text-base mt-[3px]" />
              Day & Dinner Cruise
            </button>
            <button className='flex px-5 py-3 transition duration-300 border border-transparent rounded-full hover:bg-slate-700 hover:border-slate-300 '>
              <PiBoatThin className="mr-2 text-white text-base mt-[3px] " />
              Overnight Cruise
            </button >
            <button className='flex px-5 py-3 transition duration-300 border border-transparent rounded-full hover:bg-slate-700 hover:border-slate-300'>
              <LuTickets className="mr-2 text-white text-base mt-[3px] " />
              Attraction Ticket
            </button>
            <button className='flex px-5 py-3 transition duration-300 border border-transparent rounded-full hover:bg-slate-700 hover:border-slate-300'>
              <MdTour className="mr-2 text-white text-base mt-[3px] " />
              Tours & Combos
            </button>

          </div>

        </div>

        <div className=" static mt-[45px] flex flex-wrap items-center gap-4 bg-white pt-10 pb-5 px-5 rounded-lg">
          <div className="flex-1">

            <div className="flex items-center w-full p-2 bg-white border rounded-md ">

              <PiBoatThin className="mr-2 text-[#1478C3]" />

              <select className="w-full p-0 text-sm bg-transparent border-0 outline-none">
                <option>Where are you crusing</option>
              </select>
            </div>
          </div>
          <div className="flex-1">

            <div className="flex items-center w-full p-2 bg-white border rounded-md ">

              <MdOutlineDateRange className="mr-2 text-[#1478C3]" />

              <select className="w-full p-0 text-sm bg-transparent border-0 outline-none">
                <option>Departure Date</option>
              </select>
            </div>
          </div>
          <div className="flex-1">

            <div className="flex items-center w-full p-2 bg-white border rounded-md ">

              <CiUser className="mr-2 text-[#1478C3]" />

              <select className="w-full p-0 text-sm bg-transparent border-0 outline-none">
                <option>2 Adults · 0 Children · 1 Infant</option>
              </select>
            </div>
          </div>
          <button className="bg-[#187DCA] text-white  px-3 py-3 rounded-md font-medium hover:bg-blue-800">
            <IoSearchOutline />
          </button>
        </div>

        <p className="mt-3 text-center text-white">
          Your World Heritage Journey Begins in a Click!
        </p>
      </div>
    </div>
  )
}

export default Huy