import icon from './assets/trip_logo.png';
import usa from './assets/USA.png';
import { RiRefund2Line } from "react-icons/ri";
import { PiUserCircleLight } from "react-icons/pi";
import React from 'react'

const Header = () => {



  return (

  <header className='w-full fixed top-0 left-0 right-0 z-50 bg-[#167dc8] h-auto md:h-[65px] flex flex-col md:flex-row'>
      <div className=" w-full md:w-1/2  h-auto md:h-full flex items-center">
          <img src={icon} className="ml-5 w-[100px] h-[50px]"/>
      </div>
      <div className=" w-full md:w-1/2  h-auto md:h-full flex flex-col md:flex-row justify-start items-center">
      <button className="text-white font-semibold text-lg  w-full md:w-1/5">Explore</button>
      <button className="text-white font-semibold text-lg  w-full md:w-1/5">Travel Essentials</button>
      <button className="text-white font-semibold text-lg  w-full md:w-1/5">My Trip</button>
      <button className="text-white font-semibold text-lg h-[60%] w-full  md:w-[20%] border rounded-full border-white mr-6">List Your Property</button>
      <button><RiRefund2Line className="text-white text-3xl mr-2"/></button>
      <button><img src={usa} className=" scale-75 mr-2"/></button>
      <button><PiUserCircleLight className="text-white text-3xl "/></button>
      </div>

  </header>
 

  )

}
export default Header