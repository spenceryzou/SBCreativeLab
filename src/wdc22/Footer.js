import React from 'react';
import "./Footer.css";

import airplane from './imgs/airplane-footer.svg'
import email from './imgs/email.svg'
import instagram from './imgs/instagram.svg'
import discord from './imgs/discord.svg'

const Footer = () => {
    return (
        <div className="main-footer">
            <div className='container'>
                <div className="plane">
                    <img src={airplane}></img>
                </div>
                <h1>Questions?</h1>
                <div className="row">
                    {/* Column1 */}
                    <div className='col'>
                        <img src={email}></img>
                        <a href="mailto:ucsbcreativelab@gmail.com"><p>ucsbcreativelab@gmail.com</p></a>
                    </div>
                    {/* Column2 */}
                    <div className='col'>
                        <img src={instagram}></img>
                        <a href="https://www.instagram.com/sbcreativelab/?hl=en" target='_blank'><p>@sbcreativelab</p></a>
                    </div>
                    {/* Column3 */}
                    <div className='col'>
                        <img src={discord}></img>
                        <a className='discord' href='https://discord.com/invite/fc8Rrn7VdV' target='_blank'><p>Discord Link</p></a>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Footer;