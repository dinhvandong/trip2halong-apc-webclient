import React from 'react'
import { FiChevronDown } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import Welcome from './Welcome';
import Com from './Com';
import Creat from './Creat';


const Statac2 = () => {
    return (
        <div className='flex flex-col w-[80%] h-auto bg-white rounded-md' >
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
                    <p className="text-xl font-bold">My Activity</p>
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
            <Welcome />
            <Com />
            <Creat />
        </div>
    )
}

export default Statac2
