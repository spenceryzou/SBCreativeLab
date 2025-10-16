import React from 'react'
import { useMediaQuery } from 'react-responsive'
import './Calendar.css'

import judgingNoteArrow from './imgs/judging-note-arrow.svg'
import judgingNoteArrowSmall from './imgs/judging-note-arrow-small.svg'

export default function Calendar() {
    const isMobile = useMediaQuery({ query: `(max-width: 1300px)` });

    return (
    	<div className='calendar'>
            <div className='calendar-title'>Schedule</div>
            <div className='calendar-container'>
                <CalendarEvent
                    date={'January 9'}
                    event={'Registration Open'}
                    colorClass={'calendar-registration-event'}
                />
                <CalendarEvent
                    date={'January 17'}
                    event={'Illustration Workshop'}
                />
                <CalendarEvent
                    date={'January 19'}
                    event={'Poster Design / Fonts workshop'}
                />
                <CalendarEvent
                    date={'January 26'}
                    event={'GM2 - WDF Worktime'}
                />
                <CalendarEvent
                    date={'February 3'}
                    event={'Registration Deadline'}
                />
                <CalendarEvent
                    date={'February 5'}
                    event={'Submission Deadline'}
                    colorClass={'calendar-submission-event'}
                />
                <CalendarEvent
                    date={'February 22'}
                    event={'Results Announced'}
                />
                <CalendarEvent
                    date={'(TBA)'}
                    event={'Prizes Sent!'}
                />
            </div>
            <div className='calendar-judging-note'>
                <img className='calendar-judging-note-arrow' src={!isMobile ? judgingNoteArrow : judgingNoteArrowSmall} alt='' />
                <div className='calendar-judging-note-text'>Judging Period</div>
            </div>
        </div>
    )
}

function CalendarEvent({date, event, colorClass}) {
    return (
        <div className={'calendar-row' + (colorClass ? ' ' + colorClass : '')}>
            <div className='calendar-date'>{date}</div>
            <div className='calendar-event'>{event}</div>
        </div>
    )
}