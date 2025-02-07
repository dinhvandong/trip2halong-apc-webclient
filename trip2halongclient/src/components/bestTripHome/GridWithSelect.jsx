import React, { useState, useEffect } from "react";
import homehome from "../../apis/home";
import NameWithB from "./NameWithB";
import StarRat from "./StarRat";



const GridWithSelect = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [rows] = useState(4); // Default rows per page
  const [currentPage, setCurrentPage] = useState(1);
  const [direction, setDirection] = useState(""); // Track slide direction ("left" or "right")
  const [isSliding, setIsSliding] = useState(false); // Manage sliding animation

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await homehome();
        setData(result.result);
      } catch (err) {
        setError(err.message);
      }
    };

    getData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const totalPages = Math.ceil(data.length / rows);

  // Get data for the current page
  const paginatedData = data.slice((currentPage - 1) * rows, currentPage * rows);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      const slideDirection = page > currentPage ? "right" : "left";
      setDirection(slideDirection);
      setIsSliding(true); // Start sliding

      setTimeout(() => {
        setCurrentPage(page); // Update the page
        setIsSliding(false); // Reset sliding after animation
      }, 300); // Duration of the sliding animation
    }
  };

  
  return (
    <div className="bg-gray-100 ">
      {/* Grid Container with Slide Effect */}
      <div
        className={`relative overflow-hidden`}
      >
        <div
          className={`flex gap-6 transition-transform duration-300 transform ${isSliding
              ? direction === "right"
                ? "translate-x-full"
                : "-translate-x-full"
              : "translate-x-0"
            }`}
        >
          {paginatedData.map((item) => (
            <div
              key={item.id}
              className="relative flex flex-col h-[340px] w-[350px] mx-auto mt-6 shadow-xl rounded-xl"
            >
              <div className="h-[55%] w-full relative">
                <img
                  src={item.thumbnail}
                  alt={item.thumbnail}
                  className="object-cover w-full h-full"
                />
                <div className="flex font-light absolute top-3 left-3 bg-[#157DC8] text-white text-sm px-4 py-2 rounded-3xl">
                  From<div className="ml-1 font-medium">USD 180</div>
                </div>
              </div>
              <div className="flex mt-3 ml-5">
                <StarRat rating={Math.round(item.star)} />
                <div className="flex justify-center items-center w-6 h-3 py-1 bg-[#FDB007] ml-1">
                  <p className="font-medium text-white text-[8px]">4.5/s</p>
                </div>
              </div>

              {/* Title and Subtitle */}
              <div className="flex ml-5">
                <NameWithB name={item.name} />
              </div>
              <p className="text-[12px] text-gray-500 ml-5">{item.description}</p>
            </div>
          ))}
        </div>
      </div>


      {/* Pagination Controls */}
      <div className="flex items-center justify-center mt-6">
        {/* Left Arrow */}
        <button
          className="px-3 py-1 text-sm bg-gray-300 hover:bg-gray-400 rounded-l-md"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &lt;
        </button>

        {/* Page Numbers */}
        <div className="flex px-4 space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`px-3 py-1 text-sm rounded-md ${currentPage === index + 1
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
