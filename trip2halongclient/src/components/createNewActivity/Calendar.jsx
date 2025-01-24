import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay } from "date-fns";

const Calendar = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());

    const renderHeader = () => {
        return (
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">
                    {format(currentMonth, "MMMM yyyy")}
                </h2>
                <div className="flex flex-row w-[15%] h-auto justify-center items-center">
                    <button
                        onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
                        className="p-2 text-blue-400 rounded-full hover:bg-gray-200"
                    >
                        <FiChevronLeft size={20} />
                    </button>
                    <button
                        onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
                        className="p-2 text-blue-400 rounded-full hover:bg-gray-200"
                    >
                        <FiChevronRight size={20} />
                    </button>
                </div>

            </div>
        );
    };

    const renderDays = () => {
        const days = [];
        const startDate = startOfWeek(new Date());
        for (let i = 0; i < 7; i++) {
            days.push(
                <div key={i} className="text-[17px] font-medium text-center text-blue-500">
                    {format(addDays(startDate, i), "EEEEEE")}
                </div>
            );
        }
        return <div className="grid grid-cols-7 gap-2">{days}</div>;
    };

    const renderCells = () => {
        const monthStart = startOfMonth(currentMonth);
        const monthEnd = endOfMonth(monthStart);
        const startDate = startOfWeek(monthStart);
        const endDate = endOfWeek(monthEnd);

        const rows = [];
        let days = [];
        let day = startDate;

        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                const cloneDay = day;
                days.push(
                    <div
                        key={day}
                        className={`w-10 h-10 p-2 text-center rounded-full font-medium cursor-pointer ${!isSameMonth(day, monthStart)
                                ? "text-gray-400"
                                : isSameDay(day, selectedDate)
                                    ? "bg-blue-500 text-white"
                                    : "text-gray-900 hover:bg-gray-100"
                            }`}
                        onClick={() => setSelectedDate(cloneDay)}
                    >
                        {format(day, "d")}
                    </div>
                );
                day = addDays(day, 1);
            }
            rows.push(
                <div key={day} className="grid grid-cols-7 gap-2 mb-2">
                    {days}
                </div>
            );
            days = [];
        }
        return <div>{rows}</div>;
    };

    return (
        <div className="w-full h-auto p-4 mx-auto bg-white rounded-lg shadow-md">
            {renderHeader()}
            {renderDays()}
            {renderCells()}
        </div>
    );
};

export default Calendar;