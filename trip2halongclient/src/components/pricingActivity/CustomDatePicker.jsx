
import React, { useState } from 'react'
import { FiChevronRight } from "react-icons/fi";
import { FiChevronLeft } from "react-icons/fi";


const CustomDatePicker = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);

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

    return (
        <div>
            <div className='flex flex-col w-full h-auto'>
                <p className='ml-4 text-black font-semibold text-[15px] '>End Date<span className='text-red-600'>*</span><br />
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
        </div>

    );
};

export default CustomDatePicker
