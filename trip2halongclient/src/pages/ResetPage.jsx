import React from 'react'
import Reset from '../components/kien/Reset'
import Kien from '../components/kien/Kien'
import VuLong from '../components/vulong/VuLong'
import Header from '../components/kien/Header'
import Footer from '../components/vulong/Footer'

const ResetPage = () => {
  return (
    <div className='w-full flex flex-col'>
    <Header/>
    <Reset/>
    <Footer/>

</div>  )
}

export default ResetPage