import React from 'react';
import s from './header.module.css'
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return(
        <header className={s.header}>
        <img src='https://img2.freepng.ru/20180330/yrq/kisspng-ant-guessup-guess-up-emoji-sticker-ants-5abdd96795bcb1.6424683115223913996133.jpg' alt='' />
        <div className= {s.loginBlock}>
          {props.isAuth ? <div>{props.login} - <button onClick={props.logout}>LogOut</button></div>
          : <NavLink to={'/login'}>Login</NavLink>}
        </div>
      </header>
    )
}

export default Header;