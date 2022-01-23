import React from 'react'
import './Details.css'
import sun from './imgs/sun.svg'
import cloud from './imgs/cloud.svg'
import deadlineMobile from './imgs/deadline-mobile.svg'

export default function Details(){
    return (
        <div className="details">
            <div className='gift-card-container'>
                <span className='gift-card'>The winner will receive a </span>
                <span className='gift-card-bold'>$30 Amazon gift card</span>
                <span className='gift-card'>!</span>
            </div>
            <div className='btns'>
                <img className='sun' src={sun}></img>
                <div className='design-reqs-btn-container'>
                    <a className='design-reqs-btn' href='https://sbcreativelab.notion.site/W22-Winter-Design-Challenge-Guidelines-Requirements-03fd6ed5baa44011940a30f0da73f9e0' target='_blank'>View design requirements here</a>
                </div>
                <div className='submission-btn-container'>
                    <a className='submission-btn' href='https://docs.google.com/forms/d/e/1FAIpQLSfLb39CJiVR-cvP2y1IdYYRdv-bbjyZqJd1WTgB5YHGmFohDQ/viewform?usp=sf_link' target='_blank'>Submit your designs here!</a>
                    {/* <a className='submission-btn' href='https://docs.google.com/forms/d/e/1FAIpQLSfIIGElNHRtDjsDVzl3Kes17RFZcno5ad6gHYXA1DBwofFmfg/viewform?usp=sf_link' target='_blank'>Interested? Sign up here!</a>  */}
                </div>
                <div className='deadline-date'>
                    <p className='deadline-p'>January 26th</p>
                    <p className='deadline-p'>@ 11:59pm PST</p>
                </div>
                <div className='deadline'>
                    <img className='deadline-mobile' src={deadlineMobile}></img>
                    <div className='deadline-container'>
                        <img className='deadline-cloud' src={cloud}></img>
                        <p className='deadline-title'>Deadline</p>
                    </div>
                </div>
            </div>
        </div>
    )
}