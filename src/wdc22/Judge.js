import React from 'react'
import './Judge.css'
import water_drop from './imgs/water-drop.svg'

export default function Judge(props) {
    return (
        
        <div className='judge-component'>
            <div className='judge-card'>
                <img className='judge-headshot' src={props.headshot}></img>
                <p className='job-desc'>{props.job1}</p>
                <p className='job-desc'> {props.job2}</p>
            </div>
            <div>
                <div className='judge-bullet-point'>
                    <div className='water-drop'>
                        <img src={water_drop}></img>
                    </div>
                    
                    <p className='judge-p'>Based in <span className='judge-p-bold'>{props.location}</span></p>
                </div>
                <div className='judge-bullet-point'>
                    <div className='water-drop'>
                            <img src={water_drop}></img>
                    </div>
                    <div className='ucsb-alum'>
                        {props.major && <p className='judge-p-bold'>UCSB Alumni</p>}
                        {props.major && <p className='judge-p'>{props.major}</p>}
                    </div>
                    {props.desc && <p className='judge-p-desc'>{props.desc}</p>}
                </div>

            </div>
        </div>
    )
}