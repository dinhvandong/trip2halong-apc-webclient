import React from 'react'
import SidebarAdmin from '../../components/admin/SidebarAdmin'

const RequestPage = () => {
  return (
    <div className='bg-[#104672] h-full flex flex-row'>
      <div>
        <SidebarAdmin menu="tab5"/>
      </div>
      <div>
        {/* <Dashboard/> */}
      </div>
    </div>
  )
}

export default RequestPage