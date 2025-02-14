import React, { useRef, useState } from 'react'
import hotel from 'assets/khach-san-peace-ha-long-3-azgotravel.vn.jpg';
import { MdOutlineZoomOutMap } from "react-icons/md";

const CabinCard = () => {

    const imgRef = useRef(null);

    const enterFullScreen = () => {
        if (imgRef.current.requestFullscreen) {
            imgRef.current.requestFullscreen();
        } else if (imgRef.current.webkitRequestFullscreen) {
            imgRef.current.webkitRequestFullscreen(); 
        } else if (imgRef.current.msRequestFullscreen) {
            imgRef.current.msRequestFullscreen(); 
        }
    };

    return (
        <div className="w-full h-auto bg-white rounded-md">
            <div className='flex items-center justify-between w-full h-auto p-6'>
                <h2 className="text-2xl font-bold">Ambassador Duluxe</h2>
                <p className="text-lg font-bold text-[#167DC8]">From USD 310/Cabin</p>
            </div>
            <div className="w-full h-auto bg-[#FAFAFA] flex p-6">  
                <div className="relative w-1/2">   
                    <img
                        ref={imgRef}
                        src={hotel}  
                        alt="Cabin"
                        className="object-cover w-full h-full rounded-lg"
                    />

                    
                    <div className="absolute flex justify-end w-full h-[15%] bottom-4">
                        <button
                            className="flex items-center gap-2 px-9 py-1 text-[20px] font-bold text-white bg-black bg-opacity-30 rounded-l-3xl"
                            onClick={enterFullScreen} 
                        >
                            <MdOutlineZoomOutMap /> Enlarge
                        </button>
                    </div>
                </div>
                <div className="w-1/2 ml-4">
                    <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center">
                            <span className="mr-2">🏠</span> Upper Deck
                        </li>
                        <li className="flex items-center">
                            <span className="mr-2">📏</span> 32 Sqm
                        </li>
                        <li className="flex items-center">
                            <span className="mr-2">🛏️</span> Convertible Double/Twin
                        </li>
                        <li className="flex items-center">
                            <span className="mr-2">🌅</span> Private Balcony
                        </li>
                        <li className="flex items-center">
                            <span className="mr-2">📺</span> Satellite TV
                        </li>
                        <li className="flex items-center">
                            <span className="mr-2">🚿</span> En-suite Bathroom
                        </li>
                        <li className="flex items-center">
                            <span className="mr-2">🚪</span> Walk-in Closet
                        </li>
                        <li className="flex items-center">
                            <span className="mr-2">🧴</span> Bathroom Amenities
                        </li>
                        <li className="flex items-center">
                            <span className="mr-2">💧</span> 2 Bottles of Mineral Water
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CabinCard
