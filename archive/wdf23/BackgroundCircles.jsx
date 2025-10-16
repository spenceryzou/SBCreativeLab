import React from 'react'
import { useMediaQuery } from 'react-responsive'
import './BackgroundCircles.css'

import backgroundCircles1 from './imgs/background-circles-1.svg'
import backgroundCircles1Small from './imgs/background-circles-1-small.svg'
import backgroundCircles2 from './imgs/background-circles-2.svg'
import backgroundCircles2Small from './imgs/background-circles-2-small.svg'
import backgroundCircles3 from './imgs/background-circles-3.svg'
import backgroundCircles3Small from './imgs/background-circles-3-small.svg'
import backgroundCircles4 from './imgs/background-circles-4.svg'
import backgroundCircles4Small from './imgs/background-circles-4-small.svg'
import backgroundCircles5 from './imgs/background-circles-5.svg'
import backgroundCircles5Small from './imgs/background-circles-5-small.svg'
import backgroundCircles6 from './imgs/background-circles-6.svg'
import backgroundCircles6Small from './imgs/background-circles-6-small.svg'
import backgroundCircles7 from './imgs/background-circles-7.svg'
import backgroundCircles7Small from './imgs/background-circles-7-small.svg'
import backgroundCircles8 from './imgs/background-circles-8.svg'
import backgroundCircles8Small from './imgs/background-circles-8-small.svg'
import backgroundCircles9 from './imgs/background-circles-9.svg'
import backgroundCircles9Small from './imgs/background-circles-9-small.svg'

export default function BackgroundCircles() {
    const isMobile = useMediaQuery({ query: `(max-width: 1300px)` });

    return (
    	<div className='background-circles'>
    		<img className='background-circles-1' src={!isMobile ? backgroundCircles1 : backgroundCircles1Small} alt='' />
            <img className='background-circles-2' src={!isMobile ? backgroundCircles2 : backgroundCircles2Small} alt='' />
            <img className='background-circles-3' src={!isMobile ? backgroundCircles3 : backgroundCircles3Small} alt='' />
            <img className='background-circles-4' src={!isMobile ? backgroundCircles4 : backgroundCircles4Small} alt='' />
            <img className='background-circles-5' src={!isMobile ? backgroundCircles5 : backgroundCircles5Small} alt='' />
            <img className='background-circles-6' src={!isMobile ? backgroundCircles6 : backgroundCircles6Small} alt='' />
            <img className='background-circles-7' src={!isMobile ? backgroundCircles7 : backgroundCircles7Small} alt='' />
            <img className='background-circles-8' src={!isMobile ? backgroundCircles8 : backgroundCircles8Small} alt='' />
            <img className='background-circles-9' src={!isMobile ? backgroundCircles9 : backgroundCircles9Small} alt='' />
    	</div>
    )
}