import React from 'react'
import './RubricOverlay.css'

import rubricOverlayArrow from './imgs/rubric-overlay-arrow.svg'
import rubricOverlayCloseButton from './imgs/rubric-overlay-close.png'

export default function RubricOverlay({ closeRubricOverlay }) {
    return (
        <>
            <div className='overlay-shadow' onClick={closeRubricOverlay}></div>
            <div className='rubric-overlay'>
                <div className='rubric-title'>Rubric</div>
                <img className='rubric-overlay-close-button' src={rubricOverlayCloseButton} alt='' onClick={closeRubricOverlay} />
                <div className='rubric-overlay-container album-cover-rubric-overlay-container'>
                    <div className='rubric-overlay-project-title'>
                        <img className='rubric-overlay-project-title-arrow' src={rubricOverlayArrow} alt='' />
                        <div className='rubric-overlay-project-title-text'>Album Cover Rubric</div>
                    </div>
                    <RubricProject
                        headerText={['Criteria', 'Best (4)', 'Great (3)', 'Good (2)', 'Needs Work (1)']}
                        bodyText={[
                            ['Composition & Design', 'Strong and unique composition. Layout is cohesive and actively contributes to the meaning of the design.', 'Great composition. Layout is cohesive and actively contributes to the meaning of the design.', 'Composition is basic, or has a few flaws that somewhat detract from the piece', 'The composition is unbalanced and the space has not been used to its potential. There is no clear focus or structure'],
                            ['Originality & Creativity', 'Excellent approach to developing and clearly expressing an original idea, with evidence of risk-taking.', 'Clear expression of an original idea, with evidence of risk-taking', 'Idea is developed and expressed well but shows limited risk-taking', 'Restricted approach to developing the idea with no evidence of risk-taking'],
                            ['Rendering & Completion', 'No noticeable gaps or discrepancies within the design. Design is mostly to fully done with a clear concept.', 'Some gaps or discrepancies within the design that do not impact the work. Design is slightly unclear but digestible.', 'Gaps and discrepancies within the design impact the work. Design is roughly done, but the design is unclear.', 'Gaps and discrepancies are noticeable and heavily impact the work. Design is partially done and significantly unclear.']
                        ]}
                    />
                </div>
                <div className='rubric-overlay-container music-fest-rubric-overlay-container'>
                    <div className='rubric-overlay-project-title'>
                        <img className='rubric-overlay-project-title-arrow' src={rubricOverlayArrow} alt='' />
                        <div className='rubric-overlay-project-title-text'>Music Festival Lineup Rubric</div>
                    </div>
                    <RubricProject
                        headerText={['Criteria', 'Best (4)', 'Great (3)', 'Good (2)', 'Needs Work (1)']}
                        bodyText={[
                            ['Composition & Design', 'Strong and unique composition. Layout is cohesive and actively contributes to the meaning of the design.', 'Great composition. Layout is cohesive and actively contributes to the meaning of the design.', 'Composition is basic, or has a few flaws that somewhat detract from the piece.', 'The composition is unbalanced and the space has not been used to its potential. There is no clear focus or structure.'],
                            ['Originality & Creativity', 'Excellent approach to developing and clearly expressing an original idea, with evidence of risk-taking.', 'Clear expression of an original idea, with evidence of risk-taking.', 'Idea is developed and expressed well but shows limited risk-taking.', 'Restricted approach to developing the idea with no evidence of risk-taking.'],
                            ['Information Hierarchy', 'Presents different types of text in an intuitive manner that does not overwhelm the reader.', 'Presents the information and text in a fairly intuitive manner but has room for improvement.', 'Presents the information and text in a somewhat clear manner, but the reader may have trouble understanding its purpose.', 'Inefficiently presents information in a loose and unstructured manner that is difficult for the reader to digest.'],
                            ['Use of copy & legibility', 'Utilizes copy efficiently and creatively, without compromising the legibility of the text.', 'Text hierarchy is clear, and fonts are consistent and readable. Font styles are harmonious with the design.', 'Text is mostly readable and clearly arranged, with minor issues.', 'Text is illegible and structure is inconsistent. Low contrast or poor color choices make it difficult to read.']
                        ]}
                    />
                </div>
            </div>
        </>
    )
}

function RubricProject({ headerText, bodyText }) {
    return (
        <div className='rubric-overlay-project'>
            <div className='rubric-overlay-project-header-row'>
                {
                    headerText.map((text, i) => {
                        return (
                            <div className={'rubric-overlay-project-box rubric-overlay-project-header-box ' + (i === 0 ? 'rubric-overlay-project-sidebar-size ' : 'rubric-overlay-project-body-size ') + (i === 0 ? 'rubric-overlay-project-top-left-box' : '') + (i === headerText.length-1 ? 'rubric-overlay-project-top-right-box' : '')}>{text}</div>
                        )
                    })
                }
            </div>
            {
                bodyText.map((row, i) => {
                    return (
                        <div className={'rubric-overlay-project-body-row ' + (i === bodyText.length-1 ? 'rubric-overlay-project-bottom-row' : '')}>
                            {
                                row.map((text, j) => {
                                    return (
                                        <div className={'rubric-overlay-project-box ' + (j === 0 ? 'rubric-overlay-project-sidebar-size rubric-overlay-project-sidebar-box ' : 'rubric-overlay-project-body-size ') + (i === bodyText.length-1 && j === 0 ? 'rubric-overlay-project-bottom-left-box' : '') + (i === bodyText.length-1 && j === row.length-1 ? 'rubric-overlay-project-bottom-right-box' : '')}>{text}</div>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}