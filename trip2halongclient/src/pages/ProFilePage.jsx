import React from 'react'
import Header from '../components/kien/Header'
import Footer from '../components/vulong/Footer'
import ProFile from '../components/huy/ProFile/ProFile'

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