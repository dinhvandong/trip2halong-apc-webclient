import React from 'react'
import Duc from '../components/duc/Duc'
import Header from '../components/kien/Header'
import Footer from '../components/vulong/Footer'
import { useParams } from 'react-router-dom'

const SignInPage = () => {


  return (
    <div className='w-full flex flex-col'>
        <Header/>
        <Duc/>
        <Footer/>

    </div>
  )
}


export default SignInPage