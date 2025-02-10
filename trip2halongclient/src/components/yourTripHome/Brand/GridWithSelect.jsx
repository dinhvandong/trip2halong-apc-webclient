import React, { useState, useEffect } from "react";
import homehome from "../../../apis/home";
import NameWithB from "./NameWithB";
import StarRat from "./StarRat";
import { Star } from "lucide-react";



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
    <div className="relative overflow-hidden w-full">
      <div className="relative flex flex-row mr-3 w-full h-[390px] min-w-0 rounded-md">
        <div
          className="flex transition-transform duration-300"
          style={{
            width: `${paginatedData.length * 380}px`,
            transform: `translateX(-${currentIndex * 500}px)`,
          }}
        >
          {paginatedData.map((item) => (
            <div
              key={item.id}
              className="relative flex flex-col h-[380px] mx-2 w-[380px] flex-shrink-0 shadow-md rounded-lg"
            >
              <div className="h-[58%] w-full relative">
                <img
                  src={item.thumbnail}
                  alt={item.thumbnail}
                  className="object-cover w-full h-full rounded-t-lg"
                />
                <div className="flex font-light absolute top-3 left-3 bg-[#157DC8] text-white text-sm px-4 py-2">
                  From<div className="ml-1 font-medium">USD 180</div>
                </div>
              </div>
              <div className="ml-5">
                <div className="flex items-center text-yellow-500 mt-2">
                  <Star size={13} fill="currentColor" />
                  <Star size={13} fill="currentColor" />
                  <Star size={13} fill="currentColor" />
                  <Star size={13} fill="currentColor" />
                  <Star size={13} fill="currentColor" />
                  <span className="ml-1 text-xs font-semibold bg-yellow-500 text-white px-1">5.0</span>
                </div>
              </div>
  
              <div className="ml-5 my-1">
                <NameWithB name={item.name} />
              </div>
              <p className="text-xs text-gray-500 mx-5">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
};

export default GridWithSelect;
