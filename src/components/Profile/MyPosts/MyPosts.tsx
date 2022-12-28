import React from "react";
import s from '../MyPosts/MyPosts.module.css'
import Post from "./Post/Post";
//import Placeholder from "autoprefixer/lib/hacks/placeholder";
import AddPostForm, { AddPostFormValuesType } from './AddPostForm/AddPostForm';
import { PostType } from '../../../types/types';

export type MapPropsType = {
    posts: Array<PostType>
}

export type DispatchPropsType = {
    addPost: (newPostText: string) => void
}

const MyPosts: React.FC<MapPropsType & DispatchPropsType> = props => {
    const postsElements = [...props.posts]//делаем копию массива чтоб не менять state
    .reverse()//переворачиваем последовательность постов
    .map( p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />);

    const onAddPost = (values: AddPostFormValuesType) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddPostForm onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

const MyPostsMemorized = React.memo(MyPosts);

export default MyPostsMemorized;