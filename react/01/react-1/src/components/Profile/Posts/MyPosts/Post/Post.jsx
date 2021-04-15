import React from 'react';
import s from './Post.module.css';

let Post = (props) => {
    return (
        <div className={s.posts}>
            <div className={s.post_header}>
                <div className={s.username}>
                    <h5><a> {props.name} </a> </h5>
                </div>
                <div className = {s.postAvatar}>
                    <img src="https://avatars.yandex.net/get-music-user-playlist/27701/265236767.1000.16809/m1000x1000?1498108273588&webp=false" />
                </div>
            </div>
            <div className={s.wall_text}>
                {props.message}
            </div>
            <div className={s.like_wrap}>
                <div className={s.like_counter}>
                    <span className={s.like}>Like {props.likecounts}</span>
                </div>
            </div>
        </div>
    )
}

export default Post;