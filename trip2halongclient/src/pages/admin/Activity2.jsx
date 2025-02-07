import React from 'react'
import SidebarAdmin from '../../components/admin/SidebarAdmin';
import Statac2 from '../../components/Statac2';

const Activity2 = () => {
  return (
    <div className='bg-[#104672] w-full h-full flex flex-row'>
    <div className='w-[20%] fixed'>
      <SidebarAdmin menu="tab3"/>
    </div>
    <div className='flex justify-end w-full p-4'>
      <Statac2/>  
    </div>
  </div>
  )
}

export default Activity2
