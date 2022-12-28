import React from "react";
import s from './Post.module.css'

type PropsType = {
    message: string
    likesCount: number
}

const Post: React.FC<PropsType> = (props) => {
    return (
            <div className={s.item}>
                <img src='https://bipbap.ru/wp-content/uploads/2021/07/9-1.jpeg'/>
                {props.message}
                <div>
                    <span>like</span> { props.likesCount}
                </div>
            </div>
    )
}

export default Post;