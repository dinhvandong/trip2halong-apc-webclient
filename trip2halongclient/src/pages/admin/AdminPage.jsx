import React from 'react'
import Dashboard from '../../components/admin/Dashboard'
import SidebarAdmin from '../../components/admin/SidebarAdmin'


const AdminPage = () => {
  return (
    <div className='bg-[#104672] h-full flex flex-row w-full'>
      <div className='w-[20%] fixed'>
        <SidebarAdmin menu="tab1"/>
      </div>
      <div className='w-full p-4 flex justify-end'>
        <Dashboard/>
      </div>
    </div>
  )
}

export default AdminPage