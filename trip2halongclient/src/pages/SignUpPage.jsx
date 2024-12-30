import React from 'react'
import Kien from '../components/kien/Kien'
import VuLong from '../components/vulong/VuLong'
import Duc from '../components/duc/Duc'

const SignUpPage = () => {
  return (
    <div className='w-full flex flex-col'>
        <Kien/>
        <Duc/>
        <VuLong/>

    </div>
  )
}

export default SignUpPage