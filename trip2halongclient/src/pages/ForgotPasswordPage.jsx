import React from 'react'
import Kien from '../components/kien/Kien'
import VuLong from '../components/vulong/VuLong'
import Duc from '../components/duc/Duc'
import Header from '../components/kien/Header'
import Footer from '../components/vulong/Footer'
import VuLongForgot from '../components/vulong/VuLongForgot'

const ForgotPasswordPage = () => {
  return (
    <div className='w-full flex flex-col'>
        <Header/>
        <VuLongForgot/>
        <Footer/>

    </div>
  )
}


export default ForgotPasswordPage