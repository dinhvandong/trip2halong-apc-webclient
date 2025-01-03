import React from 'react'
import VuLong from '../components/vulong/VuLong'
import Kien from '../components/kien/Kien'
import Huy from '../components/huy/Huy'
import AboutUs from '../components/quan/AboutUs'

const AboutPage = () => {
  return (
    <div className='flex flex-col '>
    <Kien />
    <Huy />
    <AboutUs/>
</div>
  )
}

export default AboutPage