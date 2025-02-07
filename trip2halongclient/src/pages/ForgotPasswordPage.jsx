import React from 'react'
import Kien from '../components/header/Kien'
import VuLong from '../components/footer/VuLong'
import Duc from '../components/footer/Singgin'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import VuLongForgot from '../components/footer/VuLongForgot'

const ForgotPasswordPage = () => {
  return (
    <div className='flex flex-col w-full'>
        <Header/>
        <VuLongForgot/>
        <Footer/>

    </div>
  )
}


export default ForgotPasswordPage