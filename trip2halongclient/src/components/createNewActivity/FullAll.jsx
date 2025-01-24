import React, { useState } from 'react'
import { FiChevronDown } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import Category from './Category';
import Media from './Media';
import Pricing from './Pricing';
import { useNavigate } from 'react-router-dom';


const FullAll = () => {
    const navigate = useNavigate();

    const gotonextAc = () => {
        navigate('/activity/activity2');
    };

    const [checkedd, setCheckedd] = useState({
        checkbox1: false,
        checkbox2: false,
    })

    const handchechbox = (event) => {
        const { name, checkedd } = event.target;
        setCheckedd((prevCheckedd) => ({
            ...prevCheckedd,
            [name]: checkedd,
        }));
    }
    return (
        <div className='flex flex-col w-[80%] h-auto bg-white rounded-md'>
            <div className='flex flex-row w-full h-[50px] justify-between bg-[#e1e3e1] rounded-md'>
                <div className='flex flex-row items-center w-[20%] h-full px-3'>
                    <button className='bg-yellow-300 rounded-full w-9 h-9'></button>
                    <p className='ml-2 text-[15px] text-black font-bold leading-none'>Thanh Thanh Pham <br />
                        <span className='text-[13px] font-normal '>PR Manager</span>
                    </p>
                    <button><FiChevronDown className='ml-3'></FiChevronDown></button>
                </div>
                <div className='flex flex-row items-center justify-center w-[20%] h-full '>
                    <button className='font-bold text-gray-400 hover:text-black'>My Activity</button>
                    <p>/</p>
                    <button className='font-bold text-gray-400 hover:text-black'>Create</button>
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
            <div className='flex flex-col w-full h-auto p-4'>
                <div className='w-full h-[70px] bg-white flex justify-center items-center'>
                    <p className='font-bold text-[28px]'>Create New Category</p>
                </div>
                <Category />
                <Media />
                <Pricing />
                <div className='w-full h-[50px] flex items-center p-3'>
                    <div className="w-full h-full">
                        <div className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                id="checkbox1"
                                name="checkbox1"
                                checked={checkedd.checkbox1}
                                onChange={handchechbox}
                                className="w-4 h-4 border-gray-300 rounded"
                            />
                            <label htmlFor="checkbox1" className="text-gray-700">
                                I hereby confrim that the provided information is accurate and give my consent to procced with pulingshing the package.
                            </label>
                        </div>
                    </div>


                </div>
                <div className='flex items-center justify-center w-full h-auto'>
                    <button onClick={gotonextAc} className='px-8 py-2 text-white bg-blue-700 rounded-2xl'>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default FullAll
