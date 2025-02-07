import React from 'react'
import Kien from '../components/header/Kien'
import VuLong from '../components/footer/VuLong'
import Duc from '../components/footer/Singgin'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import CreateAccount from '../components/yourTripHome/CreateAccount/CreateAccount'

const SignUpPage = () => {
  return (
    <div className='w-full bg-[#F2F4F4] flex flex-col'>
        <Header/>
        <CreateAccount/>
        <Footer/>

    </div>
  )
}
export default SignUpPage