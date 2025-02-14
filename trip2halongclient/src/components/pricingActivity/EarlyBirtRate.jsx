import React, { useState } from 'react'
import CustomDatePicker from './CustomDatePicker'
import { FiChevronDown } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";



const EarlyBirtRate = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);
    const [price, setPrice] = useState("");
    const [price2, setPrice2] = useState("");

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const month = months[currentDate.getMonth()];
    const year = currentDate.getFullYear();

    // Thêm logic để chuyển tháng hoặc lùi tháng
    const handlePrevMonth = () => {
        setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
    };

    const handleNextMonth = () => {
        setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
    };



    const isToday = (day) => {
        const today = new Date();
        return today.getDate() === day && today.getMonth() === currentDate.getMonth() && today.getFullYear() === currentDate.getFullYear();
    };


    const handleSelectDate = (day) => {
        setSelectedDate(day);
    };

    const handlePrice = (e) => {
        const value = e.target.value.replace(/\D/g, "");
        setPrice(value);
    };

    const handlePrice2 = (e) => {
        const value2 = e.target.value.replace(/\D/g, "");
        setPrice2(value2);
    };
    return (
        <div className='flex w-full h-auto p-3 bg-white'>
            <div className='w-full h-auto bg-[#FAFAFA] flex flex-col p-4 rounded-md'>
                <p className='text-2xl font-bold'>Early Bird Rate</p>
                <div className='flex flex-row justify-between w-full h-auto mt-2'>
                    <p className='text-[15px] font-medium text-gray-800 leading-none'>Guests can cancle their reservation without any penalties, provided the cancellation is made at least 24 hours befoe the scheduled<br />
                        departure.
                    </p>
                    <FiChevronDown></FiChevronDown>
                </div>
                <div className='w-full h-[1px] bg-gray-200 mt-4'></div>
                <div className='flex flex-row justify-between items-center w-full h-[60px] rounded-md   mt-3'>
                    <div className='w-[65%] h-[60%] bg-white rounded-md items-center border border-gray-200 flex-row flex'>
                        <div className='w-[40%] h-full  rounded-l-md flex flex-row items-center justify-between pl-2 pr-2'>
                            <p className='text-[15px] font-bold'>Period 1</p>
                            <p className='text-[15px]'>Date:<span className='text-[#187DCA] font-bold'>May 17 - May 19,2015</span></p>
                        </div>
                        <div className='w-[1px] h-[70%] bg-gray-200'></div>
                        <div className='w-[30%] h-full  flex flex-row items-center justify-between pl-2 pr-2'>
                            <p className='text-[15px]'>Package Cost:<span className='text-[#187DCA] font-bold'>20,000,000 VND</span></p>
                        </div>
                        <div className='w-[1px] h-[70%] bg-gray-200'></div>
                        <div className='w-[30%] h-full  flex flex-row items-center rounded-r-md justify-between pl-2 pr-2'>
                            <p className='text-[15px]'>Selling Price:<span className='text-[#187DCA] font-bold'>20,000,000 VND</span></p>
                        </div>
                    </div>
                    <FiChevronDown />
                </div>
                <div className='flex flex-row justify-between w-full h-auto'>
                    <div className='w-[49%] h-auto flex flex-col'>
                        <p className='ml-4 text-black font-semibold text-[15px] '>Start Date<span className='text-red-600'>*</span><br />
                            <p className='text-[12px] text-gray-500 italic'>Please select start date for your Flexible Rate</p>
                        </p>
                        <div className="w-full h-auto p-4 mt-2 border rounded-lg shadow-lg">
                            <div className="flex items-center justify-between mb-4">
                                <div className="font-bold text-l">{month} {year}</div>
                                <div>
                                    <button onClick={handlePrevMonth} className="px-2 py-2 text-[#187DCA] rounded"><FiChevronLeft /></button>
                                    <button onClick={handleNextMonth} className="px-2 py-2 text-[#187DCA] rounded"><FiChevronRight /></button>
                                </div>
                            </div>

                            <div className="grid w-full h-auto grid-cols-7 gap-2">
                                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
                                    <div key={day} className="font-semibold text-center text-[#167DC8]">{day}</div>
                                ))}

                                {/* Tạo các ô cho ngày trong tháng */}
                                {Array.from({ length: 35 }).map((_, index) => {
                                    const date = new Date(year, currentDate.getMonth(), index - currentDate.getDay() + 1);
                                    if (date.getMonth() !== currentDate.getMonth()) {
                                        return <div key={index} className="text-center text-gray-300"></div>;
                                    }
                                    const isSelected = selectedDate === date.getDate();
                                    const isCurrentDay = isToday(date.getDate());

                                    return (
                                        <div
                                            key={index}
                                            className={`flex items-center justify-center w-10 h-10 p-5 ml-4 rounded-full cursor-pointer
                                                       ${isCurrentDay ? ' border-2 border-blue-500' : ''} 
                                                       ${isSelected ? 'bg-[#187DCA] hover:text-white' : ''}
                                                        ${isCurrentDay || isSelected ? 'rounded-full' : ''}`}
                                            onClick={() => handleSelectDate(date.getDate())}
                                        >
                                            {date.getDate()}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                    </div>
                    <div className='w-[49%] h-auto flex flex-col'>
                        <CustomDatePicker />
                    </div>
                </div>
                <div className='flex flex-row justify-between w-full h-auto mt-6'>
                    <div className='w-[49%] h-auto flex flex-col'>
                        <p className='ml-4 text-black font-semibold text-[15px] '>Your Pakage Cost<span className='text-red-600'>*</span><br />
                            <p className='text-[12px] text-gray-500 italic'>Please insert your pakage cost in VND. Currency exchange may vary from the website system </p>
                        </p>
                        <div className="relative w-full mt-2">
                            <input
                                type="text"
                                value={price}
                                onChange={handlePrice}
                                className="w-full px-3 py-2 pr-10 font-medium placeholder-gray-400 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="10,000,000"
                            />
                            <span className="absolute inset-y-0 flex items-center font-bold text-black right-3">
                                VND
                            </span>
                        </div>
                    </div>
                    <div className='w-[49%] h-auto flex flex-col'>
                        <p className='ml-4 text-black font-semibold text-[15px] '>Your Pakage Cost<span className='text-red-600'>*</span><br />
                            <p className='text-[12px] text-gray-500 italic'>Please insert your pakage cost in VND. Currency exchange may vary from the website system </p>
                        </p>
                        <div className="relative w-full mt-2">
                            <input
                                type="text"
                                value={price2}
                                onChange={handlePrice2}
                                className="w-full px-3 py-2 pr-10 font-medium placeholder-gray-400 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="10,000,000"
                            />
                            <span className="absolute inset-y-0 flex items-center font-bold text-black right-3">
                                VND
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col mt-6">
                    <p className='ml-4 text-black font-semibold text-[15px] '>Your Rate Structure<span className='text-red-600'>*</span><br />
                        <p className='text-[12px] text-gray-500 italic'>Please provide your rate structure by specifying the percentage for each
                            type, calculated based on your selling price.</p>
                    </p>
                    <div className="flex items-center gap-6 mt-2 ml-4">
                        <div className="flex items-center gap-2">
                            <span className="text-gray-700">Adults</span>
                            <input
                                placeholder='100 %'
                                className="w-16 p-2 font-sans text-center placeholder-black border rounded-md"
                            />
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="text-gray-700">Children</span>
                            <input
                                // type="number"
                                // name="children"
                                // value={rates.children}
                                // onChange={handleChange}
                                placeholder='70 %'
                                className="w-16 p-2 font-sans text-center placeholder-black border rounded-md"
                            />

                        </div>

                        <div className="flex items-center gap-2">
                            <span className="text-gray-700">First infant</span>
                            <input
                                // type="number"
                                // name="firstInfant"
                                // value={rates.firstInfant}
                                // onChange={handleChange}
                                placeholder='0 %'
                                className="w-16 p-2 font-sans text-center placeholder-black border rounded-md"
                            />

                        </div>

                        <div className="flex items-center gap-2">
                            <span className="text-gray-700">From second infant</span>
                            <input
                                // type="number"
                                // name="secondInfant"
                                // value={rates.secondInfant}
                                // onChange={handleChange}
                                placeholder='70 %'
                                className="w-16 p-2 font-sans text-center placeholder-black border rounded-md"
                            />

                        </div>
                    </div>
                </div>
                <div className='w-full h-[1px] bg-gray-200 mt-4'></div>
                <div className='flex flex-row justify-between items-center w-full h-[60px] rounded-md   mt-3'>
                    <div className='w-[65%] h-[60%] bg-white rounded-md items-center border border-gray-200 flex-row flex'>
                        <div className='w-[40%] h-full  rounded-l-md flex flex-row items-center justify-between pl-2 pr-2'>
                            <p className='text-[15px] font-bold'>Period 2</p>
                            <p className='text-[15px]'>Date:<span className='text-[#187DCA] font-bold'>May 17 - May 19,2015</span></p>
                        </div>
                        <div className='w-[1px] h-[70%] bg-gray-200'></div>
                        <div className='w-[30%] h-full  flex flex-row items-center justify-between pl-2 pr-2'>
                            <p className='text-[15px]'>Package Cost:<span className='text-[#187DCA] font-bold'>20,000,000 VND</span></p>
                        </div>
                        <div className='w-[1px] h-[70%] bg-gray-200'></div>
                        <div className='w-[30%] h-full  flex flex-row items-center rounded-r-md justify-between pl-2 pr-2'>
                            <p className='text-[15px]'>Selling Price:<span className='text-[#187DCA] font-bold'>20,000,000 VND</span></p>
                        </div>
                    </div>
                    <FiChevronUp />
                </div>
                <div className='w-full h-[1px] bg-gray-200 mt-4'></div>
                <div className='flex justify-end w-full mt-3'>
                    <button className='px-6 py-2 font-bold text-white rounded-3xl bg-[#187DCA]'>+ Add New Period</button>
                </div>

            </div>

        </div>
    )
}

export default EarlyBirtRate
