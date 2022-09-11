import React from "react";
import s from './Post.module.css'

const Post = (props) => {
    return (
            <div className={s.item}>
                <img src='https://bipbap.ru/wp-content/uploads/2021/07/9-1.jpeg'/>
                {props.posts}
            </div>
    )
}

export default Post;