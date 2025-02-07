import React from 'react'
import Kien from '../components/header/Kien'
import VuLong from '../components/footer/VuLong'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Toan2 from '../components/booking/AllFrom2'
import Toan from '../components/booking/AllFrom'
import MainComponent from '../components/booking/MainComponent'

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