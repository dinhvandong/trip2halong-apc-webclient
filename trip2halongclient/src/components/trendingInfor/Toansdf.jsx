import React, { useState } from 'react'
import DropdownButton from './DropdownButton';
import { CgChevronDown } from "react-icons/cg";
import { GiUsaFlag } from "react-icons/gi";
import { GiSouthAfricaFlag } from "react-icons/gi";
import { FcRating } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';
import Longg1 from '../booking3/Longg1';

const Toansdf = () => {
    const navigate = useNavigate();

    const gotonext = () => {
        navigate('/booking-payment')
    }


    const [tooltip, setTooltip] = useState(null);

    const handleMouseEnter = (position) => {
        setTooltip(position);
    };

    const handleMouseLeave = () => {
        setTooltip(null);
    };

    const handleSelect = (buttonId, selectedValue) => {
        console.log(`Button ${buttonId} selected:`, selectedValue);
    };
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState({
        icon: <GiSouthAfricaFlag />,
        icon: <GiUsaFlag />,
        icon: <FcRating />,
        label: "+84",
        label: "+099",
        label: "+199",
    });

    const toggleDropdown = () => {
        setIsOpen(!isOpen); // Đổi trạng thái mở/đóng
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option); // Cập nhật tùy chọn được chọn
        setIsOpen(false); // Đóng dropdown sau khi chọn
    };

    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);



    return (
        <div className='flex flex-col items-center w-full h-auto bg-[#F2F4F4] '>
            <Longg1/>
            <div className='w-[80%] h-max flex flex-row mb-3'>
                <div className='w-[70%] h-auto flex flex-col'>
                    <div className='flex flex-col w-full h-auto p-4 bg-white rounded-md shadow-sm'>
                        <p className='text-black text-[20px] font-bold leading-none'>Contract Information<br />
                            <span className='text-[15px] font-normal text-gray-400'>Please fill your Contact information</span>
                        </p>
                        <div className='w-full h-[1px] bg-gray-200 mt-3'></div>
                        <div className='flex flex-row w-full h-auto'>
                            <div className='flex flex-col w-1/2 h-auto pl-2' >
                                <p className='text-[15px] text-black font-medium mt-3'>Title<span className='text-red-600'>*</span></p>
                                <DropdownButton
                                    options={["Mr", "Ms", "Othr"]}
                                    defaultValue="Mr"
                                    onSelect={(value) => handleSelect(1, value)}
                                />
                                <p className='text-[15px] text-black font-medium mt-3'>Phone Number<span className='text-red-600'>*</span></p>
                                <div className='flex flex-row w-full h-[40px]'>
                                    <div className="relative inline-block w-[20%] text-left">
                                        {/* Nút chính */}
                                        <button
                                            onClick={toggleDropdown}
                                            className="flex items-center w-full h-full font-medium bg-[#F2F4F4] rounded-l focus:outline-none"
                                        >
                                            <span className="flex items-center gap-2">
                                                {selectedOption.icon} {selectedOption.label}
                                            </span>
                                            <CgChevronDown className='ml-1' />
                                        </button>

                                        {/* Dropdown menu */}
                                        {isOpen && (
                                            <div className="absolute left-0 z-10 w-32 mt-2 bg-white border border-gray-200 rounded-md shadow-lg">
                                                <ul className="py-1">
                                                    <li
                                                        onClick={() =>
                                                            handleOptionClick({
                                                                icon: <FcRating />,
                                                                label: "+84",
                                                            })
                                                        }
                                                        className="flex flex-row items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
                                                    >
                                                        <FcRating className="mr-2" /> +84
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            handleOptionClick({
                                                                icon: <GiUsaFlag className='text-red-500'></GiUsaFlag>, // Thay icon hoặc giữ nguyên
                                                                label: "+099",
                                                            })
                                                        }
                                                        className="flex flex-row items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
                                                    >
                                                        <GiUsaFlag className="mr-2 text-red-500" /> +099
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            handleOptionClick({
                                                                icon: <GiSouthAfricaFlag className='text-green-500'></GiSouthAfricaFlag>, // Thay icon hoặc giữ nguyên
                                                                label: "+119",
                                                            })
                                                        }
                                                        className="flex flex-row items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
                                                    >
                                                        <GiSouthAfricaFlag className="mr-2 text-green-400" /> +119
                                                    </li>
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="038888888"
                                        className="border border-[#F2F4F4] px-2 rounded-r w-[80%] h-full font-sans hover:border-blue-500 focus:outline-none"
                                    />
                                </div>

                            </div>
                            <div className='flex flex-col w-1/2 h-auto ml-2'>
                                <p className='text-[15px] text-black font-medium mt-3'>Full Name<span className='text-red-600'>*</span></p>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="border border-[#F2F4F4] rounded-md w-full h-[42px] font-sans px-2 hover:border-blue-500 focus:outline-none"
                                />
                                <p className='text-[15px] text-black font-medium mt-3'>Email<span className='text-red-600'>*</span></p>
                                <input
                                    type="text"
                                    placeholder="Email"
                                    className="border border-[#F2F4F4] rounded-md w-full h-[40px] font-sans hover:border-blue-500 px-2 focus:outline-none"
                                />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col w-full h-auto p-4 mt-3 bg-white rounded-md shadow-sm'>
                        <p className='text-black text-[20px] font-bold leading-none ml-2'>Transfer service information<br />
                            <span className='text-[15px] font-normal text-gray-400'>Please fill in the address for your round trips transfer service</span>
                        </p>
                        <div className='flex flex-row justify-between w-full h-auto mt-4 '>
                            <div className='w-[49%] h-auto flex flex-col'>
                                <p className='text-[15px] text-black font-medium ml-2'>Pick-up</p>
                                <input
                                    type="text"
                                    placeholder="49 Hai Ba Trung"
                                    className="border border-[#F2F4F4] mt-2 rounded-md w-full h-[42px] font-sans px-2 hover:border-blue-500 focus:outline-none"
                                />
                            </div>
                            <div className='w-[49%] h-auto flex flex-col'>
                                <p className='text-[15px] text-black font-medium ml-2'>Drop-up</p>
                                <input
                                    type="text"
                                    placeholder="49 Hai Ba Trung"
                                    className="border border-[#F2F4F4] mt-2 rounded-md w-full h-[42px] font-sans px-2 hover:border-blue-500 focus:outline-none"
                                />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col w-full h-auto p-4 mt-4 mb-3 bg-white rounded-md'>
                        <p className='text-black text-[20px] font-bold leading-none'>Passenger Information<br />
                            <span className='text-[15px] font-normal text-gray-400'>Please fill in your Passenger information</span>
                        </p>
                        <div className='w-full h-[1px] bg-gray-200 mt-3'></div>
                        <p className='text-blue-500 text-[20px] font-bold mt-2'>Passenger 1</p>
                        <div className='flex flex-row w-full h-auto'>
                            <div className='flex flex-col w-1/2 h-auto p-2 bg-white'>
                                <p className='text-[15px] text-black font-medium'>Title<span className='text-red-600'>*</span></p>
                                <DropdownButton
                                    options={["Mr", "Ms", "Othr"]}
                                    defaultValue="Mr"
                                    onSelect={(value) => handleSelect(2, value)}
                                />
                            </div>
                            <div className='flex flex-col w-1/2 h-auto bg-white'>
                                <p className='text-[15px] text-black font-medium mt-2'>Full Name<span className='text-red-600'>*</span></p>
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    className="border border-[#F2F4F4] rounded-md w-full h-[42px] font-sans px-2 hover:border-blue-500 focus:outline-none"
                                />
                            </div>
                        </div>
                        <div className='flex flex-row w-full h-auto mt-3'>
                            <div className='flex flex-col w-1/3 h-auto ml-2'>
                                <p className='text-[15px] text-black font-medium'>National<span className='text-red-600'>*</span></p>
                                <DropdownButton
                                    options={["VietNam", "USA", "Sorth America"]}
                                    defaultValue="VietNam"
                                    onSelect={(value) => handleSelect(3, value)}
                                />
                            </div>
                            <div className='flex flex-col w-1/3 h-auto ml-2'>
                                <p className='text-[15px] text-black font-medium'>ID/Passport No.<span className='text-red-600'>*</span></p>
                                <input
                                    type="text"
                                    placeholder="ID/Pass"
                                    className="border border-[#F2F4F4] rounded-md w-full h-[42px] font-sans px-2 hover:border-blue-500 focus:outline-none"
                                />
                            </div>
                            <div className='flex flex-col w-1/3 h-auto ml-2'>
                                <p className='text-[15px] text-black font-medium'>Date of Birth<span className='text-red-600'>*</span></p>
                                <DropdownButton
                                    options={["DD//MM/YYYY", "YYYY/MM/DD", "MM/DD/YYYY"]}
                                    defaultValue="DD//MM/YYYY"
                                    onSelect={(value) => handleSelect(4, value)}
                                />
                            </div>


                        </div>
                        <div className='w-full h-[1px] bg-gray-200 mt-3'></div>
                        <p className='text-blue-500 text-[20px] font-bold mt-2'>Passenger 2</p>
                        <div className='flex flex-row w-full h-auto'>
                            <div className='flex flex-col w-1/2 h-auto p-2 bg-white'>
                                <p className='text-[15px] text-black font-medium'>Title<span className='text-red-600'>*</span></p>
                                <DropdownButton
                                    options={["Mr", "Ms", "Othr"]}
                                    defaultValue="Mr"
                                    onSelect={(value) => handleSelect(5, value)}
                                />
                            </div>
                            <div className='flex flex-col w-1/2 h-auto bg-white'>
                                <p className='text-[15px] text-black font-medium mt-2'>Full Name<span className='text-red-600'>*</span></p>
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    className="border border-[#F2F4F4] rounded-md w-full h-[42px] hover:border-blue-500 font-sans px-2 focus:outline-none"
                                />
                            </div>
                        </div>
                        <div className='flex flex-row w-full h-auto mt-3'>
                            <div className='flex flex-col w-1/3 h-auto ml-2'>
                                <p className='text-[15px] text-black font-medium'>National<span className='text-red-600'>*</span></p>
                                <DropdownButton
                                    options={["VietNam", "USA", "Sorth America"]}
                                    defaultValue="VietNam"
                                    onSelect={(value) => handleSelect(6, value)}
                                />
                            </div>
                            <div className='flex flex-col w-1/3 h-auto ml-2'>
                                <p className='text-[15px] text-black font-medium'>ID/Passport No.<span className='text-red-600'>*</span></p>
                                <input
                                    type="text"
                                    placeholder="ID/Pass"
                                    className="border border-[#F2F4F4] rounded-md w-full h-[42px] font-sans px-2 hover:border-blue-500 focus:outline-none"
                                />
                            </div>
                            <div className='flex flex-col w-1/3 h-auto ml-2'>
                                <p className='text-[15px] text-black font-medium'>Date of Birth<span className='text-red-600'>*</span></p>
                                <DropdownButton
                                    options={["DD//MM/YYYY", "YYYY/MM/DD", "MM/DD/YYYY"]}
                                    defaultValue="DD//MM/YYYY"
                                    onSelect={(value) => handleSelect(7, value)}
                                />
                            </div>


                        </div>
                        <div className='w-full h-[1px] bg-gray-200 mt-3'></div>
                        <div className="w-full h-auto p-4">
                            <div className="flex items-center mb-2">
                                <input
                                    id="checkbox1"
                                    type="checkbox"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                                    checked={checked1}
                                    onChange={(e) => setChecked1(e.target.checked)}
                                />
                                <label htmlFor="checkbox1" className="ml-2 font-medium text-black">
                                    I will commplete required Passerger Information later
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    id="checkbox2"
                                    type="checkbox"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                                    checked={checked2}
                                    onChange={(e) => setChecked2(e.target.checked)}
                                />
                                <label htmlFor="checkbox2" className="ml-2 font-medium text-black">
                                    I herreby acknoledges thas Passenger Infomation must be conpleted <span className='font-bold'>48 hrs prior to departure date</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col bg-white w-[30%] h-[700px] ml-2 border border-[#A6C3DB]  rounded-lg'>
                    <h2 className='px-5 py-2 text-2xl font-bold text-[#1D87D2]'>YOUR RESERVATION</h2>
                    <p className='px-5 -mt-2 text-[#505556]'>Ambassador Day Cruise</p>
                    <div className='bg-[#F4F4F4] h-[1px] w-full mt-3'></div>
                    <div className='flex items-start justify-between w-full h-[120px] mt-3 bg-slate-500'>
                        <div className='flex flex-col w-[40%] h-full bg-white gap-2 px-5'>
                            <p className='text-[17px] text-[#505556] font-bold'>Cruise Date</p>
                            <p className='text-[17px] text-[#505556] font-bold'>Program</p>
                            <p className='text-[17px] text-[#505556] font-bold'>Passenger</p>
                        </div>
                        <div className='flex flex-col w-[60%] h-full bg-white gap-2 text-end px-5'>
                            <p className='text-[17px] text-[#8CA6C4] '>Dec 24, 2024</p>
                            <p className='text-[17px] text-[#8CA6C4] '>Day Cruise</p>
                            <p className='text-[17px] text-[#8CA6C4]'>
                                04 Adults • 02 Children <br />• 00 infant
                            </p>
                        </div>
                    </div>
                    <div className='bg-[#F4F4F4] h-[1px] w-full mt-3'></div>
                    <div className='flex items-center justify-between px-5 py-4'>
                        <p className='text-[17px] text-[#505556] font-bold'>Transfer Service</p>
                        <button className='bg-[#EDF4FE] w-[85px] h-[40px] text-[17px] text-[#8CA6C4]'>Included</button>
                    </div>
                    <div className='flex items-start justify-between w-full h-[165px] bg-white'>
                        <div className='flex flex-col w-[30%] gap-14 px-5'>
                            <p className='text-[17px] text-[#505556] font-bold'>Pickup</p>
                            <p className='text-[17px] text-[#505556] font-bold'>Drop-off</p>
                        </div>
                        <div className='flex flex-col w-[70%] h-full bg-white gap-2 text-end px-5'>
                            <p className=''>Hanoi Towers, <br />49 Hai Ba Trung, Hoan Kiem  <br />Hanoi</p>
                            <p className=''>Hanoi Towers, <br />49 Hai Ba Trung, Hoan Kiem  <br />Hanoi</p>
                        </div>
                    </div>
                    <div className='bg-[#F4F4F4] h-[1px] w-full '></div>
                    <div className='flex items-center justify-between px-5 py-4'>
                        <p className='text-[17px] text-[#505556] font-bold'>Total Price</p>
                        <p className='text-[17px] text-[#167DC8] font-bold'>USD 280</p>
                    </div>
                    <div className='bg-[#F4F4F4] h-[1px] w-full '></div>
                    <div className='flex flex-col w-full h-[200px] items-center bg-white px-5 py-4'>
                        <div className='flex justify-start w-full h-auto'>
                            <p className='text-[17px] text-[#505556] font-bold flex' >Important Notes</p>
                        </div>
                        <p className='text-[17px] text-[#505556] mt-1'>
                            Please refer to the <span className="font-bold underline">Terms & Condition</span>, and <span className="font-bold underline">Privacy Policy</span> by Trip2Halong
                        </p>
                        <button onClick={gotonext} className='bg-[#167DC8] w-[90%] h-[50px] rounded-lg mt-5 text-white font-bold'>Proceed Payment</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Toansdf
