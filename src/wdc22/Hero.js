import React from 'react'
import './Hero.css'
import hero_img from './imgs/hero_img.svg'

export default function Hero() {
    return (
        <div className='hero'>
            <img className='hero-img' src={hero_img} alt='winter 2021 design challenge'></img>
        </div>
    )
}