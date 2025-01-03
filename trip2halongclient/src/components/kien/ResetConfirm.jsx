import { FaCircleCheck } from "react-icons/fa6";
import Header from './Header';
import React, { useState } from 'react'
import usa from './assets/USA.png'
const ResetConfirm = () => {
    return (
        <div className=' h-screen bg-zinc-100 flex flex-col items-center'>
            <Header />
           <FaCircleCheck className="text-7xl text-center text-emerald-400 mt-36 mb-8"/>
           <div className='text-slate-700 font-bold text-4xl mb-1'>Successfully Reset Password</div>
           <div className='text-slate-700 font-normal text-xl mb-2'>Thank you for your forgetfullness</div>
           <button className='p-3 text-white text-xl font-bold text-center w-1/3 bg-[#167dc8] mt-6'>Back to home</button>
           
        </div>
    );

}
export default ResetConfirm