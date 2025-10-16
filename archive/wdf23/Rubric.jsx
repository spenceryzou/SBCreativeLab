import React from 'react'
import { useMediaQuery } from 'react-responsive'
import './Rubric.css'

import rubricArrow from './imgs/rubric-arrow.svg'

export default function Rubric({ openRubricOverlay }) {
    const isMobile = useMediaQuery({ query: `(max-width: 1300px)` });

    return (
    	<div className='rubric'>
    		<div className='rubric-title'>Rubric</div>
            <div className='rubric-subtitle'>Out of 4 pioints for each category</div>
            <div className='rubric-project-title rubric-album-cover-title'>
                <div className='rubric-project-title-text'>Album Cover.</div>
                <img className='rubric-project-title-arrow' src={rubricArrow} alt='' />
            </div>
            <div className='rubric-container rubric-album-cover-container'>
                <RubricSection
                    sectionClass={'rubric-album-cover-section'}
                    title={"Composition & Design"}
                    description={"Strong and unique composition. Layout is cohesive and actively contributes to the meaning of the design."}
                />
                <RubricSection
                    sectionClass={'rubric-album-cover-section rubric-right-align-section-container'}
                    title={"Originality & Creativity"}
                    description={"Excellent approach to developing and clearly expressing an original idea, with evidence of risk-taking."}
                />
                <RubricSection
                    sectionClass={'rubric-album-cover-section'}
                    title={"Rendering & Completion"}
                    description={"No noticeable gaps or discrepancies within the design. Design is mostly to fully done with a clear concept."}
                />
            </div>
            <div className='rubric-project-title rubric-music-fest-title'>
                <div className='rubric-project-title-text'>Music Festival Lineup Poster.</div>
                <img className='rubric-project-title-arrow' src={rubricArrow} alt='' />
            </div>
            <div className='rubric-container rubric-music-fest-container'>
                <RubricSection
                    sectionClass={'rubric-music-fest-section'}
                    title={"Composition & Design"}
                    description={"Strong and unique composition. Layout is cohesive and actively contributes to the meaning of the design."}
                />
                <RubricSection
                    sectionClass={'rubric-music-fest-section rubric-right-align-section-container'}
                    title={"Originality & Creativity"}
                    description={"Excellent approach to developing and clearly expressing an original idea, with evidence of risk-taking."}
                />
                <RubricSection
                    sectionClass={'rubric-music-fest-section'}
                    title={"Information Hierarchy"}
                    description={"Presents different types of text in an intuitive manner that does not overwhelm the reader."}
                />
                <RubricSection
                    sectionClass={'rubric-music-fest-section rubric-right-align-section-container'}
                    title={"Use of Copy & Legibility"}
                    description={"Utilizes copy efficiently and creatively, without compromising the legibility of the text."}
                />
            </div>
            <div className='rubric-detailed-scoring-button button' onClick={openRubricOverlay}>
                <div className='rubric-detailed-scoring-text'>{!isMobile ? 'See detailed scoring' : 'See detailed scoring on desktop'}</div>
            </div>
    	</div>
    )
}

function RubricSection({ title, description, sectionClass }) {
    return (
        <div className={'rubric-section-container ' + sectionClass}>
            <div className='rubric-section-title'>{title}</div>
            <div className='rubric-section-description'>{description}</div>
        </div>
    )
}