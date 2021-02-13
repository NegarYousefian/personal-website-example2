import React from 'react'
import './FooterSection.css'
function FooterSection() {
    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    };
    return (
        <>
            <div className='footer-container'>
                <button type='button' className='scroll-top' onClick={scrollTop}><i class="fa fa-arrow-up" aria-hidden="true"></i></button>
                <div className='footer-content'>
                    <p className='footer-text'>SINA KIAROSTAMI <span className='cp'>&copy; 2020</span></p>
                </div>
            </div>
        </>
    )
}

export default FooterSection
