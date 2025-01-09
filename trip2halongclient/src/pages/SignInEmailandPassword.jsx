import React from 'react'
import Duc from '../components/duc/Duc'
import Header from '../components/kien/Header'
import Footer from '../components/vulong/Footer'
import SignInForm from '../components/dung/SignInForm'

const SignInEmailandPassword = () => {
  return (
    <div className='w-full flex flex-col'>
        <Header/>
        <SignInForm/>
        <Footer/>

    </div>
  )
}



export default SignInEmailandPassword
//SignInForm