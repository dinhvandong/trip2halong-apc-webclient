import React, { useEffect, useState } from 'react';
import rasc from './rate.json';
import { SiTicktick } from "react-icons/si";


const RateOption = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(rasc);
    }, []);


    const handleCheckboxChange = (id) => {
        setItems(prevItems =>
            prevItems.map(item =>
                item.id === id
                    ? { ...item, checked: !item.checked }
                    : item
            )
        );
    };


    const handleButtonClick = (id, buttonNumber) => {
        setItems(prevItems =>
            prevItems.map(item =>
                item.id === id
                    ? {
                        ...item,
                        [`clickedButton${buttonNumber}`]: !item[`clickedButton${buttonNumber}`]  // Đảo ngược trạng thái của button tương ứng
                    }
                    : item
            )
        );
    };



    return (
        <div className="flex flex-col w-full h-auto p-6 bg-white rounded-md">
            <div className='flex flex-row justify-between w-full h-auto'>
                <p className='text-2xl text-[#167DC8] font-semibold cursor-pointer'><span className='text-black'>+ </span>Add Another Cabin</p>
                <p className='text-xl text-[#167DC8] font-bold cursor-pointer'>REMOVE</p>
            </div>
            <div className='flex flex-col w-full h-auto'>
                {items.map((it) => (
                    <div key={it.id} className='group flex flex-row justify-between w-full h-auto p-3 mt-3 border border-gray-200 rounded-md hover:bg-[#e4f1fc] hover:border-blue-500'>
                        <div className='flex flex-col justify-center w-1/2 h-auto'>
                            <label className='block'>
                                <input
                                    type="checkbox"
                                    id={`id-${it.id}`}
                                    checked={it.checked}
                                    onChange={() => handleCheckboxChange(it.id)}
                                    className="w-4 h-4"
                                />
                                <span htmlFor={`checkbox-${it.id}`} className='text-[18px] font-semibold'>{it.name2}</span>
                            </label>
                            <button onClick={() => handleButtonClick(it.id, 1)} className={`mt-2 flex items-center w-[40%]  font-bold  px-3 py-2 text-[10px] rounded-3xl  ${it.clickedButton1 ? 'bg-[#E4F1FC] text-blue-500 border border-blue-500' : 'bg-[#FAFAFA] text-gray-300 border border-gray-300'}`}><SiTicktick className='mr-2 ' />{it.name3}</button>
                            <button onClick={() => handleButtonClick(it.id, 2)} className={`mt-2 flex items-center w-[50%]  font-bold  px-3 py-2 text-[10px] rounded-3xl  ${it.clickedButton2 ? 'bg-[#E4F1FC] text-blue-500 border border-blue-500' : 'bg-[#FAFAFA] text-gray-300 border border-gray-300'}`}><SiTicktick className='mr-2 ' />{it.name4}</button>
                            <button onClick={() => handleButtonClick(it.id, 3)} className={`mt-2 flex items-center w-[50%]  font-bold  px-3 py-2 text-[10px] rounded-3xl  ${it.clickedButton3 ? 'bg-[#E4F1FC] text-blue-500 border border-blue-500' : 'bg-[#FAFAFA] text-gray-300 border border-gray-300'}`}><SiTicktick className='mr-2 ' />{it.nam6}</button>
                        </div>
                        <div className='flex flex-col items-end w-1/2 h-auto group-hover:bg-[#e4f1fc] group-hover:border-blue-500'>
                            <p className='text-[13px] font-bold text-black group-hover:text-blue-500'>FROM</p>
                            <p className='text-[23px] font-bold text-black group-hover:text-blue-500'>{it.name5}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default RateOption
