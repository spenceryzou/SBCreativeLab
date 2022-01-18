import React from 'react';
import "./Footer.css";

import airplane from './imgs/airplane-footer.svg'
import email from './imgs/email.svg'
import instagram from './imgs/instagram.svg'
import discord from './imgs/discord.svg'

const Footer = () => {
    return (
        <div className="main-footer">
            <div className='footer-mobile'>
                <a href="mailto:ucsbcreativelab@gmail.com">
                <img className='icon' src={email}></img>
                </a>
                <a href="https://www.instagram.com/sbcreativelab/?hl=en">
                <img className='icon' src={instagram}></img>
                </a>
                <a href='https://discord.com/invite/fc8Rrn7VdV'>
                <img className='icon' src={discord}></img>
                </a>
            </div>
            <div className='container'>
                <div className="plane">
                    <img className="img" src={airplane}></img>
                </div>
                <h1>Questions?</h1>
                <div className="row">
                    {/* Column1 */}
                    <div className='col'>
                        <img className='img' src={email}></img>
                        <a className="link" href="mailto:ucsbcreativelab@gmail.com"><p>ucsbcreativelab@gmail.com</p></a>
                    </div>
                    {/* Column2 */}
                    <div className='col'>
                        <img className='img' src={instagram}></img>
                        <a className="link" href="https://www.instagram.com/sbcreativelab/?hl=en" target='_blank'><p>@sbcreativelab</p></a>
                    </div>
                    {/* Column3 */}
                    <div className='col'>
                        <img className='img' src={discord}></img>
                        <a className='discord' href='https://discord.com/invite/fc8Rrn7VdV' target='_blank'><p>Discord Link</p></a>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Footer;