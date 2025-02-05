import React, { useState } from 'react'
import { FiSearch } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import YouPacDet from './YouPacDet';
import MediaCenter from './MediaCenter';

const FullAll = () => {
    const [activeTab, setActiveTab] = useState('account');
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    return (
        <div className='flex flex-col w-[80%] h-auto bg-white rounded-md'>
            <div className="flex flex-row justify-between items-center bg-[#F9F9F9] w-full rounded-t-md border-b-2 p-4">
                <div className="flex flex-row items-center space-x-3 cursor-pointer">
                    <div>
                        <img
                            className="w-[50px] h-[50px] rounded-full"
                            src="https://m.media-amazon.com/images/M/MV5BMmU1YWU1NmMtMjAyMi00MjFiLWFmZmUtOTc1ZjI5ODkxYmQyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
                            alt=""
                        />
                    </div>
                    <div>
                        <p className="font-bold">Thanh Thanh Pham</p>
                        <p className="text-sm font-thin">PR Manager</p>
                    </div>
                    <div>
                        <MdKeyboardArrowDown />
                    </div>
                </div>
                <div>
                    <button className="text-xl font-bold text-[#D3D7D7] hover:text-black">My Activity /</button>
                    <button className="text-xl font-bold text-[#D3D7D7] hover:text-black"> Create</button>
                </div>
                <div className="flex flex-row border-[1px] border-[#167DC8] justify-center items-center bg-white px-2 py-1 rounded-md">
                    <div>
                        <input
                            className="w-full focus:outline-none"
                            placeholder="Search"
                            type="search"
                        />
                    </div>
                    <div className="text-[#167DC8] cursor-pointer">
                        <FiSearch />
                    </div>
                </div>
            </div>
            <div className="p-4">
                <div className="flex flex-col items-center justify-center w-full pt-10 ">
                    <div className="text-4xl ">
                        <span className="font-bold ">Create New Activity</span>
                    </div>
                    <div className='bg-[#104672] text-white font-semibold mt-10 rounded-full py-2 px-2'>
                        <button
                            className={`${activeTab === 'account' ? 'bg-[#167DC8]' : 'hover:bg-[#167DC8]'
                                } px-8 py-3 rounded-full mr-1 transition duration-300 `}
                            onClick={() => setActiveTab('account')}
                        >
                            Packege Information
                        </button>
                        <button
                            className={`${activeTab === 'information' ? 'bg-[#167DC8]' : 'hover:bg-[#167DC8]'
                                } px-8 py-3 rounded-full ml-1 transition duration-300 `}
                            onClick={() => setActiveTab('information')}
                        >
                            Pricing Strategy
                        </button>
                    </div>
                </div>
            </div>
            <YouPacDet />
            <MediaCenter />
            <div className='w-full h-[60px] flex items-center p-6'>
                <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                        className="w-3 h-3 text-blue-600 border-gray-300 rounded focus:ring focus:ring-blue-300"
                    />
                    <span className="text-gray-700">I hereby confrim that the provided information is accurate and give myconsert to proceed with the package.</span>
                </label>
            </div>
            <div className='flex justify-center w-full h-[50px]'>
                <button className="w-[10%] h-[70%] text-white bg-blue-600 rounded-3xl ">
                    Submit
                </button>
            </div>



        </div>
    )
}

export default FullAll
