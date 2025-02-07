import React from 'react'
import Duc from '../components/Duc'
import Header from '../components/kien/Header'
import Footer from '../components/vulong/Footer'
import SignInForm from '../components/dung/SignInForm'
import HaiLongEnterCode from '../components/hailong/HaiLongEnterCode'
import { useParams } from 'react-router-dom'

const SignInEnterCodePage = () => {

    const { email } = useParams();

  return (
    <div className='flex flex-col w-full'>
        <Header/>
        <HaiLongEnterCode email ={email}/>
        <Footer/>

    </div>
  )
}

export default SignInEnterCodePage