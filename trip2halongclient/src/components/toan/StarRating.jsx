import React from 'react'
import { RiStarSFill, RiStarSLine } from "react-icons/ri";


const StarRating = ({ rating }) => {

    const MAX_STARS = 5;

  return (
     <div style={{ display: "flex", alignItems: "center" }}>
      {Array(MAX_STARS)
        .fill(null)
        .map((_, index) =>
          index < rating ? (
            <RiStarSFill key={index} style={{ color: "gold", fontSize: "1.5em" }} />
          ) : (
            <RiStarSLine key={index} style={{ color: "gray", fontSize: "1.5em" }} />
          )
        )}
    </div>
  )
}

export default StarRating
