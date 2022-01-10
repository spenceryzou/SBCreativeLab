import React from 'react'
import './About.css'
import './index.css'
import tree from './imgs/tree.svg'
import cloud from './imgs/cloud.svg'
import rainbow from './imgs/rainbow.svg'
import leaf from './imgs/leaf.svg'
import waterDroplets from './imgs/water-droplets.svg'

export default function About() {
    return (
        <div className='abt-c'>
            <div className='about'>
                <img className='tree' src={tree}></img>
                <img className='about-cloud' src={cloud}></img>
                <img className='rainbow' src={rainbow}></img>
                <div className='about-info'>
                    <h1>About</h1>
                    <p>Welcome to our annual Winter Design Challenge! We want to provide SB Creative Lab members the chance to exercise their creative side, and explore graphic design!</p>
                </div>
            </div>
            <div className='about-prompt'>
                <div className='about-prompt-c'>
                    <div className='prompt-dec'>
                        <img className='prompt-dec-img' src={leaf}></img>
                    </div>
                    <div className='prompt-container'>
                        <div>
                            <span className='prompt-bold'>This year's prompt: </span>
                            <span className='prompt'>designing stickers!</span>
                        </div>
                    </div>
                    <div>
                        <p className='prompt-light'>Your challenge is to design a sticker that combines the beauty of graphic design and is a visual representation of UCSB culture.</p>
                    </div>
                </div>
                <img className='water-drops' src={waterDroplets}></img>
            </div>
        </div>

    )
}