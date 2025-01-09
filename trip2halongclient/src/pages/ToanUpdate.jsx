import React from 'react'
import Header from '../components/kien/Header';
import Kien from '../components/kien/Kien';
import Toansdf from '../components/toanjds/Toansdf';
import Footer from '../components/vulong/Footer';
import Long from '../components/hello/Longg';

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
