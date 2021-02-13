import React, {useState} from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import { Button } from './Button'
import { buildQueries } from '@testing-library/react';
function Navbar() {
    
    const [button, setButton] = useState(true);
    const showButton = () => {
        if(window.innerWidth < 960){
            setButton(false);
        }
        else{
            setButton(true);
        }
    }
    window.addEventListener('resize', showButton);
    window.addEventListener('load', showButton);
    const [mode, setMode] = useState(true);
    const lightMode = () => {
        let e = document.getElementsByTagName('body')[0];
        e.style.backgroundColor = '#fff';
        e.style.color = '#242424';
        let b1 = document.getElementsByClassName('about-container')[0];
        b1.style.backgroundColor='#fff'
        let b2 = document.getElementsByClassName('works-container')[0];
        b2.style.backgroundColor='#fff'
        setMode(true);
    }

    const nightMode = () => {
        let e = document.getElementsByTagName('body')[0];
        e.style.backgroundColor = '#242424';
        e.style.color = '#eee';
        let b1 = document.getElementsByClassName('about-container')[0];
        b1.style.backgroundColor='#262626'
        let b2 = document.getElementsByClassName('works-container')[0];
        b2.style.backgroundColor='#262626'     
        setMode(false);
    }
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
    }
    const closeMobileMenu = () => {
        setClick(false);
    }
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <div className='navbar-logo'>SINA KIAROSTAMI</div>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fa fa-times' : 'fa fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item' onClick={closeMobileMenu}>
                            <a href='#abt' className='nav-links'>
                                About
                            </a>
                        </li>
                        {button && <li className='nav-item'>
                            {mode ? <Button buttonStyle='btn--outline' onClick={nightMode}><i className="fa fa-moon-o" aria-hidden="true"></i></Button>
                             : <Button buttonStyle='btn--outline' onClick={lightMode}><i className="fa fa-sun-o" aria-hidden="true"></i></Button>}
                        </li>}
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
