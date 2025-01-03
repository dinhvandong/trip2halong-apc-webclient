import React from 'react'
import Kien from '../components/kien/Kien'
import VuLong from '../components/vulong/VuLong'
import Header from '../components/kien/Header'
import Footer from '../components/vulong/Footer'
import Toan2 from '../components/toan/Toan2'
import Toan from '../components/toan/Toan'

const BookingPage = () => {
    return (
        <div className='flex flex-col '>
            <Kien />
            <Toan/>
            <Toan2/>
           
            
           
            <Footer />

        </div>
    )
}

export default BookingPage