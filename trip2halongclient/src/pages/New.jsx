import React from 'react'
import Kien from '../components/kien/Kien';
import Huy from '../components/huy/Huy';
import Footer from '../components/vulong/Footer';

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
