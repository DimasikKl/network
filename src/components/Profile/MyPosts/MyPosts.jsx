import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from 'redux-form';
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";
//import Placeholder from "autoprefixer/lib/hacks/placeholder";

const maxLength300 = maxLengthCreator(300);

const AddNewPostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={'newPostText'} validate={[required, maxLength300]} Placeholder={'Post message'}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostsFormRedux = reduxForm({form: 'ProfileAddNewPostsForm'})(AddNewPostsForm);

const MyPosts = React.memo((props) => {

    const postsElements = [...props.posts]//делаем копию массива чтоб не менять state
    .reverse()//переворачиваем последовательность постов
    .map( p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />);
    //const newPostElement = React.createRef();

    const onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostsFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
});

export default MyPosts;