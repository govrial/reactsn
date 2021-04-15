import React from 'react';
import s from './Dialog_User.module.css';
import { NavLink } from 'react-router-dom';


const Dialog_User = (props) => {
    let userID = "/dialogs/" + props.id;
    return (
        
        <div className = {s.user}>
            <div className={s.avatar}>
                <img src="https://avatars.yandex.net/get-music-user-playlist/27701/265236767.1000.16809/m1000x1000?1498108273588&webp=false" alt=""/>
            </div>
            <div className={s.autor}>
            <NavLink to = {userID} >{props.name}</NavLink>
            </div>
        </div>
    )
}

export default Dialog_User;