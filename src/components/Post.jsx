import React from 'react';
import MainButton from "./UI/button/MainButton";

const Post = (props) => {
    return (
        <div className='post'>
            <div className='post__content'>
                <strong> {props.post.title} {props.number}</strong>
                <p>{props.post.body}</p>
            </div>
            <div className='post__btn'>
                <MainButton onClick={() => props.remove(props.post)}>Remove</MainButton>
            </div>
        </div>
    );
};


export default Post;
