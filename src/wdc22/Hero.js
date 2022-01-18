import React from 'react'
import './Hero.css'
import hero_img from './imgs/hero_img.svg'
import hero_img_mobile from './imgs/hero_img_mobile.svg'

export default function Hero() {
    return (
        <div className='hero'>
            <img className='hero-img-mobile' src={hero_img_mobile} alt='winter 2021 design challenge'></img>
            <img className='hero-img' src={hero_img} alt='winter 2021 design challenge'></img>
        </div>
    )
}