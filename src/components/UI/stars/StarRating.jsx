import React, {useState} from 'react';
import {FaStar} from "react-icons/fa";
import cl from "./StarRating.module.css"

const StarRating = ({totalStars = 5, style={}}) => {
    //состояние оценок
    const [selectedStars, setSelectedStars] = useState(0);

    const Star = ({selected = false, onSelect = f => console.log(f)}) => (

        <FaStar
            onClick={onSelect}
            color={selected ? 'red' : 'grey'}
        />
    )

    const createArray = function (length) {
        return [...Array(length)]
    }

    return (
        <div className={cl.StarRating} style={{padding:'10px', marginBottom:'20px',  ...style}}>
            {
                createArray(totalStars).map((n, i) => (
                        <Star
                            selected={selectedStars > i}
                            key={i}
                            onSelect={() => setSelectedStars(i + 1)}
                        />
                    )
                )
            }
            <p>
                {selectedStars} of {totalStars}
            </p>
        </div>
    );
};

export default StarRating;
