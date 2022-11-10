import React from 'react';

const MainSelect = ({options, defaultValue, value, onChange}) => {
    return (
        <select
        valee={value}
        onChange={event=> onChange(event.target.value)}
        >
            <option
                disabled
                value=''>{defaultValue}</option>
            {
                options.map((option, index) =>
                    <option
                        key={index}
                        value={option.value}
                    >
                        {option.name}
                    </option>
                )
            }
        </select>
    );
};

export default MainSelect;
