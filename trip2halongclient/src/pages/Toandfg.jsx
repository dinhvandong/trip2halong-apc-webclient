import React from 'react'
import Longg from '../components/booking3/Booking3All';
import Header from '../components/header/Header';
import Kien from '../components/header/Kien';
import Toansdf from '../components/trendingInfor/Toansdf';
import Footer from '../components/footer/Footer';

const Toandfg = () => {
  return (
    <div className='flex flex-col w-full h-auto'>
        <Header/>
        <Kien/>
        <Longg/>
        <Footer/>
      
    </div>
  )
}

export default Toandfg
