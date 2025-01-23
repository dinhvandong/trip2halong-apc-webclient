import React from 'react'
import { useNavigate } from 'react-router-dom';

const Com = () => {
    const navigate = useNavigate();

    const exit = () => {
        navigate('/admin/activity');
    };
  return (
    <div className='flex w-full h-auto p-2 bg-white'>
        <div className='w-full h-auto flex flex-col p-3 bg-[#e1e3e1] rounded-md'>
            <div className='flex flex-row justify-between w-full h-auto'>
                <div className='flex flex-col w-1/3 h-auto'>
                  <p className='text-[15px] text-black font-medium'>Activity-Title</p>
                  <input type='text' placeholder='Please input' className='px-2 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'></input>
                </div>
                <div className='flex flex-col w-1/3 h-auto ml-2'>
                  <p className='text-[15px] text-black font-medium'>City</p>
                  <input type='text' placeholder='Please input' className='px-2 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'></input>
                </div>
                <div className='flex flex-col w-1/3 h-auto ml-2'>
                  <p className='text-[15px] text-black font-medium'>Leaf Category</p>
                  <input type='text' placeholder='Please input' className='px-2 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'></input>
                </div> 
            </div>
            <div className='flex flex-row w-full h-auto mt-2'>
                <div className='flex flex-col w-1/3 h-auto'>
                  <p className='text-[15px] text-black font-medium'>Activity Status</p>
                  <input type='text' placeholder='Please input' className='px-2 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'></input>
                </div>
                <div className='flex flex-col w-1/3 h-auto ml-2'>
                  <p className='text-[15px] text-black font-medium'>Approval Status</p>
                  <input type='text' placeholder='Please input' className='px-2 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'></input>
                </div>
                <div className='flex flex-col w-1/3 h-auto ml-2'></div>
            </div>
            <div className='w-[20%] h-auto justify-between mt-3 flex flex-row'>
                <button className='px-8 py-2 text-white bg-blue-600 rounded-3xl'>Apply</button>
                <button onClick={exit} className='px-8 py-2 text-blue-600 bg-white border border-blue-600 rounded-3xl'>Cancel</button>
            </div>
        </div>
    </div>
  )
}

export default Com
