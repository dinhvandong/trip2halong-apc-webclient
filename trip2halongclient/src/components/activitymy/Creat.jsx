import React from 'react'
import newAc from './newActi.json';

const Creat = () => {
    return (
        <div className='flex flex-col w-full h-auto p-2 bg-white'>
            <div className='w-full h-[1px] bg-gray-400'></div>
            <div className='w-full h-[50px] flex justify-end items-center'>
                <button className='h-[70%] text-white bg-blue-600 w-[15%] rounded-3xl'> + Create New Activity</button>
            </div>
            <div className='flex flex-col w-full h-auto bg-[#F9F9F9] border border-gray-200 rounded-md'>
                <div className='flex flex-row items-center justify-between w-full h-auto p-2 bg-white'>
                    <p className='text-[13px] text-black font-bold'>Activity ID-Titel</p>
                    <p className='text-[13px] text-black font-bold'>Package Quantity</p>
                    <p className='text-[13px] text-black font-bold'>Destination City</p>
                    <p className='text-[13px] text-black font-bold'>Sub Category</p>
                    <p className='text-[13px] text-black font-bold'>Leaf Category</p>
                    <p className='text-[13px] text-black font-bold'>Created Time(UTC)</p>
                </div>
                <div className='flex flex-col w-full h-auto'>
                    {newAc.map((ite) => (
                        <div key={ite} className='flex flex-row items-center justify-between w-full h-auto p-4 py-2 border border-gray-200'>
                            <p className='text-[13px] text-blue-500'>{ite.id}</p>
                            <p className='text-[13px] text-black '>{ite.quanti}</p>
                            <p className='text-[13px] text-black '>{ite.city}</p>
                            <p className='text-[13px] text-black '>{ite.category}</p>
                            <p className='text-[13px] text-black '>{ite.lafe}</p>
                            <p className='text-[13px] text-black '>{ite.Time}</p>
                        </div>
                    ))}

                </div>
            </div>

        </div>
    )
}

export default Creat
