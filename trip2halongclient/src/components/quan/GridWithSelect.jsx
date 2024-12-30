import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

const GridWithSelect = () => {
    const [data, setData] = useState([]);
    const [rows] = useState(3); // Default rows per page
    const [currentPage, setCurrentPage] = useState(1);
  
    useEffect(() => {
      // Fetch data from the JSON file
      fetch("/travel.json")
        .then((response) => response.json())
        .then((json) => setData(json));
    }, []);
  
    const totalPages = Math.ceil(data.length / rows);
  
    // Get data for the current page
    const paginatedData = data.slice((currentPage - 1) * rows, currentPage * rows);
  
  
    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
          setCurrentPage(page);
        }
      };
  

  return (
    <div className="p-6 bg-gray-100">
       

      {/* Grid Container */}
      <div className="grid grid-cols-11 gap-[30%]">
      {paginatedData.map((item) => (
          <div
            key={item.id}
            className="relative flex flex-col h-[340px] w-[350px]  mt-6 shadow-xl rounded-xl"
          >
             <div className="h-[55%] w-full relative">
               <img
                src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR5Jvtj9EuAkxb60gxgDT0mhlH4WZ5iu9mrpVb3BM8_ck9yh1cx"
                alt="halong"
                className="h-full w-full object-cover rounded-xl"
               />
               <div className="flex font-light absolute top-3 left-3  bg-[#157DC8] text-white text-sm px-4 py-2 rounded-3xl">
                  From<div className='font-medium ml-1'>USD 180</div> 
               </div>
      
             </div>
             <div className='flex ml-5 mt-3'>
                      <FaStar className='w-[10px] h-[10px] text-[#FDB007] '/>
                      <FaStar className='w-[10px] h-[10px] text-[#FDB007] ml-[3px]'/>
                      <FaStar className='w-[10px] h-[10px] text-[#FDB007] ml-[3px]'/>
                      <FaStar className='w-[10px] h-[10px] text-[#FDB007] ml-[3px]'/>
                      <FaStar className='w-[10px] h-[10px] text-[#FDB007] ml-[3px]'/>
                      <div className='flex justify-center items-center w-6 h-3 py-1 bg-[#FDB007] ml-1'>
                        <p className='font-medium text-white text-[8px] '>4,5/s</p>
                      </div>
            </div>

            {/* Title and Subtitle */}
            <div className='flex ml-5 '>
              <p className='font-bold  text-[21px]'>{item.title}<p className='font-bold  text-[21px] -mt-2'>{item.subtitle}</p></p>
            </div>
            <div className='flex flex-col ml-5 leading-[1.2]'>
              <p className='font-normal text-[13.5px] font-sans text-[#A5A9AA]'>Figma ipsum component variant main layer. Move</p>
              <p className='font-normal text-[13.5px] font-sans text-[#A5A9AA]'>boolean vertical duplicate layer bullet. Prototype</p>
              <p className='font-normal text-[13.5px] font-sans text-[#A5A9AA]'>align distribute bold ressizing.</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-6 items-center">
        {/* Left Arrow */}
        <button
          className="px-3 py-1 text-sm bg-gray-300 hover:bg-gray-400 rounded-l-md"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &lt;
        </button>

        {/* Page Numbers */}
        <div className="flex space-x-2 px-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`px-3 py-1 text-sm rounded-md ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          className="px-3 py-1 text-sm bg-gray-300 hover:bg-gray-400 rounded-r-md"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </div>

    </div>
  );
};

export default GridWithSelect;
