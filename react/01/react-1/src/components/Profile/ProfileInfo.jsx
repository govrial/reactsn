import React from 'react';
import s from './profile.module.css';
import MyPosts from './Posts/MyPosts/MyPosts';
import MyPostsContainer from './Posts/MyPosts/MyPostsContainer';
import Preloader from '../Preloader/Preloader';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }



    return (
        <div >
          { /* <div className={s.content}>
                <img src="https://avatars.mds.yandex.net/get-pdb/69339/f6e04136-ceb4-4db1-845c-bcd386d5435d/s1200?webp=false" />
    </div>*/}
            <div className={s.discroptionBlock}>
                <img src={props.profile.photos.large} />
              <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
              
            </div>


        </div>
    )
}

export default ProfileInfo;