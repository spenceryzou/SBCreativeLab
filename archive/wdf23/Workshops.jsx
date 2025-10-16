import React from 'react'
import './Workshops.css'

import finnImg from './imgs/finn.png'

export default function Workshops() {
    return (
    	<div className='workshops'>
    		<div className='workshops-title'>Workshops</div>
            <div className='workshop workshop-1'>
                <div className='workshop-title workshop-1-title'>Illustration</div>
                <div className='workshop-subtitle workshop-1-subtitle'>January 17, 6-7pm, SSMS 1303</div>
                <div className='workshop-lead'>Led By  <span className='workshop-lead-italic'>Keanna Lam</span></div>
                <div className='workshop-info'>Led by SBCL's very own design lead, learn key illustration principles and engage in an interactive workshop to up your design skills!</div>
            </div>
            <div className='workshop workshop-2'>
                <div className='workshop-title workshop-2-title'>Poster Design and Fonts</div>
                <div className='workshop-subtitle workshop-2-subtitle'>January 19, 6-7pm, SSMS 1303</div>
                <div className='workshop-lead'>Led By  <span className='workshop-lead-italic'>Kai En Lee</span></div>
                <div className='workshop-info'>Join a workshop led by an SBCL designer aimed at learning graphic design tools and skills to add to your tool box!</div>
            </div>
    		<div className='workshop-note'>Stay after the workshops for our studio hours to get feedback and work with other designers!</div>
    		<div className='workshop-note-2'>7-8 PM</div>
    		<img className='finn-img' src={finnImg} alt='' />
    	</div>
    )
}