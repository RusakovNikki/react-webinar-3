import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';

const Button = ({title, link}) => {
    return (
        <div className='Button'>
            <Link to={link}>
                <button>{title}</button>
            </Link>
        </div>
    )
}

export default Button
