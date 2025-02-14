import React from 'react'

const Pesletor = () => {
    return (
        <div className="w-full h-auto p-6 bg-white rounded-md">
            <p className="text-2xl font-semibold">Select Passengers</p>
            <div className="flex gap-5 mt-3">
                <label className="block">
                    <span className='ml-3 font-semibold'>Bed Type:</span>
                    <select className="w-full p-2 mt-2 font-medium border rounded">
                        <option>Double</option>
                        <option>Twin</option>
                    </select>
                </label>
                <label className="block">
                <span className='ml-3 font-semibold'> Adults(from 12)</span>
                    <select className="w-full p-2 mt-2 border rounded">
                        {[...Array(13)].map((_, i) => (
                            <option key={i} value={i}>{i}</option>
                        ))}
                    </select>
                </label>
                <label className="block">
                    <span className='ml-3 font-semibold'>Children(5 to 11)</span>
                    <select className="w-full p-2 mt-2 border rounded">
                        {[...Array(12)].map((_, i) => (
                            <option key={i} value={i}>{i}</option>
                        ))}
                    </select>
                </label>
                <label className="block">
                    <span className='ml-3 font-semibold'>infanstas(1 to 4)</span>
                    <select className="w-full p-2 mt-2 border rounded">
                        {[...Array(6)].map((_, i) => (
                            <option key={i} value={i}>{i}</option>
                        ))}
                    </select>
                </label>

            </div>
        </div>
    )
}

export default Pesletor
