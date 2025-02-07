import React from 'react'

const NameWithB = ({ name }) => {
    const nameParts = name.split("\n");
    return (
        <div>
            {nameParts.map((part, index) => (
                <div className='text-black text-[15px] font-bold leading-none' key={index}>{part}</div> // Mỗi phần hiển thị trong một <div>
            ))}
        </div>
    )
}

export default NameWithB
