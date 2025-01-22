// rafce Kien to create class Kien
import React, { useState, useEffect } from "react";
// import Header from "./Header";
import { fetchImages } from "../apis/banner_api";
import Header from "./kien/Header";

const TopBanner = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const loadImages = async () => {
      const fetchedImages = await fetchImages();
      setImages(fetchedImages);
    };

    loadImages();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        images.length > 0 ? (prevIndex + 1) % images.length : 0
      );
    }, 3000);

    return () => clearInterval(interval); 
  }, [images]);
  return (

    <div className="h-auto">
      <Header />
      <div className="relative w-full h-auto overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image) => (
            <div key={image.id} className="min-w-full h-[800px]">
              <img
                src={image.src}
                alt={image.alt}
                className="object-center w-screen h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
// anh h-800px

export default TopBanner