import React from 'react'
import VuLong from '../components/vulong/VuLong'
import Kien from '../components/kien/Kien'
import AboutUs from '../components/quan/AboutUs'

const AboutPage = () => {
  return (
    <div className='flex flex-col '>
    <Kien />
    <AboutUs/>
    <VuLong/>
</div>
  )
}

export default AboutPage