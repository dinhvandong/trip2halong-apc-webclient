import React from 'react'
import VuLong from '../components/footer/VuLong'
import Kien from '../components/header/Kien'
import Huy from '../components/yourTripHome/Huy'
import AboutUs from '../components/bestTripHome/AboutUs'
import HaiLong from '../components/footer/HaiLong'
import Footer from '../components/footer/Footer'
import FaQ from '../components/footer/FaQ'

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