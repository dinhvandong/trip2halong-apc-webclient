import React from 'react'
import Kien from '../components/header/Kien'
import Huy from '../components/yourTripHome/Huy'
import Quan from '../components/bestTripHome/Quan'
import Toanbo from '../components/trendingHome/TrendingHome'
import VuLong from '../components/footer/VuLong'
import AboutUs from '../components/bestTripHome/AboutUs'
import HaiLong from '../components/footer/HaiLong'
import Footer from '../components/footer/Footer'
import Favority from '../components/favority/Favority'
import Inspiration from '../components/homeInspiration/Inspiration'
import Brand from '../components/yourTripHome/Brand/Brand'



const BrandPage = () => {
  return (
    <div className='flex flex-col items-center '>
    <Kien />
    <Huy />
    <Brand/>
    <Footer />
</div>
  )
}

export default BrandPage