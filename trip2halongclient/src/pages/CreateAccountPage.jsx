import React from 'react'
import Reset from '../components/header/Reset'
import Kien from '../components/header/Kien'
import VuLong from '../components/footer/VuLong'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import CreateAccount from '../components/yourTripHome/CreateAccount/CreateAccount'

const CreateAccountPage = () => {
  return (
    <div className='w-full flex flex-col'>
    <Header/>
    <CreateAccount/>
    <Footer/>

</div>  )
}


export default CreateAccountPage