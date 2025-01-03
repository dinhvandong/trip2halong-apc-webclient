import React from 'react'
import Kien from '../components/kien/Kien'
import Huy from '../components/huy/Huy'
import Quan from '../components/quan/Quan'
import Toanbo from '../components/Toanbobo/Toanbo'
import VuLong from '../components/vulong/VuLong'
import AboutUs from '../components/quan/AboutUs'

const HomePage = () => {
    return (
        <div className='flex flex-col '>
            <Kien />
            <Huy />
            <Quan />
            <Toanbo />
            <Quan />
            <Toanbo />
            <VuLong />
            <AboutUs/>

        </div>
    )
}

export default HomePage