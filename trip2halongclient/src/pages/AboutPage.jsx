import React from 'react'
import VuLong from '../components/footer/VuLong'
import Kien from '../components/header/Kien'
import Huy from '../components/yourTripHome/Huy'
import AboutUs from '../components/bestTripHome/AboutUs'
import HaiLong from '../components/footer/HaiLong'
import Footer from '../components/footer/Footer'

const AboutPage = () => {
  return (
    <div className='flex flex-col '>
    <Kien />
    <Huy />
    <AboutUs/>
    <Footer />
</div>
  )
}

export default AboutPage