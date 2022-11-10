import React from 'react';
import StarRating from "../stars/StarRating";
import {FaTrash} from "react-icons/fa";

const Color = ({
                   id,
                   title,
                   color,
                   rating,
                   onRemove = f => f,
               }) => {
    return (
        <div>
            <h2>{title}</h2>
            <button onClick={() => onRemove(id)}>
                <FaTrash/>
            </button>
            <div style={{height: 50, background: color}}></div>
            <StarRating selectedStars={rating}/>
        </div>
    );
};

export default Color;
