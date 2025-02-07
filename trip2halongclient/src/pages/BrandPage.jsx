import React from 'react'
import Kien from '../components/kien/Kien'
import Huy from '../components/huy/Huy'
import Footer from '../components/vulong/Footer'
import Brand from '../components/huy/Brand/Brand'
import Quan from '../components/quan/Quan'

const BrandPage = () => {
    return (
        <div className='flex flex-col '>
        <Kien />
        <Huy />
        <Brand />
        <Footer/>
    </div>
      )
}

export default BrandPage