import React, { useState } from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import logoAmba from "../../../assets/logoAMBA.webp";
import AccountTab from "./AccountTab";
import InformationTab from "./InformationTab"



const YourProperty = () => {
  const [activeTab, setActiveTab] = useState('account');
  return (
    <div className="flex flex-col justify-center  bg-white rounded-md w-[80%]">
      <div className="flex flex-row justify-between items-center bg-[#F9F9F9] w-full rounded-t-md border-b-2 p-4">
        <div className="flex flex-row space-x-3 items-center cursor-pointer">
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
          <p className="text-xl font-bold">Your Property</p>
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
        <div className="flex flex-col justify-center items-center w-full space-y-3 pt-2 ">
          <div className="flex justify-center items-center ">
            <img className="w-[10%] rounded-full" src={logoAmba} alt="" />
          </div>
          <div className="text-4xl">
            <span className="font-bold">Ambassador Cruise</span>
            {/* <span className="text-[#167DC8] font-bold"> Thanh</span> */}
          </div>
          <div className="">
            <span>09:00</span>
            <span> | </span>
            <span>1 Nov 2024</span>
          </div>
          <div className='bg-[#104672] text-white font-semibold rounded-full py-2 px-2'>
            <button
              className={`${activeTab === 'account' ? 'bg-[#167DC8]' : 'hover:bg-[#167DC8]'
                } px-8 py-2 rounded-full mr-1 transition duration-300 `}
              onClick={() => setActiveTab('account')}
            >
              Account
            </button>
            <button
              className={`${activeTab === 'information' ? 'bg-[#167DC8]' : 'hover:bg-[#167DC8]'
                } px-8 py-2 rounded-full ml-1 transition duration-300 `}
              onClick={() => setActiveTab('information')}
            >
              Information
            </button>
          </div>
        </div>
      </div>
      <div className='my-2'>
        {activeTab === 'account' && (
          <AccountTab />
        )}
        {activeTab === 'information' && (
          <InformationTab />
        )}
      </div>
    </div>
  )
}

export default YourProperty
