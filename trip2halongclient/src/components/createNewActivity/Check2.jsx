import React, { useState } from 'react'

const Check2 = () => {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const option = [
        { category: "", items: ["8-hour day tour", "Onboard accommodation", "Sightseeing fees", "Swimming pool"] },
        { category: "", items: ["Entrance fees", "Onboard insurance", "Service fees", "Tips"] },
        { category: "", items: ["Spa/massage", "Luxury Kayaking", "Spa/massage treatment", "Butler service"] },
        { category: "", items: ["butler service", "Onboard insurance", "Others"] },
    ];


    const handleCheckboxChange = (category, item) => {
        setSelectedOptions((prev) =>
            prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
        );
    };

    return (
        <div className='flex flex-col w-full h-auto'>
            <div className="w-full h-auto p-3 rounded-lg">
                <p className='text-[15px]  text-black font-medium'>Inclusive of<span className='text-red-500'>*</span></p>
                {option.map((group, index) => (
                    <div key={index} className="mb-4">
                        <p className="font-medium text-md">{group.category}</p>
                        <div className="grid grid-cols-2 gap-2 mt-2 md:grid-cols-4">
                            {group.items.map((item, idx) => (
                                <label key={idx} className="flex items-center space-x-2 font-medium">
                                    <input
                                        type="checkbox"
                                        checked={selectedOptions.includes(item)}
                                        onChange={() => handleCheckboxChange(group.category, item)}
                                        className="w-4 h-4"
                                    />
                                    <span>{item}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                ))}

            </div>
            <div className='flex justify-end w-full h-auto'>
                <input className='w-[50%] h-[40px] px-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md hover:text-black  text-gray-300' placeholder='Please describe your package' type='Please insert your Google Map Link'></input>
            </div>

        </div>
    )
}

export default Check2
