import React from 'react'
import { FiChevronDown } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import Welcome from './Welcome'; 
import Com from './Com';
import Creat from './Creat';


const Statac2 = () => {
    return (
        <div className='flex flex-col w-[80%] h-auto bg-white rounded-md' >
            <div className='flex flex-row w-full h-[50px] justify-between bg-[#e1e3e1] rounded-md'>
                <div className='flex flex-row items-center w-[20%] h-full px-3'>
                    <button className='bg-yellow-300 rounded-full w-9 h-9'></button>
                    <p className='ml-2 text-[15px] text-black font-bold leading-none'>Thanh Thanh Pham <br />
                        <span className='text-[13px] font-normal '>PR Manager</span>
                    </p>
                    <button><FiChevronDown className='ml-3'></FiChevronDown></button>
                </div>
                <div className='flex items-center justify-center w-[20%] h-full '>
                    <button className='font-bold text-black'>My Activity</button>
                </div>
                <div className="flex flex-row items-center justify-center px-2 py-1 rounded-md">
                    <div>
                        <input
                            className="w-full px-3 focus:outline-none"
                            placeholder="Search"
                            type="search"
                        />
                    </div>
                    <div className="text-[#167DC8] cursor-pointer px-2 py-1 bg-white">
                        <FiSearch />
                    </div>
                </div>
            </div>
            <Welcome/>
            <Com/>
            <Creat/>
        </div>
    )
}

export default Statac2
