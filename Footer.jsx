import React from 'react';
import '../CSS/Footer.css';
import Instagram from '../assets/instagram.png';
import Linkedln from '../assets/linkedin.png';
import ses from '../assets/logo.png';

const Footer = () => {
    return (

        <div className='Footer-container'>
            
            <hr />
            <div className='footer'>
                <div className='social-link'>
                    <img src={Instagram} alt='' />
                    <img src={Linkedln} alt='' />
                </div>
                <div className='logo-f'>
                    <img src={ses} alt='' />
                </div>
            </div>
            <div className='blur blur-f-1'></div>
            <div className='blur blur-f-1'></div>
        </div>
    )
}

export default Footer;