import React from 'react'
import Duc from '../components/footer/Singgin'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
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