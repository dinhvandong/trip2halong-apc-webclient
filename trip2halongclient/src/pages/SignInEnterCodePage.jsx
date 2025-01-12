import React from 'react'
import Duc from '../components/duc/Duc'
import Header from '../components/kien/Header'
import Footer from '../components/vulong/Footer'
import SignInForm from '../components/dung/SignInForm'
import HaiLongEnterCode from '../components/hailong/HaiLongEnterCode'
import { useParams } from 'react-router-dom'

const SignInEnterCodePage = () => {

    const { email } = useParams();

  return (
    <div className='w-full flex flex-col'>
        <Header/>
        <HaiLongEnterCode email ={email}/>
        <Footer/>

    </div>
  )
}

export default SignInEnterCodePage