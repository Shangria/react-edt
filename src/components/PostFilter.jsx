import React from 'react';
import MainInput from "./UI/input/MainInput";
import MainSelect from "./UI/select/MainSelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <>
            {/*  поиск*/}
            <MainInput
                placeholde="Search"
                value={filter.query}
                onChange={e => setFilter({...filter.query, query:e.target.value})}/>

            <MainSelect
                value={filter.sort}
                onChange={selectedSore=> setFilter({...filter, sort:selectedSore})}
                defaultValue='sort'
                options={[
                    {
                        value: "title",
                        name: "for name",
                    },
                    {
                        value: 'body',
                        name: "for description",
                    }
                ]}
            />
        </>
    );
};

export default PostFilter;
