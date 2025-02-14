import React from 'react'
import { FaLocationArrow } from "react-icons/fa6";
import { FaStar } from 'react-icons/fa';
import { RiShipLine } from "react-icons/ri";
import { PiGoogleDriveLogoFill } from "react-icons/pi"
import { GiMicrophone } from "react-icons/gi";
import { BsBusFront } from "react-icons/bs";
import { PiForkKnifeFill } from "react-icons/pi";
import { FaShieldAlt } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Longg2 = () => {
    return (
        <div className='flex bg-[#F2F2F2] w-full h-auto justify-center items-start flex-row shadow-sm'>
            <div className='flex flex-col justify-start items-start bg-white w-[55%] h-auto rounded-lg p-3'>
                <h1 className='px-5 py-2 text-3xl font-bold text-[#505556]'>Ambassador Cruise | 2-day-1-night-Tour</h1>
                <div className='flex items-center'  >
                    <FaLocationArrow
                        style={{
                            color: '#167DC8',
                            fontSize: '14px',
                            transform: 'translateX(20px)'
                        }}
                    />
                    <p className='px-6 text-[#167DC8]'>Depart from Halong International Cruise Port -<span className='ml-1 underline cursor-pointer'>Show on map</span></p>
                </div>
                <div className="flex items-center space-x-2">
                    {/* 5 ngôi sao */}
                    <div className="flex px-5 space-x-1">
                        {[...Array(5)].map((_, index) => (
                            <FaStar key={index} className="w-3 h-3 mt-2 ml-1 text-[#FFBB0B]" />
                        ))}
                        <button className="mt-1 w-8 h-5 font-bold text-white bg-[#FFBB0B] rounded text-[10px] ">
                            4.8%
                        </button>
                        <p className='mt-0.5'>(5000+ reviews)</p>
                    </div>
                </div>
                <div className='flex p-4 w-full h-[450px] bg-white space-x-2'>
                    <div className=' w-[65%]'>
                        <img
                            src="https://media.baoquangninh.vn/dataimages/201904/original/images1283642_2.jpg"
                            alt="Example"
                            className="object-cover w-full h-full rounded-md"
                        />
                    </div>
                    <div className='flex flex-col bg-white w-[35%] gap-2'>
                        <div className='w-full h-[49.1%]'>
                            <img
                                src="https://media.baoquangninh.vn/dataimages/201904/original/images1283642_2.jpg"
                                alt="Example"
                                className="object-cover w-full h-full rounded-md"
                            />
                        </div>
                        <div className='w-full h-[49.1%]'>
                            <img
                                src="https://media.baoquangninh.vn/dataimages/201904/original/images1283642_2.jpg"
                                alt="Example"
                                className="object-cover w-full h-full rounded-md"
                            />
                        </div>
                    </div>
                </div>
                <p className='px-5 text-[#505556] text-[18px] font-semibold leading-5 '>Embark on the Best of Halong Bay Day Cuise to discover the beauty of this UNESCO Heritage Wonder in just 8 hours. Enjoy breakfast, a sumptuous buffet lunch, and sunset entertainment while covering all top actractions. </p>
                <p className='px-5 text-[#505556] text-[18px] font-semibold leading-5 mt-6 '>Elegantly designed, Ambassador Day Cruise features spacious sundecks across two floors with a total area of 324 sqm and 250 sqm, affording 360-degree vistas of Halong Bay and its myriad limestone karsts. Two restaurants, two bars, an entertainment area for live music, and the large open-air Jacuzzi are among the 39-cabin vessel's top-notch facilities. The five- metre glass bridge jutting from the vessel's bow inspires compelling photographs.</p>
                <div className='w-full h-auto p-2 mt-4'>
                    <div className='flex w-[99%] h-[160px] px-5 p-3 rounded-md'>
                        <div className='flex font-bold text-xl p-3 text-[#167DC8] rounded-l-md justify-start items-start w-[20%] bg-[#F4F4F4] h-full'>
                            Highlights
                        </div>
                        <div className='flex flex-col w-[30%] justify-center items-start gap-7 bg-[#F4F4F4] h-full'>
                            <div className="flex items-center space-x-2">
                                <RiShipLine className='text-[#167DC8]' />
                                <span className="text-[#505556]">8 hour Day Tour</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <PiGoogleDriveLogoFill className='text-[#167DC8]' />
                                <span className="text-[#505556]">Entrance & Sightseeing Fees</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <GiMicrophone className='text-[#167DC8]' />
                                <span className="text-[#505556]">Sunset Entertainment</span>
                            </div>
                        </div>
                        <div className='flex flex-col w-[50%] justify-center items-start rounded-r-md gap-7 p-2 bg-[#F4F4F4] h-full'>

                            <div className="flex items-center space-x-2">
                                <PiForkKnifeFill className='text-[#167DC8]' />

                                <span className="text-[#505556]">Breakfast & Lunch Buffet</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <BsBusFront className='text-[#167DC8]' />
                                <span className="text-[#505556]">Round-trip Shuttle Bus</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <FaShieldAlt className='text-[#167DC8]' />
                                <span className="text-[#505556]">Onbroad Insurance, taxex & service charges</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center w-full h-auto p-2 mt-3'>
                    <button className='bg-[#167DC8] w-[400px] h-[50px] rounded-lg flex justify-center items-center text-white font-bold gap-3'>
                        <p>Detailed ltinerary </p>
                        <MdOutlineKeyboardArrowDown style={{ width: '23px', height: '23px' }} />
                    </button>
                </div>
            </div>
            <div className='flex flex-col bg-white w-[25%] ml-4 h-auto border border-[#A6C3DB] rounded-lg'>
                <h2 className='px-5 py-2 text-2xl font-bold text-[#1D87D2]'>YOUR RESERVATION</h2>
                <p className='px-5 -mt-2 text-[#505556]'>Ambassador Day Cruise</p>
                <div className='bg-[#F4F4F4] h-[1px] w-full mt-3'></div>
                <div className='flex items-start justify-between w-full h-[120px] mt-3 bg-slate-500'>
                    <div className='flex flex-col w-[40%] h-full bg-white gap-2 px-5'>
                        <p className='text-[17px] text-[#505556] font-bold'>Cruise Date</p>
                        <p className='text-[17px] text-[#505556] font-bold'>Program</p>
                        <p className='text-[17px] text-[#505556] font-bold'>Passenger</p>
                    </div>
                    <div className='flex flex-col w-[60%] h-full bg-white gap-2 text-end px-5'>
                        <p className='text-[17px] text-[#8CA6C4] '>Dec 24, 2024</p>
                        <p className='text-[17px] text-[#8CA6C4] '>Day Cruise</p>
                        <p className='text-[17px] text-[#8CA6C4]'>
                            04 Adults • 02 Children <br />• 00 infant
                        </p>
                    </div>
                </div>
                <div className='bg-[#F4F4F4] h-[1px] w-full mt-3'></div>
                <div className='flex items-center justify-between px-5 py-4'>
                    <p className='text-[17px] text-[#505556] font-bold'>Transfer Service</p>
                    <button className='bg-[#EDF4FE] w-[85px] h-[40px] text-[17px] text-[#8CA6C4]'>Included</button>
                </div>
                <div className='flex items-start justify-between w-full h-[165px] '>
                    <div className='flex flex-col w-[30%] gap-14 px-5'>
                        <p className='text-[17px] text-[#505556] font-bold'>Pickup</p>
                        <p className='text-[17px] text-[#505556] font-bold'>Drop-off</p>
                    </div>
                    <div className='flex flex-col w-[70%] h-full bg-white gap-2 text-end px-5'>
                        <p className=''>Hanoi Towers, <br />49 Hai Ba Trung, Hoan Kiem  <br />Hanoi</p>
                        <p className=''>Hanoi Towers, <br />49 Hai Ba Trung, Hoan Kiem  <br />Hanoi</p>
                    </div>
                </div>
                <div className='bg-[#F4F4F4] h-[1px] w-full '></div>
                <div className='flex items-center justify-between px-5 py-4'>
                    <p className='text-[17px] text-[#505556] font-bold'>Total Price</p>
                    <p className='text-[17px] text-[#167DC8] font-bold'>USD 280</p>
                </div>
                <div className='bg-[#F4F4F4] h-[1px] w-full '></div>
                <div className='flex flex-col w-full h-auto p-4 '>
                    <p className='text-[17px] text-[#505556] font-bold'>Important Notes</p>
                    <p className='text-[17px] text-[#505556] mt-1'>
                        Please refer to the <span className="font-bold underline">Terms & Condition</span>, and <span className="font-bold underline">Privacy Policy</span> by Trip2Halong
                    </p>
                    <button className='bg-[#167DC8] w-full h-[50px] rounded-lg mt-5 text-white font-bold'>Proceed Payment</button>
                </div>
            </div>
        </div>
    )
}

export default Longg2
