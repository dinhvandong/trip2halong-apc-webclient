import React from 'react'
import Kien from '../components/kien/Kien'
import VuLong from '../components/vulong/VuLong'
import Duc from '../components/Duc'
import Header from '../components/kien/Header'
import Footer from '../components/vulong/Footer'
import VuLongForgot from '../components/vulong/VuLongForgot'

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