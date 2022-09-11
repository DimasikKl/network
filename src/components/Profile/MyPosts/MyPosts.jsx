import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from 'redux-form';
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";

const maxLength300 = maxLengthCreator(300);

let AddNewPostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={'newPostText'} validate={[required, maxLength300]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

AddNewPostsForm = reduxForm({form: 'ProfileAddNewPostsForm'})(AddNewPostsForm);

const MyPosts = React.memo((props) => {

    const postsElements = [...props.posts]//делаем копию массива чтоб не менять state
    .reverse()//переворачиваем последовательность постов
    .map( p => <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount} />);
    //const newPostElement = React.createRef();

    const onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostsForm onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
});

export default MyPosts;