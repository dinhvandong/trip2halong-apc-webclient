import React, { useState } from 'react'
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
// import Image from './Image';
import all from './all.json';


const AllNewOne = () => {


    return (
        <div className='flex flex-col w-full h-auto bg-white'>
            <div className='w-full h-[200px] '></div>
            <div className='flex w-full h-auto bg-red-400'>
                <div className='flex flex-col items-end w-full h-auto bg-green-500'>
                    <div className='w-[88%] h-[100px] flex flex-row mt-4 items-center bg-yellow-300'>
                        <p className='w-1/2 text-[35px] text-blue-500 font-bold'>Hot Travel News</p>
                        <div className='w-1/2 h-[70px] flex flex-row items-center'>
                            <button
                                className='w-[40px] h-[40px] text-blue-500 flex justify-center items-center rounded-md border border-blue-500'

                            >
                                <FiChevronLeft />
                            </button>
                            <button
                                className='w-[40px] h-[40px] ml-1 text-blue-500 flex justify-center items-center rounded-md border border-blue-500'

                            >
                                <FiChevronRight />
                            </button>
                        </div>
                    </div>
                    {/* <div className='flex flex-row w-[88%] h-auto bg-red-400'>
                        {all.map((item) => (
                            <div key={item.id} className='flex flex-col w-[300px] h-auto bg-yellow-300'>
                                <img src={item.image} className='w-full h-[55%]'></img>

                            </div>
                        ))}
                    </div> */}
                </div>
            </div>

        </div>
    )
}

export default AllNewOne
