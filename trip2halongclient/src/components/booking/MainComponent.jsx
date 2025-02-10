import React, { useState } from 'react'
import Toan from './AllFrom';
import Toan2 from './AllFrom2';
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import { PiBoatThin } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';

const MainComponent = () => {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState('list');

  const gotonext = () => {
    navigate('/booking-payment');
  };


  return (
    <div className='flex flex-col'>
      <div className='flex items-center justify-center w-full h-auto p-3 bg-white'>
        <div className="static flex flex-wrap items-center w-[60%] h-auto gap-4 p-2 bg-[#187DCA] rounded-lg">
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
          <button onClick={gotonext} className="bg-[#187DCA] text-white  px-3 py-3 rounded-md font-medium hover:bg-blue-800">
            <IoSearchOutline />
          </button>
        </div>

      </div>

      <Toan setViewMode={setViewMode} />
      <Toan2 viewMode={viewMode} />
    </div>
  )
}

export default MainComponent
