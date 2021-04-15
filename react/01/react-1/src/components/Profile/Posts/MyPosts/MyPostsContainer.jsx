import React from 'react';
import Post from './Post/Post';
import { addPostActionCreator, onPostChangeActionCreator } from '../../../../redux/profile_reducer';
import MyPosts from './MyPosts'
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        
        addPostAction: (newPostText) => {
            dispatch(addPostActionCreator(newPostText))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);
export default MyPostsContainer;