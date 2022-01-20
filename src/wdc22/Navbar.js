import React from 'react'
import './Navbar.css'
import logo from './imgs/logo_small.png'

export default function Navbar() {
    return (
        <div className='navbar'>
            <img className='logo' src={logo} alt="sbcl logo"/>
            <div className='navbar-links'>
                <a href='#home'>Home</a>
                <a href='#rubric'>Rubric</a>
                <a href='#calendar'>Calendar</a>
                <a href='#faq'>FAQ</a>
            </div>
        </div>


    )
}