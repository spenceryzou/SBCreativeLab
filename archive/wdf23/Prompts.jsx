import React from 'react'
import './Prompts.css'

import albumCoverTitleStar from './imgs/prompt-star-1.svg'
import musicCoverTitleStar from './imgs/prompt-star-2.svg'

import decoStar1 from './imgs/prompt-star-3.svg'
import decoStar2 from './imgs/prompt-star-4.svg'
import decoStar3 from './imgs/prompt-star-5.svg'

export default function Prompts() {
    return (
        <div className='prompts'>
            <div className='prompts-title'>Prompts</div>
            <div className='prompts-subtitle'>Choose one or both to design! The horizon is your limit :)</div>
            <div className='prompts-footer'>Note: if you choose to submit both projects, you will only be eligible to win a prize for one category and it will not increase your chance of winning</div>
            <div className='prompt-boxes'>
                <div className='album-cover-container'>
                    <div className='album-cover-box'>
                        <div className='album-cover-title-container'>
                            <img className='album-cover-title-star' src={albumCoverTitleStar} alt='' />
                            <span className='album-cover-title-text'><span className='album-cover-title-text-alt'>A</span>lbum Cover</span>
                        </div>
                        <div className='album-cover-description'>Design an <span className='album-cover-description-alt-1 album-cover-description-alt-2'>“album cover”</span> inspired by your <span className='album-cover-description-alt-2'>favorite song or album<span className='album-cover-description-alt-1'>!</span></span></div>
                        <div className='album-cover-note'>Note: This should be an orignal piece and cannot have more than 15% resemblance to the orignial artist’s album artwork</div>
                    </div>
                    <div className='album-cover-footer-boxes'>
                        <div className='illustration-box'>
                            <div className='illustration-text'>Illustration</div>
                        </div>
                        <div className='multimedia-box'>
                            <div className='multimedia-text'>Multimedia</div>
                        </div>
                    </div>
                    <div className='album-cover-deco'>
                        <img className='album-cover-star-1' src={decoStar1} alt='' />
                        <img className='album-cover-star-2' src={decoStar3} alt='' />
                    </div>
                </div>
                <div className='music-fest-container'>
                    <div className='music-fest-box'>
                        <div className='music-fest-title-container'>
                            <img className='music-fest-title-star' src={musicCoverTitleStar} alt='' />
                            <span className='music-fest-title-text'><span className='music-fest-title-text-alt'>M</span>usic Festival Lineup</span>
                        </div>
                        <div className='music-fest-description'>Design a <span className='music-fest-description-alt-1 music-fest-description-alt-2'>music festival lineup</span> poster!</div>
                        <div className='music-fest-note'>Note:  A copy will be provided for your designs.</div>
                    </div>
                    <div className='graphic-design-box'>
                        <div className='graphic-design-text'>Graphic Design</div>
                    </div>
                    <div className='music-fest-deco'>
                        <img className='music-fest-star-1' src={decoStar2} alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}