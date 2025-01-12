import React from 'react'
import Kien from '../components/kien/Kien';
import Huy from '../components/huy/Huy';
import AllNewOne from '../components/allnew/AllNewOne';
import Allnew2 from '../components/allnew/Allnew2';
import Allnew3 from '../components/allnew/Allnew3';
import Footer from '../components/vulong/Footer';



const AllNew = () => {
  return (
    <div className='flex flex-col w-full h-auto'>
        <Kien/>
        <Huy/>
        <AllNewOne/>
        <Allnew2/>
        <Allnew3/>
        <Footer/>
    
    </div>
  )
}

export default AllNew
