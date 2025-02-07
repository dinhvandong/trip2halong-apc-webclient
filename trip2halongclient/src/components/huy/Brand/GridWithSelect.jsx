import React, { useState, useEffect } from "react";
import homehome from "../../../apis/home";
import NameWithB from "./NameWithB";
import StarRat from "./StarRat";



const GridWithSelect = ({ currentIndex }) => {
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


  // Get data for the current page
  const paginatedData = data.slice((currentPage - 1) * rows, currentPage * rows);



  return (
    <div className="bg-gray-100">
      <div className="relative flex flex-row mr-3 overflow-hidden w-full h-[350px] rounded-md">
        <div
          className="flex w-full h-full transition-transform duration-300"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {paginatedData.map((item) => (
            <div
              key={item.id}
              className="relative flex flex-col h-[340px] mx-2 w-[350px] mx-auto flex-shrink-0 shadow-xl rounded-xl"
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
    </div>
  );
};

export default GridWithSelect;
