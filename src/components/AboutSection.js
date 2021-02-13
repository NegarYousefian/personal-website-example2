import React from 'react'
import './AboutSection.css'
function AboutSection() {
    return (
        <>
            <div id='abt' className='about-container'>
                <div className='img-container'>
                    <img src='/images/profile-img.jpg' />
                </div>
                <div className='about-text-container'>
                    <h1 className='about-header hdr'>About</h1>
                    <p className='about-text'>My name is Mohammad Sina Kiarostami.
                        I obtained my Bachelor's degree in Computer Engineering -
                        Software from K. N. Toosi University of Technology in Iran. Simultaneously,
                        I was a research assistant at the Institute For Research In Fundamental Sciences (IPM)
                        and published several papers about Computer Games and AI (see the publication section). 
                        I am currently a graduate student in the Computer Science and Engineering program proudly
                        at the University of Oulu in Finland. I am also the Chief Officer Executer (CEO) and Co-Founder
                        of Madness Game Studio, Madball's creator (Best Game of Summer 2018 in Iran), and Orbis.
                        Finally, I was an official reviewer of the 14th ACM Conference on Recommender Systems
                        (RecSys 2020) and the 8th International Conference on Human-Agent Interaction (HAI 2020).</p>
                </div>
            </div>
        </>
    )
}

export default AboutSection
