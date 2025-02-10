import React, { useState } from 'react'
import { FiChevronDown } from "react-icons/fi";


const Category = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("Day/Dinner Cruise");
    const [description, setDescription] = useState("");
    const [checked, setChecked] = useState({
        checkbox1: false,
        checkbox2: false,
        checkbox3: false,
        checkbox4: false,
        checkbox5: false,
        checkbox6: false,
        checkbox7: false,
    });
    const [checkbox7Label, setCheckbox7Label] = useState("");

    const [checkedd, setCheckedd] = useState({
        checkbox1: false,
        checkbox2: false,
    })

    const options = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

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

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setChecked((prevChecked) => ({
            ...prevChecked,
            [name]: checked,
        }));
    };

    const handleLabelChange = (event) => {
        setCheckbox7Label(event.target.value);

    };

    const handchechbox = (event) => {
        const { name, checkedd } = event.target;
        setCheckedd((prevCheckedd) => ({
            ...prevCheckedd,
            [name]: checkedd,
        }));
    }


    return (
        <div className='flex flex-col w-full h-auto p-2 bg-[#e1e3e1] rounded-md'>
            <p className='text-[20px] font-bold'>Category Details</p>
            <div className='w-[50%] h-auto p-2 mt-2 flex flex-col'>
                <p className='text-[15px] text-black font-bold'>Select Category<span className='text-red-500'>*</span></p>
                <div className="relative w-full">

                    <button
                        className="w-full h-[40px] px-4 rounded-md bg-white flex justify-between items-center border shadow"
                        onClick={toggleDropdown}
                    >
                        {selected} <FiChevronDown />
                    </button>

                    {isOpen && (
                        <div className="absolute left-0 z-10 w-full mt-1 bg-white border rounded-md shadow-lg top-full">
                            {options.map((option, index) => (
                                <div
                                    key={index}
                                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                                    onClick={() => handleSelect(option)}
                                >
                                    {option}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div className='flex flex-row justify-between w-full h-auto p-2'>
                <div className='w-[49%] h-auto flex flex-col'>
                    <p className='text-[15px] text-black font-bold'>You Package Name<span className='text-red-500'>*</span></p>
                    <input className='w-full h-[40px] px-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md hover:text-black  text-gray-300' placeholder='Please type your package name' type='text'></input>
                    <p className='text-[13px] ml-2 text-gray-400 mt-2'>Help text </p>
                </div>
                <div className='w-[49%] h-auto flex flex-col'>
                    <p className='text-[15px] text-black font-bold'>Your Package ID<span className='text-red-500'>*</span></p>
                    <input className='w-full h-[40px] px-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md hover:text-black  text-gray-300' placeholder='-' type='number'></input>
                    <p className='text-[13px] ml-2 text-gray-400 mt-2'>Help text </p>
                </div>
            </div>
            <div className='flex flex-col w-full h-auto p-2'>
                <p className='text-[15px] ml-2 text-black font-bold'>Location<span className='text-red-500'>*</span></p>
                <input className='w-full h-[40px] px-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md hover:text-black  text-gray-300' placeholder='Please insert your Google Map Link' type='text'></input>
                <p className='text-[13px] ml-2 text-gray-400 mt-2'>Your video may take extra time to be reviewed </p>
            </div>
            <div className='flex flex-col w-full h-auto p-2'>
                <p className='text-[15px] text-black font-bold'>Description<span className='text-red-500'>*</span></p>
                <textarea
                    id="description"
                    rows="4"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter description here..."
                    value={description}
                    onChange={handleInputChange}
                ></textarea>
                <p className='text-[13px] ml-2 text-gray-400 mt-2'>No more than 250 words </p>
            </div>
            <div className='flex flex-col w-full h-auto p-2'>
                <p className='text-[15px] text-black font-bold'>Highlights<span className='text-red-500'>*</span></p>
                <div className="grid grid-cols-4 gap-4 mb-4">
                    {/* 4 checkbox trên */}
                    {["checkbox1", "checkbox2", "checkbox3", "checkbox4"].map((checkbox, index) => (
                        <div key={index} className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                id={checkbox}
                                name={checkbox}
                                checked={checked[checkbox]}
                                onChange={handleCheckboxChange}
                                className="w-4 h-4 border-gray-300 rounded"
                            />
                            <label htmlFor={checkbox} className="text-gray-700">8-hour day-tour</label>
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-4 gap-4">
                    {/* 3 checkbox dưới */}
                    {["checkbox5", "checkbox6", "checkbox7"].map((checkbox, index) => (
                        <div key={index} className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                id={checkbox}
                                name={checkbox}
                                checked={checked[checkbox]}
                                onChange={handleCheckboxChange}
                                className="w-4 h-4 border-gray-300 rounded"
                            />
                            {checkbox === "checkbox7" ? (
                                <label
                                    value={checkbox7Label}
                                    onChange={handleLabelChange}
                                    className="text-gray-700 "
                                >Others</label>
                            ) : (
                                <label htmlFor={checkbox} className="text-gray-700">8-hour day-tour</label>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex justify-end w-full h-auto p-2'>
                <input className='w-[49%] h-[40px] px-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md hover:text-black  text-gray-300' placeholder='Please describe your package' type='text'></input>
            </div>
            <div className='flex flex-col w-full h-auto p-2'>
                <p className='text-[15px] text-black font-bold'>Transportation<span className='text-red-500'>*</span></p>
                <div className="grid grid-cols-2 gap-4">
                    {/* Checkbox 1 */}
                    <div className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            id="checkbox1"
                            name="checkbox1"
                            checked={checkedd.checkbox1}
                            onChange={handchechbox}
                            className="w-5 h-5 border-gray-300 rounded"
                        />
                        <label htmlFor="checkbox1" className="text-gray-700">
                           Shuttle bus transfer from Hanoi-Halong-Hanoi
                        </label>
                    </div>

                    {/* Checkbox 2 */}
                    <div className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            id="checkbox2"
                            name="checkbox2"
                            checked={checkedd.checkbox2}
                            onChange={handchechbox}
                            className="w-5 h-5 border-gray-300 rounded"
                        />
                        <label htmlFor="checkbox2" className="text-gray-700">
                           Not included
                        </label>
                    </div>
                </div>
            </div>
            <div className='flex flex-col w-full h-auto p-2'>
                <input className='w-[49%] h-[40px] px-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md hover:text-black  text-gray-300' placeholder='Your pickup & Drop-off Address' type='text'></input>
                <p className='text-[13px] ml-2 text-gray-400 mt-2'>Please insert your pick up & drop off address </p>
            </div>
        </div>
    )
}

export default Category
