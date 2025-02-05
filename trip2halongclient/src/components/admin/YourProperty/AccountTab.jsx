import React, { useState } from 'react'
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";

const AccountTab = () => {
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    retype: false,
  });
  const [showPasswordNew, setShowPasswordNew] = useState({
    current: false,
    new: false,
    retype: false,
  });

  const togglePasswordVisibility = (field) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };
  const togglePasswordNewVisibility = (field) => {
    setShowPasswordNew((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };
  return (
    <div className='mx-4'>
      <div className='bg-[#F9F9F9]   px-7 pb-6 pt-5 rounded-xl' >
        <div className='flex-1 ml-3'>
          <h3 className='font-semibold text-lg'>Username</h3>
          <p className='text-[#ADB1B2] '>*Please use English character only</p>
        </div>
        <div className='flex-1 mt-3'>
          <h5 className='ml-3 font-medium text-sm'>Email<span className='text-red-500'>*</span></h5>
          <input className='w-full py-2 px-3 mt-1 font-medium rounded-md inset-shadow-2xs  focus:outline-none rounded-l-md' type="text" />
        </div>
      </div>
      <div>
        <div className='bg-[#F9F9F9] px-7 pb-6 pt-5  rounded-xl mt-6' >
          <div className='flex-1 ml-3'>
            <h3 className='font-semibold text-lg '>Change Your Password</h3>
            <p className='text-[#ADB1B2]'>*Please use English character only</p>
          </div>
          <div className='flex-1 mt-3'>
            <div className=''>
              <h5 className='ml-3 font-medium text-sm'>Your Current Password<span className='text-red-500'>*</span></h5>
              <div className="flex items-center  rounded-md mt-2">
                <input
                  className="w-full py-2 px-3 font-medium inset-shadow-2xs  focus:outline-none rounded-l-md"
                  type={showPassword.current ? "text" : "password"}
                  
                />
                <button
                  className="px-3 py-3 text-gray-500 bg-white  hover:text-gray-700 rounded-r-md focus:outline-none"
                  onClick={() => togglePasswordVisibility("current")}
                >
                  {showPassword.current ? <FaRegEye /> : <FaRegEyeSlash />}
                </button>
              </div>
            </div>
            <div className='mt-1'>
              <h5 className='ml-3 font-medium text-sm'>Your New Password<span className='text-red-500'>*</span></h5>
              <div className="flex items-center rounded-md mt-2">
                <input
                  className="w-full py-2 px-3 font-medium inset-shadow-2xs rounded-l-md focus:outline-none "
                  type={showPasswordNew.current ? "text" : "password"}
                  
                />
                <button
                  className="px-3 py-3 text-gray-500 bg-white  hover:text-gray-700 rounded-r-md focus:outline-none"
                  onClick={() => togglePasswordNewVisibility("current")}
                >
                  {showPasswordNew.current ? <FaRegEye /> : <FaRegEyeSlash />}
                </button>
              </div>
            </div>
            <div className='mt-1'>
              <h5 className='ml-3 font-medium text-sm'>Re-type New Password<span className='text-red-500'>*</span></h5>
              <div className="flex items-center rounded-md mt-2">
                <input
                  className="w-full py-2 px-3 font-medium inset-shadow-2xsrounded-l-md focus:outline-none "
                  type={showPasswordNew.current ? "text" : "password"}
                  
                />
                <button
                  className="px-3 py-3 text-gray-500 bg-white  hover:text-gray-700 rounded-r-md focus:outline-none"
                  onClick={() => togglePasswordNewVisibility("current")}
                >
                  {showPasswordNew.current ? <FaRegEye /> : <FaRegEyeSlash />}
                </button>
              </div>
            </div>
            <div className='grid justify-items-end'>
              <button className=' mt-5 px-6 py-3 rounded-full mr-1 bg-[#167DC8] text-white font-medium text-sm hover:bg-[#104672] transition duration-300 '>Change Password</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountTab
