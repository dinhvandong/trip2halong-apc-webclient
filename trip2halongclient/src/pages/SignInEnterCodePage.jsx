import React from 'react'
import Duc from '../components/footer/Singgin'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import SignInForm from '../components/signFrom/SignInForm'
import HaiLongEnterCode from '../components/signInCreate/HaiLongEnterCode'
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