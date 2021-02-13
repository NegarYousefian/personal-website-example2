import React, {useState} from 'react'
import ReactDom from 'react-dom'
import { Button } from './Button'
import './Works.css'
import WorkPortal from './WorkPortal'
function Works() {
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    return (
        <>
            <div className='works-container'>
                <div className='work-sec research'>
                    <i className="fa fa-search-plus work-icon" aria-hidden="true"></i>
                    <h2 className='hdr work-hdr'>Research</h2>
                    <p className='work-text'></p>
                    <Button buttonStyle='btn--outline' buttonSize='btn--large' onClick={() => setIsOpen1(true)}>More</Button>
                    <WorkPortal>
                        {isOpen1 && 
                        <div className='research-background'>
                            <div className='research-container'>
                                <i className='fa fa-times' onClick={() => setIsOpen1(false)}></i>
                                <h1 className='research-header hdr'>Research</h1>
                                <p className='research-text'>
                                    My research interests are mainly Artificial Intelligence, 
                                    Computer Games, and Robotics. Furthermore and in detail, Multi-agent Systems, 
                                    Recommender Systems, and Algorithm Design are appealing to me.
                                            
                                </p>
                            </div>
                        </div>}
                    </WorkPortal>
                </div>
                <div className='work-sec pubs'>
                    <i className="fa fa-book work-icon" aria-hidden="true"></i>
                    <h2 className='hdr work-hdr'>Publication</h2>
                    <p className='work-text'></p>
                    <Button buttonStyle='btn--outline' buttonSize='btn--large' onClick={() => setIsOpen2(true)}>More</Button>
                    <WorkPortal>
                        {isOpen2 && 
                        <div className='research-background'>
                            <div className='research-container'>
                                <i className='fa fa-times' onClick={() => setIsOpen2(false)}></i>
                                <h1 className='research-header hdr'>Publication</h1>
                                <p className='research-text'>
                                <ul className='work-list'>
                                        <li>Mohammad Sina Kiarostami, Mohammadreza Daneshvaramoli, Saleh Khalaj Monfared,
                                            Dara Rahmati and Saeid Gorgin<br />
                                            <b>”Multi-Agent non-Overlapping Pathfinding with Monte-Carlo Tree Search”</b><br />
                                            Paper has been Accepted and Published at IEEE Conference on Games (CoG 2019), June 2019
                                        </li>
                                        <li>Mohammadreza Daneshvaramoli, Mohammad Sina Kiarostami, Saleh Khalaj Monfared,
                                            Helia Karisani, Keivan Dehghannayeri, Dara Rahmati and Saeid Gorgin<br />
                                            <b>”Decentralized Communication-less Multi-Agent Task Assignment with Cooperative
                                            Monte-Carlo Tree Search”,</b><br />
                                            Paper has been Accepted and Published at IEEE The 6th International Conference on
                                            Control, Automation and Robotics (ICCAR 2020), March 2020
                                        </li>
                                        <li>Saleh Khalaj Monfared, Omid Hajihassani, Soroush Meghdadi, Mohammad Sina Kiarostami,
                                            Dara Rahmati, Saeid Gorgin<br />
                                            <b>”High-performance Secure Pseudo-random Number Generation via Bitslicing”,</b><br />
                                            Paper has been Accepted and Published at The 49th ICPP 2020, August 2020
                                        </li>
                                        <li>Mohammad Sina Karvandi, Saleh Khalaj Monfared, Mohammad Sina Kiarostami,
                                            Dara Rahmati, Saeid Gorgin<br />
                                            <b>”Way Around UMIP and Descriptor-Table Exiting via TSX-based Side-Channel Attack”,</b><br />
                                            Paper has been published on arXiv, May 2020
                                        </li>
                                        <li>Mohammad Sina Kiarostami, Mohammadreza Daneshvaramoli, Saleh Khalaj Monfared,
                                            Helia Karisani, Hamed Khashehchi, Dara Rahmati, Saeid Gorgin<br />
                                            <b>”On Using Monte-Carlo Tree Search for Solving Constraint-Based Puzzles”,</b><br />
                                            Paper in Preparation for Journal of Artificial Intelligence Research (JAIR)
                                        </li>
                                        <li>Mohammad Sina Kiarostami, Saleh Khalaj Monfared, Mohammadreza Daneshvaramoli,
                                            Helia Karisani, Dara Rahmati, Saeid Gorgin<br />
                                            <b>"Study on Multi-Agent non-Overlapping Pathfinding”, </b><br />
                                            Paper in Preparation for IEEE Transactions on Games (ToG)
                                        </li>
                                        <li>Mohammad Sina Kiarostami, Ali Oliayi, Mohammadreza Daneshvaramoli,
                                            Saleh Khalaj Monfared, Negar Yousefian, Dara Rahmati, Saeid Gorgin<br />
                                            <b>”Unlucky Explorer: A Complete non-Overlapping Map Exploration with Monte-Carlo</b><br />
                                            Tree Search”
                                            Paper in Preparation for IEEE Transactions on Games (ToG)
                                        </li>
                                    </ul>
                                </p>
                            </div>
                        </div>}
                    </WorkPortal>
                </div>
                <div className='work-sec links'>
                    <i class="fa fa-link work-icon" aria-hidden="true"></i>
                    <h2 className='hdr work-hdr'>Useful Links</h2>
                    <p className='work-text'></p>
                    <Button buttonStyle='btn--outline' buttonSize='btn--large' onClick={() => setIsOpen3(true)}>More</Button>
                    <WorkPortal>
                        {isOpen3 && 
                        <div className='research-background'>
                            <div className='research-container'>
                                <i className='fa fa-times' onClick={() => setIsOpen3(false)}></i>
                                <h1 className='research-header hdr'>Useful Links</h1>
                                <p className='research-text'>
                                    <a href='https://www.oulu.fi/university/'>www.oulu.fi</a>
                                    <a href='https://madnesstudio.itch.io/'>madnesstudio.itch.io</a>
                                    <a href='https://hpc.ipm.ac.ir/'>hpc.ipm.ac.ir</a>
                                </p>
                            </div>
                        </div>}
                    </WorkPortal>
    
                </div>

            </div>
        </>
    )
}

export default Works
