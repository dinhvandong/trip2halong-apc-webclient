import React from 'react'
import Header from '../components/header/Header';
import Kien from '../components/header/Kien';
import Toansdf from '../components/trendingInfor/Toansdf';
import Footer from '../components/footer/Footer';
import Long from '../components/booking3/Booking3All';

const ToanUpdate = () => {
  return (
    <div className='flex flex-col w-full h-auto'>
        <Header/>
        <Kien/>
        {/* <Long/> */}
        <Toansdf/>
        <Footer/>
      
    </div>
  )
}

export default ToanUpdate
