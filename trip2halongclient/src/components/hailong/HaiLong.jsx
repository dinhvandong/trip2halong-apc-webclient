import React from 'react'

const HaiLong = () => {
  return (
    <div className='flex flex-col w-full h-screen'>
      <div className='flex items-start justify-center mt-9'>
        <h1 className='text-[25px] font-bold'>Veryfi your email address</h1>
      </div>
      <div className='flex items-start justify-center'>
        <p>We sent a verification code to </p>
        <p className='text-[#398FD4] ml-1'> yourname@example.com</p>
        <p>.</p>
      </div>
      <div className='flex items-start justify-center'>
        <p>Enter this code to continue </p>
      </div>
      <div className='flex items-start justify-center gap-4 mt-6'>
        <input className='w-12 h-12 bg-white border border-gray-300 rounded-md'></input>
        <input className='w-12 h-12 bg-white border border-gray-300 rounded-md'></input>
        <input className='w-12 h-12 bg-white border border-gray-300 rounded-md'></input>
        <input className='w-12 h-12 bg-white border border-gray-300 rounded-md'></input>
      </div>
      <div className='flex flex-col items-center justify-center mt-6'>
        <button className='bg-[#1470B4] h-[40px] w-[450px] text-white font-bold'>Veryfi Email</button>
        <button className='bg-white h-[40px] w-[450px] text-[#1470B4] font-bold border border-[#1494b4] mt-3'>Reques New Code</button>
        <p className='text-black mt-3 text-[15px]'>Email not avaliable?<span className='text-[#1494b4] ml-1 underline font-bold'>Enter Your Password </span></p>
      </div>

      <div className='flex items-start justify-center mt-9'>
        <div className='bg-slate-200 h-[0.1px] w-[450px]'></div>
      </div>

      <div className='flex flex-col items-center justify-center mt-1'>
        <p className=' text-[15px] '>By signing or creating an account,</p>
        <p className=' text-[15px]'>you agree with our<span className='ml-1 mr-1 underline'>Terms & Conditions</span>and<span className='ml-1 underline'>Private Statement</span></p>
        <p className=' text-[15px] mt-3'>All rights reserver.</p>
        <p className=' text-[15px]'>Copy right (2006-2004) - Trip2.com</p>
      </div>

    </div>
  )
}

export default HaiLong