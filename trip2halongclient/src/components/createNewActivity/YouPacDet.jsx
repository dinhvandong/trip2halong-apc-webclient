import React, { useState } from 'react'
import { FiChevronDown } from "react-icons/fi";

const YouPacDet = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [description, setDescription] = useState("");
    const [selected, setSelected] = useState("Halong Bay Day Cruise");
    const options = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    const [selected2, setSelected2] = useState({});

    const data = [
        ["8-hour day-tour", "Onboard meals", "Aftermoon tes", "Tea/coffee demonstration"],
        ["Complimentary kayaking", "Complimentary bamboo boat", "Option 7", "Option 8"],
        ["Option 9", "Option 10", "Option 11", "Option 12"],
        ["Option 13", "Option 14", "Option 15", "Option 16"],
    ];

    const toggleCheckbox = (option) => {
        setSelected2((prev) => {
            const updatedState = { ...prev, [option]: !prev[option] };
            console.log("Selected options:", updatedState);
            return updatedState;
        });
    };


    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const handleSelect = (option) => {
        setSelected(option);
        setIsOpen(false);
    };

    const handleInputChange = (event) => {
        setDescription(event.target.value);
    };



    return (
        <div className='w-full h-auto p-2 bg-white'>
            <div className='w-full h-auto bg-[#F9F9F9] flex flex-col p-3 rounded-md'>
                <p className='text-2xl font-bold'>Your Package Details</p>
                <div className="relative w-full mt-4">
                    <p className='ml-4 text-black font-semibold text-[15px] '>Selete Category<span className='text-red-600'>*</span></p>

                    <button
                        className="w-[49%] h-[40px] px-4 rounded-md font-bold bg-white flex justify-between items-center"
                        onClick={toggleDropdown}
                    >
                        {selected} <FiChevronDown />
                    </button>

                    {isOpen && (
                        <div className="absolute left-0 z-10 w-[50%] mt-1 bg-white font-bold rounded-md top-full">
                            {options.map((option, index) => (
                                <div
                                    key={index}
                                    className="px-4 py-2 cursor-pointer"
                                    onClick={() => handleSelect(option)}
                                >
                                    {option}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div className='flex flex-row justify-between w-full mt-3'>
                    <div className='flex flex-col w-[49%] h-auto'>
                        <p className='text-[15px] ml-4 text-black font-medium'>Your Package Name<span className='text-red-500'>*</span></p>
                        <p style={{ fontStyle: "italic" }} className='text-[13px] ml-4 text-gray-400 mt-2'>Please type your package name. Your pakage name is no lohger than 10 words </p>
                        <input className='w-full h-[40px] px-2 mt-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md hover:text-black  text-gray-300' placeholder='Please type your' type='text'></input>
                    </div>
                    <div className='flex flex-col w-[49%] h-auto'>
                        <p className='text-[15px] ml-4 text-black font-medium'>Your Package ID<span className='text-red-500'>*</span></p>
                        <p style={{ fontStyle: "italic" }} className='text-[13px] ml-4 text-gray-400 mt-2'>Please selete your Package ID </p>
                        <input className='w-full h-[40px] px-2 mt-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md hover:text-black  text-gray-300' placeholder='--' type='text'></input>
                    </div>
                </div>
                <div className='mt-3'>
                    <p className='text-[15px] ml-4 text-black font-medium'>Location<span className='text-red-500'>*</span></p>
                    <p style={{ fontStyle: "italic" }} className='text-[13px] ml-4 text-gray-400 mt-2'>Please insert your Google Map Link </p>
                    <input className='w-full h-[40px] px-2 mt-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md hover:text-black  text-gray-300' placeholder='--' type='Please insert your Google Map Link'></input>
                </div>
                <div className='mt-3'>
                    <p className='text-[15px] ml-4 text-black font-medium'>Description<span className='text-red-500'>*</span></p>
                    <p style={{ fontStyle: "italic" }} className='text-[13px] ml-4 text-gray-400 mt-2'>No move than 230 words. Your descotion should include the features and highights of your package or property </p>
                    <textarea
                        id="description"
                        rows="4"
                        className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Please description your package"
                        value={description}
                        onChange={handleInputChange}
                    ></textarea>
                </div>
                <div className="w-full h-auto p-2">
                    {data.map((row, rowIndex) => (
                        <div key={rowIndex} className="flex justify-between space-x-4">
                            {row.map((option) => (
                                <label
                                    key={option}
                                    className="flex items-center cursor-pointer"
                                >
                                    <input
                                        type="checkbox"
                                        checked={selected2[option] || false}
                                        onChange={() => toggleCheckbox(option)} // Gọi hàm toggle khi click
                                        className="hidden"
                                    />
                                    <div
                                        className={`w-5 h-5 border-2 rounded-md flex items-center justify-center transition-colors ${selected2[option]
                                                ? "bg-blue-500 border-blue-500"
                                                : "bg-white border-gray-400"
                                            }`}
                                    >
                                        {selected2[option] && <span className="text-sm text-white">✔</span>}
                                    </div>
                                    <span>{option}</span>
                                </label>
                            ))}
                        </div>
                    ))}
                </div>




            </div>

        </div>
    )
}

export default YouPacDet
