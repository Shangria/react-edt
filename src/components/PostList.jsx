import React from 'react';
import Post from "./Post";
import {TransitionGroup, CSSTransition} from "react-transition-group";

const PostList = ({posts, title, remove}) => {
    if(!posts.length){
        return(
            <h2 style={{textAlign: "center", color: "salmon"}}>Posts deleted</h2>
        )
    }
    return (
        <>
            <h1 style={{textAlign: "center"}}>{title}</h1>
            <TransitionGroup>
                {posts.map((postItem, index) =>
                    <CSSTransition
                        key={postItem.id}
                        timeout={500}
                        classNames="post"
                    >
                    <Post remove={remove} number={index + 1} post={postItem} />
                    </CSSTransition>
                )}
            </TransitionGroup>

        </>
    );
};

export default PostList;
