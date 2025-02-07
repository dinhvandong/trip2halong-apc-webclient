import React, { useState } from 'react'
import { IoKeyOutline } from "react-icons/io5";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Header from './Header';

const Reset = () => {
    const [isPassword, setIsPassword] = useState(false); // For the first input field
    const [isConPassword, setIsConPassword] = useState(false);
    const toggleInputTypePass = () => {
        setIsPassword((prevState) => !prevState); // Toggle state for the first input field
    };

    const toggleInputTypePassCon = () => {
        setIsConPassword((prevState) => !prevState); // Toggle state for the second input field
    };



    return (
        <div className=' h-screen bg-zinc-100'>
            <Header />
            <div className="flex flex-col w-screen items-center justify-center  ">
                <IoKeyOutline className='text-center text-8xl text-slate-700 mt-32 mb-16'></IoKeyOutline>
                <div className='text-slate-700 font-bold text-4xl mb-1'>Reset Your Password</div>
                <div className='text-slate-700 font-normal text-xl mb-2'>Enter new password below</div>
                <div className='font-medium text-slate-700 text-xl flex justify-start w-1/3 mb-2 ml-8'>Enter Your New Password <span className='text-xl ml-1 text-red-600'>*</span></div>
                <div className='w-1/3 relative'>
                    <input
                        type={isPassword ? "password" : "text"}
                        placeholder="Enter text"
                        className="w-full p-4 border border-blue-400 rounded-lg focus:outline-none relative mb-5 "
                    ></input>
                    <button
                        onClick={toggleInputTypePass}
                        className="text-slate-700 text-lg rounded-lg  absolute right-4 top-5"
                    >
                        {isPassword ? < FaEye /> : < FaEyeSlash />}
                    </button>
                </div>
                <div className='font-medium text-slate-700 text-xl flex justify-start w-1/3 mb-2 ml-8'>Enter Your New Password <span className='text-xl ml-1 text-red-600'>*</span></div>
                <div className='w-1/3 relative'>
                    <input
                        type={isConPassword ? "password" : "text"}
                        placeholder="Enter text"
                        className="w-full p-4 border border-blue-400 rounded-lg focus:outline-none relative "
                    ></input>
                    <button
                        onClick={toggleInputTypePassCon}
                        className="text-slate-700 text-lg rounded-lg  absolute right-4 top-5"
                    >
                        {isConPassword ? < FaEye /> : < FaEyeSlash />}
                    </button>
                    <button className='p-3 text-white text-xl font-bold text-center w-full bg-[#167dc8] mt-10'>Submit</button>
                </div>
                
            </div>
        </div>
    );

}
export default Reset