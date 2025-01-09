import React from 'react'
import Kien from '../components/kien/Kien'
import VuLong from '../components/vulong/VuLong'
import Duc from '../components/duc/Duc'
import Header from '../components/kien/Header'
import Footer from '../components/vulong/Footer'
import SignInX from '../components/dung/SignIn'
import CreateAccount from '../components/huy/CreateAccount/CreateAccount'

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