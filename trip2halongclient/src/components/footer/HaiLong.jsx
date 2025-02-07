import React from 'react'

const HaiLong = () => {
    const cruises = Array(6).fill({ name: "Ambassador Cruise", rating: "5.0" });

    return (
      <div className="h-auto w-[80%] ">
        <div className="flex flex-col px-16 py-5 bg-white ">
          <div className="flex items-center justify-start">
            <h1 className="text-[#197CCA] text-4xl font-semibold">Travelers'</h1>
            <h1 className="text-[#FFB700] text-4xl font-semibold ml-1">Favorite Partner</h1>
          </div>
  
          <div className="grid grid-cols-3 gap-2 mt-2">
            {cruises.map((cruise, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-5 py-4 bg-white border rounded-md shadow w-30"
              >
  
                <div className="w-10 h-10 bg-[#D9D9D9] rounded-full"></div>
  
                <div>
                  <h3 className="flex items-center gap-1 text-[15px] font-semibold">
                    {cruise.name}
                    <span className="text-[15px] text-blue-500">✔</span>
                  </h3>
                  <div className="flex items-center text-[15px]">
                    <span className="text-[#FFB700]">★★★★★</span>
                    <span className="text-gray-600">{cruise.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-end mt-3">
            <button className="bg-[#1A7CC7] px-5 py-3 text-white text-[15px] font-bold rounded-md">Explore The List →</button>
          </div>
        </div>
  
  
  
      </div>
  
    );
}

export default HaiLong
