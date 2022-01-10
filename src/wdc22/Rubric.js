import React from 'react'
import './Rubric.css'

import cloudv2 from './imgs/cloud-v2.svg'
import rubric from './imgs/rubric.svg'
import rubric_dec_1 from './imgs/rubric-dec-1.svg'
import rubric_dec_2 from './imgs/rubric-dec-2.svg'

export default function Rubric() {
    return (
        <div className='rubric'>
            <div className='rubric-container'>
                <img className='rubric-cloud' src={cloudv2}></img>
                <p className='rubric-title'>Rubric</p>
            </div>
            <div className='rubric-dec'>
                <div className='rubric-dec-1'>
                    <img className='rubric-dec-1-img'src={rubric_dec_1}></img>
                </div>
                <div className='rubric-dec-2'>
                    <img className='rubric-dec-2-img' src={rubric_dec_2}></img>
                </div>
                <div className='rubric-img-container'>
                    <img className='rubric-img' src={rubric}></img>
                </div>
            </div>
        </div>
    )
}