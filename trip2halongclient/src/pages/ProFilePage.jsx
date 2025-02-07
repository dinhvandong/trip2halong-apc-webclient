import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import ProFile from '../components/yourTripHome/ProFile/ProFile'

const ProFilePage = () => {
  return (
    <div className='w-full flex flex-col'>
    <Header />
    <ProFile/>
    <Footer />
</div>
  )
}

export default ProFilePage