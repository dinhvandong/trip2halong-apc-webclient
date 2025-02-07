import React from 'react'
import Duc from '../components/footer/Singgin'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { useParams } from 'react-router-dom'

const SignInPage = () => {


  return (
    <div className='flex flex-col w-full'>
        <Header/>
        <Duc/>
        <Footer/>

    </div>
  )
}


export default SignInPage