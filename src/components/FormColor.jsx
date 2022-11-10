import React, { useState} from 'react';
import MainButton from "./UI/button/MainButton";
import {useInput} from "./hooks/useInput";

const FormColor = ({onNewColor = f => f}) => {
    const [titleProps, resetTitle] = useInput('');
    const [colorProps, resetColor] = useInput('#00000');


    const submit = e => {
        e.preventDefault();

        onNewColor(titleProps.value, colorProps.value)
        resetTitle('');
        resetColor('');
    }


    return (
        <form onSubmit={submit}>
            <input
                {...titleProps}
                type='text'
                placeholder="color title..."
                required/>
            <input
                {...colorProps}
                type='color'
                required/>
            <MainButton>Add</MainButton>
        </form>
    );
};

export default FormColor;
