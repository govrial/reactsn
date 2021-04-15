import React from 'react'
import s from './users.module.css'
import userPhoto from '../../assets/images/user.jpg'
import { NavLink } from 'react-router-dom';
import * as Axios from 'axios';
import { userAPI } from '../../api/Api';


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (<div>
        <div className={s.selectPage}>
            {pages.map(p => {
                return <span className={props.currentPage === p && s.selectedPage} onClick={() => { props.onPageChanged(p) }}>{p}</span>
            })}

        </div>
        {

            props.users.map(u => <div key={u.id}>
                <div className={s.avatar}>
                    <NavLink to={'/profile/' + u.id}>
                        < img src={u.photos.small != null ? u.photos.small : userPhoto} alt="" />
                    </NavLink>
                </div>
                <div className={s.followBTN}>
                    {
                        u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            

                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.follow(u.id)


                            }}>Follow</button>
                    }
                </div>
                <span>
                    <div className={s.userName}>{u.name}</div>
                    <div className={s.userStatus}>{u.status}</div>
                </span>
                <span>
                    <div>{"u.location.city"}</div>
                    <div>{"u.location.country"}</div>
                </span>
            </div>
            )
        }
    </div >
    )
}

export default Users;