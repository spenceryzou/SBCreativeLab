import React from 'react'
import './Calendar.css';
import calendar from './imgs/calendar.svg'
import rainbow from './imgs/calendar-rainbow.svg'
import calendar_legend from './imgs/calendar-legend.svg'

function Calendar() {
  return (
    <div className='calendar'>
        <h1>Calendar</h1>
        
        <div className='calendar-img'>
            <div className='calendar-title'>
                <h2 className='calendar-month-text'>January 2022</h2>
                <img src={calendar} />
            </div>
            <img className='calendar-rainbow' src={rainbow} />
            <img className='calendar-legend' src={calendar_legend} />
        </div>
    </div>
  );
}

export default Calendar;