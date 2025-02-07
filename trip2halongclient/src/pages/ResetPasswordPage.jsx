import React from 'react'
import Kien from '../components/kien/Kien'
import VuLong from '../components/vulong/VuLong'
import Duc from '../components/Duc'
import Header from '../components/kien/Header'
import Footer from '../components/vulong/Footer'
import VuLongResetPass from '../components/vulong/VuLongResetPass'

const ResetPasswordPage = () => {
  return (
    <div className='w-full flex flex-col'>
        <Header/>
        <VuLongResetPass/>
        <Footer/>

    </div>
  )
}

export default ResetPasswordPage