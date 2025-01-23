import React from 'react'
import SidebarAdmin from '../../components/admin/SidebarAdmin'
import YourProperty from '../../components/admin/YourProperty/YourProperty'

const PropertyPage = () => {
  return (
    <div className='bg-[#104672] h-full flex flex-row'>
      <div className='w-[20%] fixed'>
        <SidebarAdmin menu="tab2"/>
      </div>
      <div className='w-full p-4 flex justify-end'>
            <YourProperty/>
      </div>
    </div>
  )
}

export default PropertyPage