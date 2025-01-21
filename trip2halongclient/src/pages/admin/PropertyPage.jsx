import React from 'react'
import SidebarAdmin from '../../components/admin/SidebarAdmin'

const PropertyPage = () => {
  return (
    <div className='bg-[#104672] h-full flex flex-row'>
      <div>
        <SidebarAdmin menu="tab2"/>
      </div>
      <div>
        {/* <Dashboard/> */}
      </div>
    </div>
  )
}

export default PropertyPage