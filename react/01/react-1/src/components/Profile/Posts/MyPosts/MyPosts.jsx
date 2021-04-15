import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, onPostChangeActionCreator } from '../../../../redux/profile_reducer';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../../../../Utils/Validators/validators';
import { Textarea } from '../../../Common/FormControls/FormControls';


const maxLength10 = maxLengthCreator(10)

let MyPosts = (props) => {

    let newPost = React.createRef();

    let addPost = (values) => {
        props.addPostAction(values.newPostText)
      }

    let postsElements = props.postsData.map((post) => <Post message={post.message} name={post.name} likecounts={post.likecounts} />)
      
    return (
        <div className={s.Posts}>
            <div className={s.MyPosts}>
                <h3>My Posts</h3>
               <AddNewPostFormRedux onSubmit={addPost}/>
            </div>

            {postsElements}


        </div>
    )
}


const AddNewPostForm = (props) => {
  return  <form onSubmit={props.handleSubmit}>
    <div>
        <Field name="newPostText" component={Textarea} validate={[required, maxLength10]}  />
    </div>
    <div>
        <button>Add post</button>
    </div>
    </form>
}

const AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)

export default MyPosts;