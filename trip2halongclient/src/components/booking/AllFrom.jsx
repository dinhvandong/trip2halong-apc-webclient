
import React, { useState } from 'react';
import { HiChevronDown } from "react-icons/hi2";
import Toan1 from './Toan1.json';
import Toanb from './Toanb.json';
import { HiListBullet } from "react-icons/hi2";
import { HiMiniSquares2X2 } from "react-icons/hi2";


const Toan = ({ setViewMode })  => {
  const [isMostPopupla, setMostPopupla] = useState(false);
  const [isTotalPrice, setTotalPrice] = useState(false);
  return (
    <div className='w-full flex items-center justify-between h-[100px] bg-[#F2F4F4] px-16'>
      <p className="text-black text-[25px] flex flex-col leading-none">HaLong Bay Day Cruise<span className="font-bold text-[20px]">20 results found</span></p>
      <div className="w-[35%] h-full flex items-center justify-between flex-row">
        <p className="text-gray-500">Sort by</p>
        <div className='relative'>
          <button onClick={() => setMostPopupla(!isMostPopupla)} className='w-[100px] h-[35px] rounded-md text-[#3D8CFF] text-[10px] flex items-center justify-center font-bold bg-white border border-blue-300'>
            Most Popular<HiChevronDown className='ml-2'></HiChevronDown>
          </button>
          {isMostPopupla && (
            <ul className="absolute left-0 z-50 w-40 mt-2 bg-white shadow-sm rounded-xl">
              {Toan1.map((item) => (
                <li key={item.id}
                  className="p-2 rounded-lg cursor-pointer hover:bg-slate-400"
                  onClick={() => {
                    item.log(item.name);
                  }}>{item.name}
                </li>
              ))}
            </ul>
          )}
        </div>
        <p className="text-gray-500">Price Display</p>
        <div className='relative'>
          <button onClick={() => setTotalPrice(!isTotalPrice)} className='w-[100px] h-[35px] rounded-md text-[#3D8CFF] text-[10px] flex items-center justify-center font-bold bg-white border border-blue-300'>
            Total Price<HiChevronDown className='ml-2'></HiChevronDown>
          </button>
          {isTotalPrice && (
            <ul className="absolute left-0 z-50 w-40 mt-2 bg-white shadow-sm rounded-xl">
              {Toanb.map((itemn) => (
                <li key={itemn.id}
                  className="p-2 rounded-lg cursor-pointer hover:bg-slate-400"
                  onClick={() => {
                    itemn.log(itemn.name);
                  }}>{itemn.name}
                </li>
              ))}
            </ul>
          )}
        </div>
        <p className="text-gray-500">View</p>
        <button
          onClick={() => setViewMode('grid')}
          className='w-[30px] h-[30px] flex justify-center items-center text-blue-400 rounded-md hover:text-white bg-white border border-blue-400 hover:bg-blue-700'>
          <HiMiniSquares2X2 />
        </button>
        <button
          onClick={() => setViewMode('list')}
          className='w-[30px] h-[30px] flex justify-center items-center text-blue-400 rounded-md hover:text-white bg-white border border-blue-400 hover:bg-blue-700'>
          <HiListBullet />
        </button>
      </div>
    </div>
  )
}

export default Toan