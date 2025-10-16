import React from 'react'
import './Topbar.css'

import menuButton from './imgs/menu-button.svg'

export default function Topbar({ toggleMenu }) {
    return (
        <div className='topbar'>
            <div className='noise-background'></div>
            <a href='https://sbcreativelab.com'>
                <div className='corner-logo'></div>
            </a>
            <div className='logo-separator'></div>
            <div className='quarter-text'>Winter 2023</div>
            <div className='quarter-separator'></div>
            <div className='tagline-text'>Unleash your creativity.</div>
            <img className='menu-button' src={menuButton} alt='' onClick={toggleMenu} />
        </div>
    )
}