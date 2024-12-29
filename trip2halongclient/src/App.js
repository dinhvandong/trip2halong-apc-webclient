import React from 'react'
import Kien from './components/kien/Kien'
import Huy from './components/huy/Huy'
import Quan from './components/quan/Quan'
import VuLong from './components/vulong/VuLong'
import Toanbo from './components/Toanbobo/Toanbo'

const App = () => {
  return (
    <div className='flex flex-col '>

      <Kien/>
      <Huy/>
      <Quan/>
      <Toanbo/>
      <Quan/>
      <Toanbo/>

      <VuLong/>



    </div>
  )
}

export default App