import React from 'react'
import Kien from '../components/kien/Kien'
import Huy from '../components/huy/Huy'
import Quan from '../components/quan/Quan'
import Toanbo from '../components/Toanbobo/Toanbo'
import VuLong from '../components/vulong/VuLong'
import AboutUs from '../components/quan/AboutUs'
import HaiLong from '../components/vulong/HaiLong'
import Footer from '../components/vulong/Footer'
import Favority from '../components/toanlili/Favority';
import Inspiration from '../components/toanuiui/Inspiration';

const HomePage = () => {
    return (
        <div className='flex flex-col items-center '>
            <Kien />
            <Huy />
            <Quan />
            <Toanbo />
            <Favority/>
            <Inspiration/>
            <HaiLong/>
            <Footer />
        </div>
    )
}

export default HomePage