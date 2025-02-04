import React from 'react'
import Longg1 from './Longg1'
import Longg2 from './Longg2'
import Longg3 from './Longg3'
import Longg4 from './Longg4'
import Header from '../kien/Header';
import Kien from '../kien/Kien';
import Footer from '../vulong/Footer';

const Longg = () => {
    return (
        <div className='flex flex-col w-full h-auto'>
            <Header/>
            <Kien/>
            <Longg1/>
            <Longg2/>
            <Longg3/>
            <Longg4/>
            <Footer/>
        </div>
    )
}

export default Longg
