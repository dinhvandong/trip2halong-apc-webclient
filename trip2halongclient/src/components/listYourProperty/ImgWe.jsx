import React from 'react'
import hio from './json2.json';

const ImgWe = ({ currentIndex }) => {
    return (
        <div className="relative flex flex-row mr-3 overflow-hidden w-full h-[280px] rounded-md">
            <div
                className="flex w-[320px] h-full bg-white transition-transform duration-300"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                }}
            >
                {hio.map((item) => (
                    <div
                        key={item.id}
                        className="flex flex-col flex-shrink-0 w-full h-auto mr-4 bg-white rounded-md"
                        style={{ width: '100%' }}
                    >
                        <img
                            src={item.img}
                            alt={item.id}
                            className="object-cover w-full h-[60%] bg-cover rounded-md"
                        />
                        <div className='w-full h-[40%] p-2 flex flex-col rounded-md'>
                            <p className='font-bold text-md'>{item.te1}</p>
                            <p className='text-[11px] font-medium mt-2'>{item.te2}</p>

                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default ImgWe
