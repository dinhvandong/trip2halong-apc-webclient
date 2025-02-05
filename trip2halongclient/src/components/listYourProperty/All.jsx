import React from 'react'
import Header from '../kien/Header';
import Kien from '../kien/Kien';
import Huy from '../huy/Huy';
import Footer from '../vulong/Footer';
import WhyTrip from './WhyTrip';
import Whatwe from './Whatwe';
import FAQAccordion from './FAQAccordion';


const All = () => {
    return (
        <div className='flex flex-col w-full h-auto bg-white'>
            <Header />
            <Kien />
            <Huy />
            <div className='w-full h-[170px] bg-white'></div>
            <WhyTrip />
            <div className='w-full h-[50px] bg-[#F4F4F4]'></div>
            <div className='w-full h-[700px] flex justify-center items-end p-6 bg-center bg-cover bg-[url(https://images.pexels.com/photos/2993132/pexels-photo-2993132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)]'>
                <button className='px-12 py-2 bg-[#167DC8] text-white font-medium rounded-md'>Sing Up Now</button>
            </div>
            <div className='w-full h-[30px]'></div>
            <Whatwe />
            <div className='flex flex-col items-center justify-center w-full h-auto bg-[#F4F4F4]'>
                <div className='flex flex-col w-[76%] h-full py-8'>
                    <p className='text-[35px] text-[#167DC8] font-bold leading-none mt-2'>About Trip2Halong</p>
                </div>
                <div className='flex flex-col w-[76%] h-full pb-6'>
                    <FAQAccordion />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default All
