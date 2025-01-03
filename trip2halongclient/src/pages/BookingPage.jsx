import React from 'react'
import Kien from '../components/kien/Kien'
import VuLong from '../components/vulong/VuLong'
import Header from '../components/kien/Header'
import Footer from '../components/vulong/Footer'
import Toan2 from '../components/toan/Toan2'
import Toan from '../components/toan/Toan'
import MainComponent from '../components/toan/MainComponent'

const BookingPage = () => {
    return (
        <div className='flex flex-col bg-gray-200 '>
            <Kien />
           <MainComponent/>
            <Footer/>

        </div>
    )
}

export default BookingPage