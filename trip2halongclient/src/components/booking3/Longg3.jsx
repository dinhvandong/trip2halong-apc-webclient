import React, { useState } from 'react'
import CabinCard from './CabinCard'
import Pesletor from './Pesletor';
import RateOption from './RateOption';
import { FiChevronDown } from "react-icons/fi";

const Longg3 = () => {
    const [isOpen, setIsOpen] = useState(false);

    // const [quantities, setQuantities] = useState([0, 0, 0]);
    // const prices = [40, 60, 100]; // Giá các sản phẩm
    // const productNames = ['Adults', 'Children', 'Infants'];
    // const productDescriptions = [
    //     'From 12 years old',
    //     'From 5 to 10 years old',
    //     'From 1 to 4 years old',
    // ];
    // // Hàm cập nhật số lượng sản phẩm
    // const updateQuantity = (index, newQuantity) => {
    //     const updatedQuantities = [...quantities];
    //     updatedQuantities[index] = newQuantity;
    //     setQuantities(updatedQuantities);
    // };

    // // Tính tổng giá
    // const totalPrice = quantities.reduce((acc, qty, index) => acc + qty * prices[index], 0);

    return (
        <div className='flex bg-[#F2F2F2] w-full h-auto justify-center items-start flex-row '>
            <div className='flex flex-col bg-white w-[55%] h-auto rounded-md mt-4'>
                <CabinCard />
                <Pesletor />
                <RateOption />
                <div className="w-full h-auto p-6">
                    {/* Button */}
                    <button
                        className="w-full h-[50px] text-[#167DC8] text-xl font-bold bg-white flex justify-center items-center rounded-3xl border border-[#167DC8] relative"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        View more Cabins & Rates
                        <FiChevronDown
                            className={`ml-3 text-black transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"
                                }`}
                        />
                    </button>

                    {/* Dropdown Content */}
                    {isOpen && (
                        <div className="p-4 mt-3 bg-white border border-gray-300 rounded-lg shadow-lg">
                            <p className="py-2 border-b cursor-pointer hover:bg-[#e4f1fc]">🏡 Cabin Type 1 - $100/night</p>
                            <p className="py-2 border-b cursor-pointer hover:bg-[#e4f1fc]">🏕️ Cabin Type 2 - $120/night</p>
                            <p className="py-2 cursor-pointer hover:bg-[#e4f1fc]">🌲 Cabin Type 3 - $150/night</p>
                        </div>
                    )}
                </div>
            </div>
            <div className='w-[25%] ml-4'></div>


        </div>
        // <div className='flex bg-[#F4F4F4] w-full h-[740px] px-28 space-x-5 '>
        //     <div className='flex justify-start items-start bg-white w-[67%] h-[690px] rounded-lg mt-7 gap-8'>
        //         <div className='flex flex-col justify-start items-start bg-white w-[55%] h-[550px] '>
        //             <h1 className='px-5 py-2 text-2xl font-bold text-[#167DC8] mt-1'>Select Packages</h1>
        //             <div className="flex flex-col items-center justify-around gap-2 px-5">


        //                 {/* Div 1 */}
        //                 <div className="cursor-pointer shadow-md flex items-start justify-between w-[500px] h-[180px] p-4 border border-[#167DC8] rounded-lg peer-checked:bg-red-100 group hover:bg-[#E5F2FB]">
        //                     <div className='flex flex-col w-[70%] items-start'>

        //                         <div className="flex items-center gap-2">

        //                             <input
        //                                 type="checkbox"
        //                                 id="checkbox1"
        //                                 className="w-5 h-5 text-blue-600 cursor-pointer peer form-checkbox focus:ring-blue-500"
        //                             />
        //                             <span className=" font-bold text-[#505556] text-[20px]">Flexible Rate</span>
        //                         </div>

        //                         <div className="flex flex-col gap-3">
        //                             <button className="w-[230px] h-[45px] px-3 space-x-2 mt-3 flex justify-start items-center border border-[#F4F4F4] text-[#167DC8] transition bg-white rounded-full hover:bg-gray-300">
        //                                 <img
        //                                     src="https://img.icons8.com/android/167DC8/checked.png"
        //                                     className="w-4 h-4 "
        //                                 />
        //                                 <p className='font-semibold'>Amend Your Cruise Date</p>
        //                             </button>
        //                             <button className="w-[265px] h-[45px] px-3 space-x-2 flex justify-start items-center border border-[#F4F4F4] text-[#167DC8] transition bg-white rounded-full hover:bg-gray-300">
        //                                 <img
        //                                     src="https://img.icons8.com/android/167DC8/checked.png"
        //                                     className="w-4 h-4 "
        //                                 />
        //                                 <p className='font-semibold'>Cruise Cancollation & Refund</p>
        //                             </button>
        //                         </div>

        //                     </div>
        //                     <div className='flex flex-col w-[30%] items-end'>
        //                         <p className='text-[#167DC8] font-bold text-[15px]'>FROM</p>
        //                         <h1 className='text-[#167DC8] font-bold text-[20px]'>$69/Adult</h1>
        //                     </div>
        //                 </div>



        //                 {/* Div 2 */}
        //                 <div className="cursor-pointer shadow-md flex items-start justify-between w-[500px] h-[180px] p-4 border border-[#167DC8] rounded-lg peer-checked:bg-red-100 group hover:bg-[#E5F2FB]">
        //                     <div className='flex flex-col w-[70%] items-start'>

        //                         <div className="flex items-center gap-2">

        //                             <input
        //                                 type="checkbox"
        //                                 id="checkbox1"
        //                                 className="w-5 h-5 text-blue-600 cursor-pointer peer form-checkbox focus:ring-blue-500"
        //                             />
        //                             <span className=" font-bold text-[#505556] text-[20px]">Dynamic Deal</span>
        //                         </div>

        //                         <div className="flex flex-col gap-3">
        //                             <button className="w-[230px] h-[45px] px-3 space-x-2 mt-3 flex justify-start items-center border border-[#F4F4F4] text-[#167DC8] transition bg-white rounded-full hover:bg-gray-300">
        //                                 <img
        //                                     src="https://img.icons8.com/android/167DC8/checked.png"
        //                                     className="w-4 h-4 "
        //                                 />
        //                                 <p className='font-semibold'>Amend Your Cruise Date</p>
        //                             </button>
        //                             <button className="w-[265px] h-[45px] px-3 space-x-2 flex justify-start items-center border border-[#F4F4F4] text-[#167DC8] transition bg-white rounded-full hover:bg-gray-300">
        //                                 <img
        //                                     src="https://img.icons8.com/android/167DC8/checked.png"
        //                                     className="w-4 h-4 "
        //                                 />
        //                                 <p className='font-semibold'>Cruise Cancollation & Refund</p>
        //                             </button>
        //                         </div>

        //                     </div>
        //                     <div className='flex flex-col w-[30%] items-end'>
        //                         <p className='text-[#167DC8] font-bold text-[15px]'>FROM</p>
        //                         <h1 className='text-[#167DC8] font-bold text-[20px]'>$63/Adult</h1>
        //                     </div>
        //                 </div>


        //                 {/* Div 3 */}
        //                 <div className="cursor-pointer shadow-md flex items-start justify-between w-[500px] h-[235px] p-4 border border-[#167DC8] rounded-lg peer-checked:bg-red-100 group hover:bg-[#E5F2FB]">
        //                     <div className='flex flex-col w-[70%] items-start'>

        //                         <div className="flex items-center gap-2">

        //                             <input
        //                                 type="checkbox"
        //                                 id="checkbox1"
        //                                 className="w-5 h-5 text-blue-600 cursor-pointer peer form-checkbox focus:ring-blue-500"
        //                             />
        //                             <span className=" font-bold text-[#505556] text-[20px]">Smart Deal</span>
        //                         </div>

        //                         <div className="flex flex-col gap-3">
        //                             <button className="w-[335px] h-[45px] px-3 mt-3 space-x-2 flex justify-start items-center border border-[#F4F4F4] text-[#167DC8] transition bg-white rounded-full hover:bg-gray-300">
        //                                 <img
        //                                     src="https://img.icons8.com/android/167DC8/checked.png"
        //                                     className="w-4 h-4 "
        //                                 />
        //                                 <p className='font-semibold'>Hanoi - Halong Round-trip Shuttle Bus</p>
        //                             </button>
        //                             <button className="w-[230px] h-[45px] px-3 space-x-2 flex justify-start items-center border border-[#F4F4F4] text-[#167DC8] transition bg-white rounded-full hover:bg-gray-300">
        //                                 <img
        //                                     src="https://img.icons8.com/android/167DC8/checked.png"
        //                                     className="w-4 h-4 "
        //                                 />
        //                                 <p className='font-semibold'>Amend Your Cruise Date</p>
        //                             </button>
        //                             <button className="w-[265px] h-[45px] px-3 space-x-2 flex justify-start items-center border border-[#F4F4F4] text-[#167DC8] transition bg-white rounded-full hover:bg-gray-300">
        //                                 <img
        //                                     src="https://img.icons8.com/android/167DC8/checked.png"
        //                                     className="w-4 h-4 "
        //                                 />
        //                                 <p className='font-semibold'>Cruise Cancollation & Refund</p>
        //                             </button>
        //                         </div>

        //                     </div>
        //                     <div className='flex flex-col w-[30%] items-end'>
        //                         <p className='text-[#167DC8] font-bold text-[15px]'>FROM</p>
        //                         <h1 className='text-[#167DC8] font-bold text-[20px]'>$90/Adult</h1>
        //                     </div>
        //                 </div>

        //             </div>
        //         </div>
        //         <div className='flex flex-col justify-start items-start mr-4 bg-white w-[45%] h-[408px] mt-3 rounded-lg border border-[#F4F4F4] '>
        //             <h1 className='px-5 py-2 text-2xl font-bold text-[#167DC8] '>Passenger</h1>

        //             <div>
        //                 {/* Các thẻ sản phẩm */}
        //                 <div className="">
        //                     {[0, 1, 2].map((index) => (
        //                         <div key={index} className="flex items-center justify-between gap-6 p-3 px-5 ">
        //                             {/* Thông tin sản phẩm */}
        //                             <div className="flex items-center space-x-4">
        //                                 <div>
        //                                     <h2 className="text-lg font-semibold">{productNames[index]}</h2>
        //                                     <p className="text-gray-500">{productDescriptions[index]}</p>
        //                                 </div>
        //                             </div>

        //                             {/* Số lượng và điều chỉnh */}
        //                             <div className="flex items-center space-x-4">
        //                                 <button
        //                                     onClick={() => updateQuantity(index, quantities[index] > 1 ? quantities[index] - 1 : 1)}
        //                                     className="w-14 h-14 flex justify-center items-center border border-[#167DC8] bg-white hover:bg-[#F4F4F4]"
        //                                 >
        //                                     <p className='text-[45px] text-[#167DC8] -mt-2'> - </p>
        //                                 </button>
        //                                 <span className="text-xl">{quantities[index]}</span>
        //                                 <button
        //                                     onClick={() => updateQuantity(index, quantities[index] + 1)}
        //                                     className="w-14 h-14 px-3 py-1 border border-[#167DC8] bg-white hover:bg-[#F4F4F4]"
        //                                 >
        //                                     <p className='text-[30px] text-[#167DC8] -mt-1'> + </p>
        //                                 </button>
        //                             </div>
        //                         </div>
        //                     ))}
        //                 </div>
        //                 <div className='bg-[#F4F4F4] h-[1px] w-full mt-3'></div>
        //                 {/* Tổng tiền */}
        //                 <div className="flex items-center justify-between px-5 mt-4 text-xl text-[#505556] font-bold">
        //                     <p>Total Price<br /><span className='font-normal text-gray-500 text-[18px]'>Incl.Taxes & Fees</span></p>
        //                     <button className='bg-[#E5F2FB] w-[150px] h-[50px] rounded-lg text-[#167DC8]'>
        //                         USD {totalPrice.toLocaleString()}
        //                     </button>
        //                 </div>
        //             </div>







        //         </div>
        //     </div>
        // </div>
    )
}

export default Longg3
