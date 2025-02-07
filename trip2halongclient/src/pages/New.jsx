import React from 'react'
import Kien from '../components/header/Kien';
import Huy from '../components/yourTripHome/Huy';
import Footer from '../components/footer/Footer';

const New = () => {
  return (
    <div className='flex flex-col w-full h-auto bg-white'>
        <Kien/>
        <Huy/>
        <div className='w-full h-[133px] '></div>
        <Footer/>
    </div>
  )
}

export default New
