import React from 'react'
import Kien from '../components/kien/Kien';
import Huy from '../components/huy/Huy';
import AllNewOne from '../components/allnew/AllNewOne';

const AllNew = () => {
  return (
    <div className='flex flex-col w-full h-auto'>
        <Kien/>
        <Huy/>
        <AllNewOne/>
    
    </div>
  )
}

export default AllNew
