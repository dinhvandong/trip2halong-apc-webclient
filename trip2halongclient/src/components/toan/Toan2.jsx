import React, { useState } from 'react';
import Toanc from './Toanc.json';
import { HiMiniXMark } from "react-icons/hi2";
import { RiStarSFill } from "react-icons/ri";
import Toanba from "./toanba.json";
import { PiControlFill } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Toan2 = ({ viewMode }) => {
  const navigate = useNavigate();
  
  const gotonext = () => {
    // navigate('/toandfg')
    navigate('/booking-process')

  }
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
  const [liked, setLiked] = useState(false);

  return (
    <div className='relative flex flex-row w-full mb-6 bg-gray-200 px-14 h-max'>
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
            <button className='h-[30px] bg-white border rounded-lg text-[12px] hover:bg-blue-200 hover:text-blue-500 border-gray-300 font-bold w-[80px]'>USD 150</button>
            <button className='h-[30px] bg-white border rounded-lg text-[12px] hover:bg-blue-200 hover:text-blue-500 border-gray-300 font-bold w-[80px]'>USD 1500</button>
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
      <div className={`flex flex-col w-3/4 h-max ${viewMode === 'grid' ? 'grid grid-cols-3 gap-4' : ''}`}>
        {Toanba.map((tte) => (
          <div
            key={tte.id}
            className={`w-full h-auto mt-4 flex ${viewMode === 'grid' ? 'flex-col items-center' : 'flex-row'} rounded-lg border border-gray-300 bg-white`}
          >
            <img
              src={tte.img}
              alt={tte.img}
              onClick={gotonext}
              className={`${viewMode === 'grid' ? 'w-full h-[150px] bg-cover bg-center rounded-t-lg' : 'w-[320px] bg-center h-[230px] rounded-l-lg'
                }`}
            />
            <div className={`${viewMode === 'grid' ? 'p-2' : 'p-3 flex flex-col'}`}>
              <p className='text-[20px] font-bold flex flex-row leading-none'>{tte.text1}<br />
                {tte.text}
                <button className='w-[100px] ml-3 h-[35px] text-[10px] text-yellow-400 bg-yellow-100 border border-yellow-400 rounded-xl'>{tte.text2}</button>
              </p>
              <p className='flex flex-row text-[12px] text-blue-400 mt-1'><PiControlFill className='w-4 h-4 text-blue-400'></PiControlFill>{tte.text3}<span className='ml-1 underline'>Show on map</span></p>
              <div className='flex flex-row items-center mt-2 text-yellow-400' style={{ display: 'flex', gap: '1px' }}>
                {Array(5).fill(null).map((_, index) => (
                  <RiStarSFill key={index}/>
                ))}
                <button className='w-[40px] h-[20px] text-white text-center text-[10px] bg-yellow-400'>ART</button>
                <p className='text-gray-500 text-[15px]'>{tte.text4}</p>
              </div>

              <p className='text-[16px] mt-4 text-gray-600'>{tte.text5}</p>
            </div>
            {viewMode !== 'grid' && <div className='w-[1px] h-full bg-gray-200'></div>}
            <div className={`${viewMode === 'grid' ? 'hidden' : 'w-[350px] h-[230px] flex flex-col items-end p-3 bg-white rounded-r-lg'}`}>
              <FaRegHeart className='w-4 h-4'></FaRegHeart>
              <div className='w-full h-[50%]'></div>
              <p className='text-[20px] text-blue-500 font-bold leading-none'>{tte.text6}</p>
              <span className='text-[10px] text-gray-500'>{tte.text8}</span>
              <button className='w-[95%] h-[45px] mt-2 bg-blue-700 text-white text-[13px] rounded-lg'>See availability</button>
            </div>
          </div>
        ))}
      </div>
    </div >
  );
};

export default Toan2;
