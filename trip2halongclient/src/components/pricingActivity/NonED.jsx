import React from 'react'
import { FiChevronUp } from "react-icons/fi";

const NonED = () => {
    return (
        <div className='flex w-full h-auto p-3 bg-white'>
            <div className='w-full h-auto bg-[#FAFAFA] flex flex-col p-4 rounded-md'>
                <div className='flex flex-row justify-between w-full h-auto mt-3'>
                    <p className='text-2xl font-bold'>Non-Refundable

                    </p>
                    <FiChevronUp />
                </div>
                <p className='text-[15px] font-medium text-gray-800 leading-none mt-3'>Guests can cancle their reservation without any penalties, provided the cancellation is made at least 24 hours befoe the scheduled<br />
                    departure.
                </p>
                <div className='flex flex-row justify-between items-center w-full h-[40px] rounded-md   mt-3'>
                    <div className='w-[65%] h-full bg-white rounded-md items-center border border-gray-200 flex-row flex'>
                        <div className='w-[40%] h-full  rounded-l-md flex flex-row items-center justify-between pl-2 pr-2'>
                            <p className='text-[15px] font-bold'>Period 1</p>
                            <p className='text-[15px]'>Date:<span className='text-[#187DCA] font-bold'>May 17 - May 19,2015</span></p>
                        </div>
                        <div className='w-[1px] h-[70%] bg-gray-200'></div>
                        <div className='w-[30%] h-full  flex flex-row items-center justify-between pl-2 pr-2'>
                            <p className='text-[15px]'>Package Cost:<span className='text-[#187DCA] font-bold'>20,000,000 VND</span></p>
                        </div>
                        <div className='w-[1px] h-[70%] bg-gray-200'></div>
                        <div className='w-[30%] h-full  flex flex-row items-center rounded-r-md justify-between pl-2 pr-2'>
                            <p className='text-[15px]'>Selling Price:<span className='text-[#187DCA] font-bold'>20,000,000 VND</span></p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row justify-between items-center w-full h-[40px] rounded-md mt-2'>
                    <div className='w-[65%] h-full bg-white rounded-md items-center border border-gray-200 flex-row flex'>
                        <div className='w-[40%] h-full  rounded-l-md flex flex-row items-center justify-between pl-2 pr-2'>
                            <p className='text-[15px] font-bold'>Period 2</p>
                            <p className='text-[15px]'>Date:<span className='text-[#187DCA] font-bold'>May 17 - May 19,2015</span></p>
                        </div>
                        <div className='w-[1px] h-[70%] bg-gray-200'></div>
                        <div className='w-[30%] h-full  flex flex-row items-center justify-between pl-2 pr-2'>
                            <p className='text-[15px]'>Package Cost:<span className='text-[#187DCA] font-bold'>20,000,000 VND</span></p>
                        </div>
                        <div className='w-[1px] h-[70%] bg-gray-200'></div>
                        <div className='w-[30%] h-full  flex flex-row items-center rounded-r-md justify-between pl-2 pr-2'>
                            <p className='text-[15px]'>Selling Price:<span className='text-[#187DCA] font-bold'>20,000,000 VND</span></p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default NonED
