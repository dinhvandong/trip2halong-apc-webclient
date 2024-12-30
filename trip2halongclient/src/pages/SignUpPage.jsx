import React from 'react'
import Kien from '../components/kien/Kien'
import VuLong from '../components/vulong/VuLong'
import Duc from '../components/duc/Duc'
import Header from '../components/kien/Header'
import Footer from '../components/vulong/Footer'

const SignUpPage = () => {
  return (
    <div className='w-full flex flex-col'>
        <Header/>
        <Duc/>
        <Footer/>

    </div>
  )
}

export default SignUpPage