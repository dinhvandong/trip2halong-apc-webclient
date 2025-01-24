import React from 'react'
import SidebarAdmin from '../../components/admin/SidebarAdmin'
import FullAll from '../../components/createNewActivity/FullAll'

const ActivityPage = () => {
  return (
    <div className='bg-[#104672] w-full h-full flex flex-row'>
      <div className='w-[20%] fixed'>
        <SidebarAdmin menu="tab3"/>
      </div>
      <div className='flex justify-end w-full p-4'>
        <FullAll/>
      </div>
    </div>
  )
}

export default ActivityPage