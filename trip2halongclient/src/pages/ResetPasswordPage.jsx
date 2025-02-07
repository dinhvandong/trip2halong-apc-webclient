import React from 'react'
import Kien from '../components/header/Kien'
import VuLong from '../components/footer/VuLong'
import Duc from '../components/footer/Singgin'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import VuLongResetPass from '../components/footer/VuLongResetPass'

const ResetPasswordPage = () => {
  return (
    <div className='flex flex-col w-full'>
        <Header/>
        <VuLongResetPass/>
        <Footer/>

    </div>
  )
}

export default ResetPasswordPage