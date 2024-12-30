import Grid from 'antd/es/card/Grid';
import React from 'react'
import GridWithSelect from './GridWithSelect';


const Quan = () => {



  return (
    <div className='flex mt-[100px] w-full items-center flex-col  h-auto bg-[#F4F5F5]'>

      <div className='flex flex-col w-11/12 lg:w-3/4'>

        <div className='flex justify-between w-full pt-20'>
          <div className='flex flex-col'>
            <div className='flex'>
              <p className='font-bold text-[46px] text-[#FEB723]'>Best Trips</p>
              <p className='font-bold text-[46px] text-[#0081CE] ml-2'>in Halong Bay</p>
            </div>
            <p className='font-bold text-[46px] text-[#0081CE]'>to Experience</p>
          </div>
          <button className='flex items-center px-4 py-4 bg-[#0081CE] w-[150px] h-12 mt-4 rounded-lg'>
            <span className="text-white text-[16px] font-medium">
              Explore All <span className="ml-2">-&gt;</span>
            </span>
          </button>
        </div>


        <GridWithSelect />

      </div>

    </div>
  )
}

export default Quan