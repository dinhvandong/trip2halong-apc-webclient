import React from 'react'
import { Star } from "lucide-react";

const Evaluate = ({ currentIndex }) => {
   
    return (
        <div className="mt-5 overflow-hidden">
            <div className="relative flex flex-row mr-3  w-full min-w-0  h-[180px] rounded-md">
                <div
                    className="flex w-full h-full transition-transform duration-300"
                    style={{
                      
                        transform: `translateX(-${currentIndex * 500}px)`,
                    }}
                >
                    <div className='relative flex flex-col h-full mx-2 w-[380px] pl-5 py-5  flex-shrink-0 shadow-md rounded-lg'>
                        <div className='flex'>
                            <img src='https://media.muanhatructuyen.vn/post/226/49/3/hinh-nen-mau-den-dim-gray.jpg' alt='' className='bg-gray-600 h-12 w-12 rounded-full' />
                            <div className='ml-3'>
                                <h3 className='font-bold text-[#454849] text-2xl'>Ambassador Cruise</h3>
                                <div className="flex items-center text-yellow-500 my-2">
                                    <Star size={13} fill="currentColor" />
                                    <Star size={13} fill="currentColor" />
                                    <Star size={13} fill="currentColor" />
                                    <Star size={13} fill="currentColor" />
                                    <Star size={13} fill="currentColor" />
                                    <span className="ml-1 text-xs font-semibold bg-yellow-500 text-white px-1">5.0</span>
                                </div>
                            </div>
                        </div>
                        <div className='text-sm'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias optio molestiae distinctio quisquam nihil Lorem ipsum dolor sit amet  adipisicing elit...</p>
                            <span className='text-[#0081CE] underline cursor-pointer '>Read more</span>
                        </div>
                    </div>
                    <div className='relative flex flex-col h-full mx-2 w-[380px] pl-5 py-5  flex-shrink-0 shadow-md rounded-lg'>
                        <div className='flex'>
                            <img src='https://media.muanhatructuyen.vn/post/226/49/3/hinh-nen-mau-den-dim-gray.jpg' alt='' className='bg-gray-600 h-12 w-12 rounded-full' />
                            <div className='ml-3'>
                                <h3 className='font-bold text-[#454849] text-2xl'>Ambassador Cruise</h3>
                                <div className="flex items-center text-yellow-500 my-2">
                                    <Star size={13} fill="currentColor" />
                                    <Star size={13} fill="currentColor" />
                                    <Star size={13} fill="currentColor" />
                                    <Star size={13} fill="currentColor" />
                                    <Star size={13} fill="currentColor" />
                                    <span className="ml-1 text-xs font-semibold bg-yellow-500 text-white px-1">5.0</span>
                                </div>
                            </div>
                        </div>
                        <div className='text-sm'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias optio molestiae distinctio quisquam nihil Lorem ipsum dolor sit amet  adipisicing elit...</p>
                            <span className='text-[#0081CE] underline cursor-pointer '>Read more</span>
                        </div>
                    </div>
                    <div className='relative flex flex-col h-full mx-2 w-[380px] pl-5 py-5  flex-shrink-0 shadow-md rounded-lg'>
                        <div className='flex'>
                            <img src='https://media.muanhatructuyen.vn/post/226/49/3/hinh-nen-mau-den-dim-gray.jpg' alt='' className='bg-gray-600 h-12 w-12 rounded-full' />
                            <div className='ml-3'>
                                <h3 className='font-bold text-[#454849] text-2xl'>Ambassador Cruise</h3>
                                <div className="flex items-center text-yellow-500 my-2">
                                    <Star size={13} fill="currentColor" />
                                    <Star size={13} fill="currentColor" />
                                    <Star size={13} fill="currentColor" />
                                    <Star size={13} fill="currentColor" />
                                    <Star size={13} fill="currentColor" />
                                    <span className="ml-1 text-xs font-semibold bg-yellow-500 text-white px-1">5.0</span>
                                </div>
                            </div>
                        </div>
                        <div className='text-sm'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias optio molestiae distinctio quisquam nihil Lorem ipsum dolor sit amet  adipisicing elit...</p>
                            <span className='text-[#0081CE] underline cursor-pointer '>Read more</span>
                        </div>
                    </div>
                    <div className='relative flex flex-col h-full mx-2 w-[380px] pl-5 py-5  flex-shrink-0 shadow-md rounded-lg'>
                        <div className='flex'>
                            <img src='https://media.muanhatructuyen.vn/post/226/49/3/hinh-nen-mau-den-dim-gray.jpg' alt='' className='bg-gray-600 h-12 w-12 rounded-full' />
                            <div className='ml-3'>
                                <h3 className='font-bold text-[#454849] text-2xl'>Ambassador Cruise</h3>
                                <div className="flex items-center text-yellow-500 my-2">
                                    <Star size={13} fill="currentColor" />
                                    <Star size={13} fill="currentColor" />
                                    <Star size={13} fill="currentColor" />
                                    <Star size={13} fill="currentColor" />
                                    <Star size={13} fill="currentColor" />
                                    <span className="ml-1 text-xs font-semibold bg-yellow-500 text-white px-1">5.0</span>
                                </div>
                            </div>
                        </div>
                        <div className='text-sm'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias optio molestiae distinctio quisquam nihil Lorem ipsum dolor sit amet  adipisicing elit...</p>
                            <span className='text-[#0081CE] underline cursor-pointer '>Read more</span>
                        </div>
                    </div>
                    <div className='relative flex flex-col h-full mx-2 w-[380px] pl-5 py-5  flex-shrink-0 shadow-md rounded-lg'>
                        <div className='flex'>
                            <img src='https://media.muanhatructuyen.vn/post/226/49/3/hinh-nen-mau-den-dim-gray.jpg' alt='' className='bg-gray-600 h-12 w-12 rounded-full' />
                            <div className='ml-3'>
                                <h3 className='font-bold text-[#454849] text-2xl'>Ambassador Cruise</h3>
                                <div className="flex items-center text-yellow-500 my-2">
                                    <Star size={13} fill="currentColor" />
                                    <Star size={13} fill="currentColor" />
                                    <Star size={13} fill="currentColor" />
                                    <Star size={13} fill="currentColor" />
                                    <Star size={13} fill="currentColor" />
                                    <span className="ml-1 text-xs font-semibold bg-yellow-500 text-white px-1">5.0</span>
                                </div>
                            </div>
                        </div>
                        <div className='text-sm'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias optio molestiae distinctio quisquam nihil Lorem ipsum dolor sit amet  adipisicing elit...</p>
                            <span className='text-[#0081CE] underline cursor-pointer '>Read more</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Evaluate