import React from 'react'
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Star = ({star}) => {
    const ratingStar = Array.from({length:5}, (elem, index) => {
        let number = index + 0.5;
        return (
            <span key={index}>
                {star >= index+1 ? (
                    <FaStar size={18} color='orange'/>
                ) : star >= number? (
                    <FaStarHalfAlt size={18} color='orange'/>
                ) : (
                    <AiOutlineStar size={18} color='orange'/>
                )}

            </span>
        )
    })
  return (
    <span>{ratingStar}</span>
  )
}

export default Star