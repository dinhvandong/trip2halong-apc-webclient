import React, { useEffect, useState } from "react";
import trendingData from "../../apis/trending";

const ImageGallery = ({ currentIndex }) => {
  const [data, setData] = useState([]); // Ensure data is initialized as an empty array
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await trendingData();
        setData(result.result); // Assuming `result.result` is the array you want to display
      } catch (err) {
        setError(err.message);
      }
    };
    getData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (data.length === 0) {
    return <div>Loading...</div>; // Handle case where data is still loading
  }

  return (
    <div className="relative flex flex-row mr-3 overflow-hidden w-full h-[230px] rounded-md">
      <div
        className="flex w-[320px] h-full transition-transform duration-300"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {data.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-full mr-4 rounded-md"
            style={{ width: '100%' }}
          >
            <img
              src={item.thumbnail}
              alt={item.thumbnail}
              className="object-cover w-full h-full bg-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
