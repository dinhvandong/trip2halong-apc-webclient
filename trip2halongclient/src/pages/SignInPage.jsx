import React from 'react'
import Duc from '../components/Duc'
import Header from '../components/kien/Header'
import Footer from '../components/vulong/Footer'
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