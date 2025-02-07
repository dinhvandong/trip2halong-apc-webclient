import React from 'react'
import Longg from '../components/booking3/Longg';
import Header from '../components/kien/Header';
import Kien from '../components/kien/Kien';
import Toansdf from '../components/toanjds/Toansdf';
import Footer from '../components/vulong/Footer';

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
