import React, { useState } from 'react';
import { FaRegEyeSlash } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";

const CreateAccount = () => {

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const [showBusinessInfo, setShowBusinessInfo] = useState(false);
    const toggleBusinessInfo = () => {
        setShowBusinessInfo(!showBusinessInfo);
    };
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState({
        name: 'Vietnam',
        code: '+84',
        flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1200px-Flag_of_Vietnam.svg.png',
    });

    const countries = [
        {
            name: 'Vietnam',
            code: '+84',
            flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1200px-Flag_of_Vietnam.svg.png',
        },
        {
            name: 'USA',
            code: '+1',
            flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1920px-Flag_of_the_United_States.svg.png',
        },
    ];

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleCountrySelect = (country) => {
        setSelectedCountry(country);
        setIsDropdownOpen(false);
    };


    return (
        <div className=''>
            <div className='max-w-[60%] m-auto pt-5'>
                <h1 className='text-center text-lg font-semibold text-neutral-900'>Create an account</h1>
                <p className='text-center text-sm text-slate-700'>Create your trip2 account to access your services</p>
                <div className='shadow-md bg-white px-5 mt-5'>
                    <h3 className='font-semibold text-neutral-900'>Personal information</h3>
                    <p className='text-slate-700 text-sm'>please provide your personal information as per your passport or ID Card</p>
                    <p className='text-slate-700 text-sm pb-4 '>"Please use English charater only"</p>
                    <hr />
                    <div className='flex  mt-3'>
                        <div className='flex-1'>
                            <h5 className='text-[13px] font-semibold mb-2 text-neutral-900'>Nationlity<span className='text-red-500'>*</span></h5>
                            <select className=' w-full text-sm py-2 px-1 pl-2 border-gray-300 rounded-md shadow-sm font-semibold '>
                                <option>Vietnam</option>
                            </select>
                        </div>
                        <div className='flex-1 px-3'>
                            <h5 className='text-[13px] font-semibold mb-2 text-neutral-900'>Title<span className='text-red-500'>*</span></h5>
                            <select className=' w-full text-sm py-2 px-1 pl-2 border-gray-300 rounded-md shadow-sm font-semibold'>
                                <option>Mr</option>
                                <option>Ms</option>
                            </select>
                        </div>
                        <div className='flex-1 '>
                            <h5 className='text-[13px] font-semibold mb-2 text-neutral-900'>Full Name<span className='text-red-500'>*</span></h5>
                            <input className=' w-full text-sm py-2 px-1 pl-2 border-gray-300 rounded-md shadow-sm font-semibold' />
                        </div>
                    </div>
                    <div className='flex mt-2'>
                        <div className='flex-1'>
                            <h5 className='text-[13px] font-semibold mb-2 text-neutral-900 mt-1'>Phone Number<span className='text-red-500'>*</span></h5>

                            <div className="flex items-center">
                                {/* Dropdown */}
                                <div className="relative">
                                    <button
                                        onClick={toggleDropdown}
                                        className="py-2 px-3 shadow-inner font-semibold text-sm w-24 bg-gray-100 flex items-center "
                                    >
                                        <img
                                            className="w-5 h-4 mr-1"
                                            src={selectedCountry.flag}
                                            alt={selectedCountry.name}
                                        />
                                        <span className='flex'>{selectedCountry.code} <FaAngleDown className='ml-1 pt-1 text-lg' /></span>
                                        
                                    </button>

                                    {isDropdownOpen && (
                                        <div className="absolute mt-1 bg-white shadow-lg rounded w-40">
                                            {countries.map((country) => (
                                                <div
                                                    key={country.code}
                                                    className="p-2 hover:bg-gray-100 flex items-center cursor-pointer"
                                                    onClick={() => handleCountrySelect(country)}
                                                >
                                                    <img
                                                        className="w-5 h-5 mr-2"
                                                        src={country.flag}
                                                        alt={country.name}
                                                    />
                                                    <span>{country.name} ({country.code})</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Input */}
                                <input
                                    className="shadow-inner w-full text-sm py-2 px-1 pl-2 "
                                    placeholder="012 345 6789"
                                />
                            </div>

                        </div>
                        <div className='flex-1 px-3 '>
                            <h5 className='text-[13px] font-semibold mb-2 mt-1'>Email<span className='text-red-500'>*</span></h5>
                            <input className='shadow-inner  w-full text-sm py-2 px-1 pl-2' placeholder='huy12520@gmail.com' />
                        </div>

                    </div>
                    <div className=''>
                        <h5 className='text-[13px] text-neutral-900 font-semibold mt-4 mb-3 ml-3'>
                            Password
                            <span className='text-red-500'>*</span>
                        </h5>
                        <div className='flex border rounded-md items-center'>
                            <p className='w-[130px] text-sm pl-3 font-semibold'>Your Password</p>
                            <input
                                className='shadow-inner w-full text-sm py-2 px-1 pl-2'
                                type={showPassword ? 'text' : 'password'}
                            />
                            <button
                                type="button"
                                className='px-2 text-sm text-gray-500'
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? <MdOutlineRemoveRedEye /> : <FaRegEyeSlash />}
                            </button>
                        </div>
                    </div>
                    <div className='pb-10'>
                        <h5 className='text-[13px] text-neutral-800 font-semibold mt-4 mb-3 ml-3'>
                            Re-type Password
                            <span className='text-red-500'>*</span>
                        </h5>
                        <div className='flex border rounded-md items-center'>
                            <input
                                className='shadow-inner w-full text-sm py-2 px-1 pl-3'
                                type={showPassword ? 'text' : 'password'}
                            />
                            <button
                                type="button"
                                className='px-2 text-sm text-gray-500'
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? <MdOutlineRemoveRedEye /> : <FaRegEyeSlash />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-w-[60%] m-auto pt-5'>


                <label className="inline-flex items-center w-full">
                    <input
                        type="checkbox"
                        onChange={toggleBusinessInfo}
                        className="rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"
                    />
                    <span className="ml-2 text-sm text-gray-600">
                        Do you want to <span className='font-semibold'>create a business account?</span>
                    </span>
                </label>
                {showBusinessInfo && (
                    <div className='shadow-md bg-white px-5 my-5 '>
                        <h3 className='font-semibold text-neutral-900'>Business information</h3>
                        <p className='text-slate-700 text-sm'>please provide your business information as per your business registered licence.</p>
                        <p className='text-slate-700 text-sm pb-4 '>"Please use English charater only"</p>
                        <hr />
                        <div className='flex  mt-3 px-2'>
                            <div className='flex-1'>
                                <h5 className='text-[13px] font-semibold mb-2 text-neutral-900'>Country<span className='text-red-500'>*</span></h5>
                                <select className=' w-full text-sm py-2 px-1 pl-2 border-gray-300 rounded-md shadow-sm font-semibold '>
                                    <option>Vietnam</option>
                                </select>
                            </div>

                            <div className='flex-1 '>
                                <h5 className='text-[13px] font-semibold mb-2 text-neutral-900'>Business Name<span className='text-red-500'>*</span></h5>
                                <input placeholder="Enter your Business's name"
                                    className=' w-full text-[13px] py-2 px-1 pl-2 border-gray-300  rounded-md shadow-sm ' />
                            </div>
                        </div>
                        <div className='flex  mt-3'>

                            <div className=' px-3'>
                                <h5 className='text-[13px] font-semibold mb-2 text-neutral-900'>Busoness owner<span className='text-red-500'>*</span></h5>
                                <select className=' w-[115px] text-[13px] py-2 px-1 pl-2 border-gray-300 rounded-md shadow-sm font-semibold'>
                                    <option>Mr</option>
                                    <option>Ms</option>
                                </select>
                            </div>
                            <div className='flex-1 '>

                                <input placeholder='Jont Smith'
                                    className='mt-7 w-full text-sm py-2 px-1 pl-2 border-gray-300 rounded-md shadow-sm ' />
                            </div>
                        </div>
                        <div className='flex mt-2 px-2'>
                            <div className='flex-1 px-3 '>
                                <h5 className='text-[13px] font-semibold mb-2 mt-1'>Title<span className='text-red-500'>*</span></h5>
                                <input className='shadow-inner  w-full text-sm py-2 px-1 pl-2' placeholder='Founder' />
                            </div>
                            <div className='flex-1'>
                                <h5 className='text-[13px] font-semibold mb-2 text-neutral-900 mt-1'>Phone Number<span className='text-red-500'>*</span></h5>

                                <div className="flex items-center">
                                {/* Dropdown */}
                                <div className="relative">
                                    <button
                                        onClick={toggleDropdown}
                                        className="py-2 px-3 shadow-inner font-semibold text-sm w-24 bg-gray-100 flex items-center "
                                    >
                                        <img
                                            className="w-5 h-4 mr-1"
                                            src={selectedCountry.flag}
                                            alt={selectedCountry.name}
                                        />
                                        <span className='flex'>{selectedCountry.code} <FaAngleDown className='ml-1 pt-1 text-lg' /></span>
                                        
                                    </button>

                                    {isDropdownOpen && (
                                        <div className="absolute mt-1 bg-white shadow-lg rounded w-40">
                                            {countries.map((country) => (
                                                <div
                                                    key={country.code}
                                                    className="p-2 hover:bg-gray-100 flex items-center cursor-pointer"
                                                    onClick={() => handleCountrySelect(country)}
                                                >
                                                    <img
                                                        className="w-5 h-5 mr-2"
                                                        src={country.flag}
                                                        alt={country.name}
                                                    />
                                                    <span>{country.name} ({country.code})</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Input */}
                                <input
                                    className="shadow-inner w-full text-sm py-2 px-1 pl-2 "
                                    placeholder="012 345 6789"
                                />
                            </div>

                            </div>


                        </div>

                        <div className=' pb-4 '>
                            <label className="block text-sm font-medium text-gray-700 my-2 px-3">
                                Business License <span className="text-red-500">*</span>
                            </label>
                            <div className="border-dashed border rounded-md mt-1 p-3">
                                <input type="file" className="text-sm text-gray-600 pt-10 " />

                            </div>
                            <p className="mt-2 text-xs text-black">
                                Upload <span className='font-medium'>JPG, PNG, PDF</span> only
                            </p>
                        </div>
                    </div>)}
                <label className="inline-flex items-center w-full">
                    <input
                        type="checkbox"
                        className="rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"
                    />
                    <span className="ml-2 text-sm text-gray-600">
                        I hereby  read and accepted the terms & Conditions of Ambassador Cruise App
                    </span>
                </label>
                <label className="inline-flex items-center w-full">
                    <input
                        type="checkbox"
                        className="rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"
                    />
                    <span className="ml-2 text-sm text-gray-600">
                        I agree to receice information about promotions and marketing e-mails from Ambassador Cruise and partners
                    </span>
                </label>
                <div className='flex flex-col items-center mt-3'>
                    <button
                        type="submit"
                        className="w-[450px] text-center bg-blue-600 text-white font-semibold py-2 px-4  hover:bg-blue-700"
                    >
                        Submit
                    </button>
                </div>


            </div>

        </div>
    );
};

export default CreateAccount;