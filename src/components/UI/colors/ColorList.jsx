import React from 'react';
import Color from "./Color";

const ColorList = ({
                       colors = [],
                       onRemoveColor,
                   }) => {

    return (
        <div>
            {!colors.length
                ? <div>No colors listed</div>
                : colors.map(color => <Color key={color.id} {...color} onRemove={onRemoveColor}/>)
            }
        </div>
    );
};

export default ColorList;
