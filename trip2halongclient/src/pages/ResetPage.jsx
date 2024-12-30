import React from 'react'
import Reset from '../components/kien/Reset'
import Kien from '../components/kien/Kien'
import VuLong from '../components/vulong/VuLong'
import Header from '../components/kien/Header'

const ResetPage = () => {
  return (
    <div className='w-full flex flex-col'>
    <Header/>
    <Reset/>
    <VuLong/>

</div>  )
}

export default ResetPage