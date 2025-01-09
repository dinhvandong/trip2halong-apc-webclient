import React from 'react'
import halong1 from './assets/halong1.jpg';
import halong2 from './assets/halong2.jpg';
import logo from '../vulong/assets/logotriphalong.jpg';


import { TfiEye } from "react-icons/tfi";
import { CiStar } from "react-icons/ci";
import { HiOutlineUserGroup } from "react-icons/hi";


const AboutUs = () => {
  return (
    <div className='mt-48 flex flex-col items-center w-full h-auto  bg-[#F4F5F5]'>
      <p className='font-bold text-5xl py-12 '>About us</p>

      <div class="grid grid-cols-2 w-full  ">
        {/* Top Left Section - Our Mission */}
        <div class="bg-[#2896E5] py-16 px-24 text-white flex flex-col justify-center items-start">
          <p class="text-6xl font-bold text-yellow-400 py-8 ml-6">Our Mission</p>
          <ul class="list-disc ml-6 leading-10 font-medium text-[28px]">
            <li>To provide a seamless and user-friendly <br/>
               platform for travelers to plan their Halong <br/>
               trip.</li>
            <li>To curate high-quality and personalized <br/> travel experiences.</li>
            <li>To empower local businesses by promoting <br/> their products and services to a global <br/> audience.</li>
          </ul>
        </div>

        {/* Top Right Section - Image */}
        <div class="bg-cover bg-center" >
          <img src={halong2}
          alt='halong2'
          className='h-full w-full object-cover'/>
         </div>

        {/* Bottom Left Section - Image */}
        <div class="bg-cover bg-center" >
          <img src={halong2}
          alt='halong2'
          className='h-full w-full object-cover'/>
         </div>

        {/* Bottom Right Section - Our Vision */}
        <div class="bg-[#104672]  py-16 px-24 text-white flex flex-col justify-center items-start">
          <h2 class="text-6xl  font-bold text-yellow-400 py-8 ml-6">Our Vision</h2>
          <p className='font-medium text-[28px] ml-6 leading-10'>
           To become one of the leading digital <br/>
           gateways for unforgettable travel <br/> 
           experiences in Halong, by connecting travelers<br/>
            with the best local cruises,<br/>
           accommodations, and attractions, while<br/>
           fostering sustainable tourism and <br/>
           showcasing the beauty of Halong to the <br/>
           world.
          </p>
         </div>
    </div>


      <p className='font-bold text-5xl py-12 text-[#2281CD]'>
        Our Values
      </p>
      <div className='flex justify-between  w-[80%] h-auto pb-12'>
        <div className='flex flex-col items-center px-11 py-10 bg-[#E5F2FB] border-2 border-[#A2C9E0] rounded-2xl'>
          <HiOutlineUserGroup className='w-20 h-20 text-[#2073C3] mt-2'/>
          <p className='flex flex-col items-center font-bold text-4xl text-[#2281CD] py-6'>Values to
            <p>Community</p>
          </p>    
          <p className='flex flex-col items-center font-medium text-[20px] text-[#425E7A]'>Promote sustainable tourism
            <p>Promote the rich heritage of Halong</p>
            <p>Empower the regional economic</p>
            <p>growth</p>
          </p>
        </div>

        <div className='flex flex-col items-center px-11 py-10 bg-[#E5F2FB] border-2 border-[#A2C9E0] rounded-2xl'>
          <TfiEye className='w-20 h-20 mt-3 text-[#3D7FC9]'/>

          <p className='flex flex-col items-center font-bold text-4xl text-[#2281CD] py-6'>Values to
            <p>Community</p>
          </p>    
          <p className='flex flex-col items-center font-medium text-[20px] text-[#425E7A]'>Promote sustainable tourism
            <p>Promote the rich heritage of Halong</p>
            <p>Empower the regional economic</p>
            <p>growth</p>
          </p>
        </div>

        <div className='flex flex-col items-center px-11 py-10 bg-[#E5F2FB] border-2 border-[#A2C9E0] rounded-2xl'>
          <CiStar className='w-20 h-20 mt-3 text-[#3D7FC9]'/>
          <p className='flex flex-col items-center font-bold text-4xl text-[#2281CD] py-6'>Values to
            <p>Community</p>
          </p>    
          <p className='flex flex-col items-center font-medium text-[20px] text-[#425E7A]'>Promote sustainable tourism
            <p>Promote the rich heritage of Halong</p>
            <p>Empower the regional economic</p>
            <p>growth</p>
          </p>
        </div>

      </div>



      <div className='flex w-[80%] h-auto  bg-white'>
        <div className='flex flex-col w-[30%] mt-16 ml-11'>
          <p className='font-bold text-[43px] text-[#2A85C0] '>WHAT WE SELL</p>
          <div className='leading-6 mt-4 pb-16'>
          <p className='font-medium text-[18px] text-[#425E7A] '>
            Trip2halong offers a comprehensive 
          </p>
          <p className='font-medium text-[18px] text-[#425E7A] '>
            suite of travel services in Halong. Our 
          </p>
          <p className='font-medium text-[18px] text-[#425E7A] '>
            main products include cruise 
          </p>
          <p className='font-medium text-[18px] text-[#425E7A] '>
            bookings, attraction tickets, and 
          </p>
          <p className='font-medium text-[18px] text-[#425E7A] '>
            travel tours/combos, all designed to 
          </p>
          <p className='font-medium text-[18px] text-[#425E7A] '>
            meet every traveller's needs and 
          </p>
          <p className='font-medium text-[18px] text-[#425E7A] '>
            ensure your seemless trip. 
          </p>
          </div>  
        </div>
        
        <div className='w-[70%] aspect-[3/1] mb-5'>
           <img 
          src={halong1} 
          alt="halong1" 
          className="w-full h-full object-cover" 
          />
        </div>      
      </div>

    </div>
    
    
  )
}

export default AboutUs
