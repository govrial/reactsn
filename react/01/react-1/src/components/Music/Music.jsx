import React from 'react';
import s from './Music.module.css';

const Music = () => {
    let searchMusic = () => {
        let search = nameMusic.current.value;
        alert (search);
    }

    let nameMusic = React.createRef();

    return (
        <div>
            Music
        
        <div>
            <textarea name="" ref = {nameMusic} cols="30" rows="10"></textarea>
        </div>
        <div>
            <button onClick = {searchMusic}>searchICON</button>
        </div>
        </div>
    )
}


export default Music;