import React from "react";

import s from "./Post.module.css"

const Post = (props:any) => {

    return (
        <div className={s.item}>
            <img src="https://i.playground.ru/p/K35Qx7HR72feWUIWJWQWKQ.jpeg" alt=""/>
            {props.message}
            <div>
            <span>like</span> {props.likesCount}
            </div>
            <input value="5"/>
            <input value="6"/>
        </div>


    );
}


export default Post;