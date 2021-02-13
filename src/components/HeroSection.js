import React from 'react'
import './HeroSection.css'

function HeroSection() {
    return (
        <>
            <div className='hero-container'>
                <video src='Wave.mp4' className='hero-video' autoPlay loop muted />
                <div className='desc-container'>
                    <h1 id='name'>Hello, I am Sina</h1>
                    <h3 id='desc'>Student of Oulu University</h3>
                    <div className='icon-container'>
                        <a href="mailto:mohammd.kiarostami@student.oulu.fi"><i class="fa fa-envelope" aria-hidden="true"></i></a>
                        <a href="skype:cna14kia"><i class="fa fa-skype" aria-hidden="true"></i></a>
                        <a href="https://www.linkedin.com/in/mohammadsina-kiarostami/"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
                        <a href="https://scholar.google.com/citations?user=gN1FgTAAAAAJ&hl=en&oi=sra"><i class="ai ai-google-scholar big-icon"></i></a>
                        <a href="https://twitter.com/kiarostamisina"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                        <a href="https://www.instagram.com/atnode34/"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection
