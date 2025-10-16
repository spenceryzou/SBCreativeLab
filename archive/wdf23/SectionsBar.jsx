import React, { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import './SectionsBar.css'

import instagramImg from './imgs/instagram-icon.png'
import discordImg from './imgs/discord-icon.png'
import emailImg from './imgs/email-icon.png'

export default function SectionsBar({ isOpen, toggleMenu }) {
    return (
        <div className={'sectionsbar' + (isOpen ? ' drop' : '')}>
            <div className='sections-text'>
                <SectionButton name='Prompts' id='prompts' toggleMenu={toggleMenu} />
                <SectionButton name='Workshops' id='workshops' toggleMenu={toggleMenu} />
                <SectionButton name='Schedule' id='schedule' toggleMenu={toggleMenu} />
                <SectionButton name='Rubric' id='rubric' toggleMenu={toggleMenu} />
                <SectionButton name='Judges' id='judges' toggleMenu={toggleMenu} />
                {/*<SectionButton name='Mentors' />*/}
                <SectionButton name='Prizes' id='prizes' toggleMenu={toggleMenu} />
                <SectionButton name='FAQ' id='faq' toggleMenu={toggleMenu} />
            </div>
            <div className='socials-container'>
                <SocialButton
                    img={instagramImg}
                    link={'https://www.instagram.com/sbcreativelab/'}
                />
                <SocialButton
                    img={discordImg}
                    link={'https://discord.gg/fc8Rrn7VdV'}
                />
                <SocialButton
                    img={emailImg}
                    link={'mailto:ucsbcreativelab@gmail.com'}
                />
            </div>
        </div>
    )
}

function SectionButton({ name, id, toggleMenu }) {
    const [anchorTarget, setAnchorTarget] = useState(null);
    const isMobile = useMediaQuery({ query: `(max-width: 1300px)` });

    useEffect(() => {
        setAnchorTarget(document.getElementById(id));
    }, [id])

    const handleClick = event => {
        event.preventDefault();
        isMobile && toggleMenu(id);
        !isMobile && anchorTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    return (
        <a className='section-button-container' href={"#" + id} onClick={handleClick}>
            <div className='section-button'>
                {name}
            </div>
        </a>
    )
}

function SocialButton({img, link}) {
    const handleOnClick = () => window.open(link, '_blank', 'noreferrer');

    return (
        <img className='social-button' src={img} alt='' onClick={handleOnClick} />
    )
}