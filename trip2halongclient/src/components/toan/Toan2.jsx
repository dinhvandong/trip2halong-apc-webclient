import React, { useState } from 'react';
import Toanc from './Toanc.json';
import { HiMiniXMark } from "react-icons/hi2";
import { RiStarSFill } from "react-icons/ri";
import Toanba from "./toanba.json";
import { PiControlFill } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";

const Toan2 = () => {
  const [value, setValue] = useState(50);
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const [checkboxState, setCheckboxState] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false,
  });
  const handleCheckboxChange = (checkboxId) => {
    setCheckboxState((prevState) => ({
      ...prevState,
      [checkboxId]: !prevState[checkboxId],
    }));
  };
  return (
    <div className='relative flex flex-row w-full mt-4 h-max'>
      <div className='flex flex-col w-1/4 h-screen mr-4'>
        <div className='w-full h-[160px] flex flex-col p-2 rounded-md bg-white'>
          <button className='flex justify-between font-bold'>Recent Filter<span className='text-blue-400'>Clear</span></button>
          <div className='flex flex-col mt-2'>
            {Toanc.map((tt) => (
              <button key={tt.id} className='w-fit h-[30px] m-1 font-bold text-[12px] bg-white border border-gray-300 inline-block hover:text-blue-500 rounded-xl hover:bg-blue-200'>
                {tt.name}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col w-full mt-2 h-[100px] p-2 rounded-md bg-white">
          <button className='flex justify-between font-bold'>Pricing(per person)<span className='text-blue-400'>Reset</span></button>
          <input id="range" type="range" min="150" max="1500" value={value} onChange={handleChange}
            className="w-full h-4 mt-2 bg-blue-500 rounded-lg cursor-pointer"
          />
          <div className='flex flex-row items-center justify-between mt-2'>
            <button className='h-[30px] bg-white border rounded-lg text-[12px] border-gray-300 font-bold w-[80px]'>USD 150</button>
            <button className='h-[30px] bg-white border rounded-lg text-[12px] border-gray-300 font-bold w-[80px]'>USD 1500</button>
          </div>
        </div>
        <div className='w-full h-[160px] bg-white p-2 mt-2 rounded-md flex flex-col'>
          <button className='flex justify-between font-bold'>Rating<span className='text-blue-400'>Reset</span></button>
          <div className='flex flex-row mt-2 w-full h-[20px] items-center'>
            <input
              type="checkbox"
              id="checkbox1"
              checked={checkboxState.checkbox1}
              onChange={() => handleCheckboxChange("checkbox1")}
              className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-2 focus:ring-blue-300"
            />
            <RiStarSFill className='w-6 h-6 ml-2 text-yellow-500' />
            <RiStarSFill className='w-6 h-6 text-yellow-500' />
            <RiStarSFill className='w-6 h-6 text-yellow-500' />
            <RiStarSFill className='w-6 h-6 text-yellow-500' />
            <RiStarSFill className='w-6 h-6 text-yellow-500' />
            <p>(125)</p>
          </div>
          <div className='flex flex-row mt-2 w-full h-[20px] items-center'>
            <input
              type="checkbox"
              id="checkbox2"
              checked={checkboxState.checkbox2}
              onChange={() => handleCheckboxChange("checkbox2")}
              className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-2 focus:ring-blue-300"
            />
            <RiStarSFill className='w-6 h-6 ml-2 text-yellow-500' />
            <RiStarSFill className='w-6 h-6 text-yellow-500' />
            <RiStarSFill className='w-6 h-6 text-yellow-500' />
            <RiStarSFill className='w-6 h-6 text-yellow-500' />
            <RiStarSFill className='w-6 h-6 text-gray-300' />
            <p>(25)</p>
          </div>
          <div className='flex flex-row mt-2 w-full h-[20px] items-center'>
            <input
              type="checkbox"
              id="checkbox3"
              checked={checkboxState.checkbox3}
              onChange={() => handleCheckboxChange("checkbox3")}
              className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-2 focus:ring-blue-300"
            />
            <RiStarSFill className='w-6 h-6 ml-2 text-yellow-500' />
            <RiStarSFill className='w-6 h-6 text-yellow-500' />
            <RiStarSFill className='w-6 h-6 text-yellow-500' />
            <RiStarSFill className='w-6 h-6 text-gray-300' />
            <RiStarSFill className='w-6 h-6 text-gray-300' />
            <p>(5)</p>
          </div>
        </div>
        <div className='flex flex-col w-full h-[100px] bg-white mt-2 p-2 rounded-md'>
          <button className='flex justify-between font-bold'>Reservation Policy<span className='text-blue-400'>Reset</span></button>
          <div className='flex flex-row mt-2 w-full h-[20px] items-center'>
            <input
              type="checkbox"
              id="checkbox4"
              checked={checkboxState.checkbox4}
              onChange={() => handleCheckboxChange("checkbox4")}
              className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-2 focus:ring-blue-300"
            />
            <p className='ml-2 font-bold'>Refundable<span className='font-normal'>(125)</span></p>
          </div>
          <div className='flex flex-row mt-2 w-full h-[20px] items-center'>
            <input
              type="checkbox"
              id="checkbox5"
              checked={checkboxState.checkbox5}
              onChange={() => handleCheckboxChange("checkbox5")}
              className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-2 focus:ring-blue-300"
            />
            <p className='ml-2 font-bold'>Non-Refundable<span className='font-normal'>(125)</span></p>
          </div>
        </div>
      </div>
      <div className='flex flex-col w-3/4 h-max'>
        {Toanba.map((tte) => (
          <div key={tte.id} className='w-full h-[230px] flex flex-row rounded-lg border border-gray-300 bg-white'>
            <img src={tte.img} alt={tte.img} className='w-1/3 h-full bg-cover rounded-l-lg'></img>
            <div className='w-[70%] h-full p-3 flex flex-col'>
              <div className='w-full h-[50px] flex flex-row'>
                <p className='text-[20px] font-bold leading-none '>{tte.text1}<br/>{tte.text}</p>
                <button className='w-[100px] h-[30px] text-[13px] ml-3 rounded-xl text-yellow-500 bg-yellow-100 border border-yellow-300'>{tte.text2}</button>
              </div>
              <p className='text-[13px] flex flex-row text-blue-600 items-center font-bold'><PiControlFill className='w-3 h-3 text-blue-600'></PiControlFill>{tte.text3} <span className='underline'>Show on map</span></p>
              <div className='w-full h-[30px] flex flex-row items-center'>
                <RiStarSFill className='w-5 h-5 text-yellow-400'></RiStarSFill>
                <RiStarSFill className='w-5 h-5 text-yellow-400'></RiStarSFill>
                <RiStarSFill className='w-5 h-5 text-yellow-400'></RiStarSFill>
                <RiStarSFill className='w-5 h-5 text-yellow-400'></RiStarSFill>
                <RiStarSFill className='w-5 h-5 text-yellow-400'></RiStarSFill>
                <button className='w-[45px] h-[23px] bg-yellow-500 text-[10px] ml-1 text-white'>{tte.text7}</button>
                <p className='text-[15px] text-gray-400 ml-1'>{tte.text4}</p>
              </div>
              <p className='text-[15px] text-gray-600'>{tte.text5}</p>
            </div>
            <div className='w-[1px] h-full bg-gray-200'></div>
            <div className='w-[30%] h-full flex flex-col items-end p-3 bg-white rounded-r-lg'>
              <FaRegHeart className='flex w-5 h-5'></FaRegHeart>
              <div className='w-full h-[40%]'></div>
              <p className='text-[20px] text-blue-500 font-bold'>{tte.text6}</p>
              <p className='text-[10px] mt-2 text-gray-500'>{tte.text8}</p>
              <button className='w-[80%] h-[45px] mt-2 bg-blue-700 text-white rounded-lg'>See availability</button>
            </div>

          </div>
        ))}
      </div>
    </div >
  );
};

export default Toan2;
