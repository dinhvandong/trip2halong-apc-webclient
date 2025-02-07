import React from 'react'
import { RiStarSFill, RiStarSLine } from "react-icons/ri";


const StarRat = ({ rating }) => {
    const MAX_STARS = 5;

    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            {Array(MAX_STARS)
                .fill(null)
                .map((_, index) =>
                    index < rating ? (
                        <RiStarSFill key={index} style={{ color: "gold", fontSize: "1em" }} />
                    ) : (
                        <RiStarSLine key={index} style={{ color: "gray", fontSize: "1em" }} />
                    )
                )}
        </div>
    )
}

export default StarRat
