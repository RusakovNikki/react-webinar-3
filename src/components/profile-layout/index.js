import React from 'react';
import './style.css';

const ProfileLayout = ({name, number, mail}) => {
    return (
        <div className='ProfileLayout'>
            <h2>Профиль</h2>

            <p>Имя: <b>{name}</b></p>
            <p>Телефон: <b>{number}</b></p>
            <p>email: <b>{mail}</b></p>
        </div>
    )
}

export default ProfileLayout
