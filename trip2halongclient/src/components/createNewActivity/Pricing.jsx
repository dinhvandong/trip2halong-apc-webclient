import React, { useState } from 'react'
import { FiChevronDown } from "react-icons/fi";
import Calendar from './Calendar';
import Calendar2 from './Calendar2';

const Pricing = () => {
   
    return (
        <div className='w-full h-auto p-2 flex flex-col mt-3 bg-[#e1e3e1] rounded-md'>
            <p className='text-[20px] font-bold'>Pricing Strategy</p>
            <div className='flex flex-row items-center justify-between w-full h-auto p-2'>
                <p className='text-[17px] text-black font-bold'>Flexie Rate <br />
                    <p className='text-[15px] font-medium text-black leading-none'>Guests can cancel theri reservantion without any penalties,provided the cancellation is made at least 24 hours before the scheduled<br />
                        depature
                    </p>
                </p>
                <button><FiChevronDown></FiChevronDown></button>
            </div>
            <div className='flex flex-row justify-between w-full h-auto p-2'>
                <div className='w-[49%] h-auto flex flex-col'>
                    <p className='text-[15px] ml-2 text-black font-bold'>Start Date<span className='text-red-500'>*</span></p>
                    <Calendar />
                    <p className='text-[13px] ml-2 text-gray-400 mt-2'>Your video may take extra time to be reviewed</p>
                </div>
                <div className='w-[49%] h-auto flex flex-col'>
                    <p className='text-[15px] ml-2 text-black font-bold'>End Date<span className='text-red-500'>*</span></p>
                    <Calendar2 />
                    <p className='text-[13px] ml-2 text-gray-400 mt-2'>Your video may take extra time to be reviewed </p>
                </div>
            </div>
            <div className='flex flex-row justify-between w-full h-auto p-2'>
                <div className='w-[49%] h-auto flex flex-col'>
                    <p className='text-[15px] text-black font-bold'>You Package Cost<span className='text-red-500'>*</span></p>
                    <div className="flex flex-row items-center w-full h-[40px] rounded-md bg-white">
                        <div className='w-full h-full rounded-md'>
                            <input
                                className="w-full h-full px-3 rounded-l-md focus:outline-none"
                                placeholder="Please upload your standand itnerery"
                                type="number"
                            />
                        </div>
                        <p className='px-3 py-3 font-bold'>VND</p>
                    </div>
                    <p className='text-[13px] ml-2 text-gray-400 mt-2'>Please insert price in VND</p>
                </div>
                <div className='w-[49%] h-auto flex flex-col'>
                    <p className='text-[15px] text-black font-bold'>Your Selling Price<span className='text-red-500'>*</span></p>
                    <div className="flex flex-row items-center w-full h-[40px] rounded-md bg-white">
                        <div className='w-full h-full rounded-md'>
                            <input
                                className="w-full h-full px-3 rounded-l-md focus:outline-none"
                                placeholder="Please upload your standand itnerery"
                                type="number"
                            />
                        </div>
                        <p className='px-3 py-3 font-bold'>VND</p>
                    </div>
                    <p className='text-[13px] ml-2 text-gray-400 mt-2'>Please insert price in VND</p>
                </div>
            </div>
            <div className='flex flex-row items-center justify-between w-full h-auto p-2'>
                <p className='text-[17px] text-black font-bold'>Non-refundable Rate<br />
                    <p className='text-[15px] font-medium text-black leading-none'>Guests can cancel theri reservantion without any penalties,provided the cancellation is made at least 24 hours before the scheduled<br />
                        depature
                    </p>
                </p>
                <button><FiChevronDown></FiChevronDown></button>
            </div>
            <div className='flex flex-row items-center justify-between w-full h-auto p-2'>
                <p className='text-[17px] text-black font-bold'>Early Bird Rate<br />
                    <p className='text-[15px] font-medium text-black leading-none'>Guests can cancel theri reservantion without any penalties,provided the cancellation is made at least 24 hours before the scheduled<br />
                        depature
                    </p>
                </p>
                <button><FiChevronDown></FiChevronDown></button>
            </div>

        </div>
    )
}

export default Pricing
