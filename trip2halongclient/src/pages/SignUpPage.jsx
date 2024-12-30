import React from 'react'
import Kien from '../components/kien/Kien'
import VuLong from '../components/vulong/VuLong'
import Duc from '../components/duc/Duc'
import Header from '../components/kien/Header'

const SignUpPage = () => {
  return (
    <div className='w-full flex flex-col'>
        <Header/>
        <Duc/>
        <VuLong/>

    </div>
  )
}

export default SignUpPage