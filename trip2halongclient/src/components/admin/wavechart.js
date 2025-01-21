import React from 'react'

const WaveChart = () => {
    return (
        <div className="flex justify-center items-center h-full bg-white">
          <svg width="400" height="200" viewBox="0 0 600 200" className="bg-white">
            <path
              d="M0 100 C 150 0, 150 200, 300 100 S 450 0, 600 100"
              fill="none"
              stroke="#00BFFF"
              strokeWidth="3"
            />
          </svg>
        </div>
      );
    };

export default WaveChart