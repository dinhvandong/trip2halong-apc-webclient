import React from 'react'
import Reset from '../components/kien/Reset'
import Kien from '../components/kien/Kien'
import VuLong from '../components/vulong/VuLong'
import Header from '../components/kien/Header'
import Footer from '../components/vulong/Footer'
import CreateAccount from '../components/huy/CreateAccount/CreateAccount'

const CreateAccountPage = () => {
  return (
    <div className='w-full flex flex-col'>
    <Header/>
    <CreateAccount/>
    <Footer/>

</div>  )
}


export default CreateAccountPage