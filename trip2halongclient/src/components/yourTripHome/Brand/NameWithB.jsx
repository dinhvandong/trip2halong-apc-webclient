import React from 'react'

const NameWithB = ({ name }) => {
    const nameParts = name.split("\n");
    return (
        <div>
            {nameParts.map((part, index) => (
                <div className='text-[#454849] text-2xl font-bold leading-none' key={index}>{part}</div> // Mỗi phần hiển thị trong một <div>
            ))}
        </div>
    )
}

export default NameWithB
