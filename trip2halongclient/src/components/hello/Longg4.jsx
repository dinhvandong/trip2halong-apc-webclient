import React from 'react'
import { FaStar } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom';

const Longg4 = () => {
    const navigate = useNavigate();

    const gotonext = () => {
        navigate('/toanad')
    }

    const cruises = Array(3).fill({ name: "Ambassador Cruise", rating: "5.0" });

    return (
        <div className='flex flex-col bg-[#F4F4F4] w-full h-[350px] px-24 '>
            <h1 className='px-5 py-2 text-3xl font-bold text-[#505556]'>Guests Reviews</h1>

            <div className="flex items-center space-x-2">
                {/* 5 ngôi sao */}
                <div className="flex px-5 space-x-1">
                    {[...Array(5)].map((_, index) => (
                        <FaStar key={index} className="w-3 h-3 mt-2 ml-1 text-[#FFBB0B]" />
                    ))}
                    <button className="mt-1 w-8 h-5 font-bold text-white bg-[#FFBB0B] rounded text-[10px] ">
                        4.8%
                    </button>
                    <p className='mt-0.5'>(5000+ reviews)</p>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-2 mt-3  w-[85%]">
                
                {cruises.map((cruise, index) => (
                    
                    <div
                        key={index}
                        className="flex flex-col items-center gap-3 px-5 py-5 bg-white border rounded-md shadow w-30"
                    >
                        <div className='flex w-full gap-4'>

                        <div className="w-14 h-14 bg-[#D9D9D9] rounded-full"></div>

                        <div>
                            <h3 className="flex justify-start items-center gap-1 text-[15px] font-semibold">
                                {cruise.name}
                                <span className="text-[15px] text-blue-500">✔</span>
                            </h3>

                            <div className="flex -ml-1 space-x-1">
                                {[...Array(5)].map((_, index) => (
                                    <FaStar key={index} className="w-3 h-3 mt-2 ml-1 text-[#FFBB0B]" />
                                ))}
                                <button className="mt-1 w-8 h-5 font-bold text-white bg-[#FFBB0B] rounded text-[10px] ">
                                    4.8%
                                </button>
                               

                            </div>
                            

                        </div>
                    </div>
                    <p className='text-[14px]'>Figma ipsum component variant main layer. Flatten strikethrough effect community effect select slice. Style pencil team list flows flows outline pencil. Plugin horiz...</p>
                    </div>
                ))}
            </div>
            <div className='w-full h-[110px] flex bg-[#F4F4F4] justify-center items-center'>
            <button onClick={gotonext} className='bg-[#167DC8] w-[400px] h-[50px] rounded-lg cursor-pointer text-white font-bold'>Proceed Payment</button>
                </div>
        </div>
    )
}

export default Longg4
