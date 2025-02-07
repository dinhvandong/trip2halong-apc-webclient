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

const HomePage = () => {
    return (
        <div className='flex flex-col items-center '>
            <Kien />
            <Huy />
            <Quan/>
            <Toanbo/>
            <Favority/>
            <Inspiration/>
            <HaiLong/>
            <Footer />
        </div>
    )
}

export default HomePage