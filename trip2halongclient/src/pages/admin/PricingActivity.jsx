import React from 'react'
import SidebarAdmin from '../../components/admin/SidebarAdmin';
import PricingFull from '../../components/pricingActivity/PricingFull';

const PricingActivity = () => {
  return (
    <div className='bg-[#104672] w-full h-full flex flex-row'>
    <div className='w-[20%] fixed'>
      <SidebarAdmin menu="tab3"/>
    </div>
    <div className='flex justify-end w-full p-4'>
        <PricingFull/>
    </div>
  </div>
  )
}

export default PricingActivity
