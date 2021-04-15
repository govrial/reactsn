import React from 'react';
import s from './profile.module.css';
import MyPosts from './Posts/MyPosts/MyPosts';
import MyPostsContainer from './Posts/MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo';

const Profile = (props) => {

  
    return (
        <div>
        <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
           
            <MyPostsContainer />
            </div>
    )
}

export default Profile;