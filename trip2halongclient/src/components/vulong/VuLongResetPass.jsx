import React from 'react'
import logo from './assets/halong_trip_logo.png';
import usalogo from './assets/usalogo.png'
import { RiRefund2Line } from "react-icons/ri";
import { PiUserCircleLight } from "react-icons/pi";
import mail from './assets/mail_icon.png'

const VuLongResetPass = () => {
    return (
        <div className='flex flex-col w-full h-auto'>
        <header className='w-full fixed top-0 left-0 right-0 z-50 bg-[#167dc8] h-auto md:h-[65px] flex flex-col md:flex-row'>
            <div className="flex items-center w-full h-auto md:w-1/2 md:h-full">
                <img src={logo} alt={logo} className="ml-5 w-[100px] h-[50px]" />
            </div>
            <div className="flex flex-col items-center justify-start w-full h-auto md:w-1/2 md:h-full md:flex-row">
                <button className="w-full text-lg font-semibold text-white md:w-1/5">Explore</button>
                <button className="w-full text-lg font-semibold text-white md:w-1/5">Travel Essentials</button>
                <button className="w-full text-lg font-semibold text-white md:w-1/5">My Trip</button>
                <button className="text-white font-semibold text-lg h-[60%] w-full  md:w-[20%] border rounded-full border-white mr-6">List Your Property</button>
                <button><RiRefund2Line className="mr-2 text-3xl text-white" /></button>
                <button><img src={usalogo} alt={usalogo} className="mr-2 scale-75 " /></button>
                <button><PiUserCircleLight className="text-3xl text-white " /></button>
            </div>
        </header>
        <div className="flex justify-center w-full p-8 mt-20 bg-white rounded-lg shadow-lg">
                <div className="flex flex-col items-center h-screen w-[35%]">
                    <img src={mail} alt={mail} className='w-[96px] h-[96px]'></img>
                    <h2 className="mb-2 text-xl font-bold text-gray-700">We've send reset password link to</h2>
                    <h2 className="mb-2 text-xl font-bold text-blue-500">yourname@example.com</h2>
                    <button
                            type="submit"
                            className="w-full px-4 py-3 mt-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
                            Send Reset Link
                    </button>
                    <p className='text-[15px] text-gray-500'>Didn't received email?<span className='mr-1 text-blue-500 underline'>Recent email</span></p>
        
        </div>
        
        
        </div>
        </div>
    )
}

export default VuLongResetPass
