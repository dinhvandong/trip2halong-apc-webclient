import React from 'react'
import Duc from '../components/Duc'
import Header from '../components/kien/Header'
import Footer from '../components/vulong/Footer'
import SignInForm from '../components/signFrom/SignInForm'

const SignInEmailandPassword = () => {
  return (
    <div className='flex flex-col w-full'>
        <Header/>
        <SignInForm/>
        <Footer/>

    </div>
  )
}



export default SignInEmailandPassword
//SignInForm