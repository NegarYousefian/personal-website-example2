import React from 'react'
import {Link} from 'react-router-dom'
import './Button.css'
const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];
export const Button = (
    {
        children,
        type,
        onClick,
        buttonStyle,
        buttonSize
    }
) => {
    const btnStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const btnSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    return (
        <Link to='/' className='btn-mobile'>
            <button type={type} onClick={onClick} className={`btn ${btnStyle} ${btnSize}`}>
                {children}
            </button>
        </Link>

    );
}