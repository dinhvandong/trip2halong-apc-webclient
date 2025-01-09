import React from 'react'
import VuLong from '../components/vulong/VuLong'
import Kien from '../components/kien/Kien'
import Huy from '../components/huy/Huy'
import AboutUs from '../components/quan/AboutUs'
import HaiLong from '../components/vulong/HaiLong'
import Footer from '../components/vulong/Footer'
import FaQ from '../components/FaQ'

const FaQPage = () => {
  return (
    <div className='flex flex-col '>
    <Kien />
    <Huy />
    <FaQ/>
    <Footer />
</div>
  )
}


export default FaQPage