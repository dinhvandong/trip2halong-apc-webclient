import React from 'react'
import logo2 from "../assets/logo2.png";

const Welcome = () => {
    return (
        <div className='flex flex-col items-center justify-center w-full h-auto p-6 bg-white'>
            <img className="w-[10%]" src={logo2} alt="" />
            <p className='text-[30px] text-center font-bold text-black leading-none'>Welcome Back,<span className='text-blue-500'> Thanh</span><br />
                <span className='text-[15px] text-gray-400'>09:00 AM/ 1 nov 2024</span>
            </p>
            <div className='w-[20%] h-[45px] bg-[#18373a] p-1 mt-4 rounded-3xl'>
                <button className='w-1/2 bg-[#18373a] text-white h-full hover:bg-blue-600 rounded-3xl'>Activity</button>
                <button className='w-1/2 bg-[#18373a] h-full hover:bg-blue-600 text-white rounded-3xl'>Package</button>

            </div>



        </div>
    )
}

export default Welcome
