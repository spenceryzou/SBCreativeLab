import React from 'react'
import './Calendar.css';
import calendar from './imgs/calendar.svg'
import rainbow from './imgs/calendar-rainbow.svg'
import calendar_legend from './imgs/calendar-legend.svg'
import calendar_mobile from './imgs/calendar-mobile.svg'
import calendar_mobile_dec from './imgs/calendar-mobile-dec.svg'

function Calendar() {
  return (
    <div className='mobile-container'>
      <div className='calendar-mobile-dec'>
        <img src={calendar_mobile_dec} />
      </div>
      <div className='calendar'>
          <div className='calendar-img'>
          <h1>Calendar</h1>
              <div className='calendar-title'>
                  <h2 className='calendar-month-text'>January 2022</h2>
                  <img src={calendar} className='calendar'/>
              </div>
              <img className='calendar-rainbow' src={rainbow} />
              <img className='calendar-legend' src={calendar_legend} />
          </div>
          <div className='calendar-mobile'>
            <h1 className='calendar-title-mobile'>Calendar</h1>
            <div className='calendar-mobile-container'>
              <img src={calendar_mobile} />
            </div>         
          </div>
      </div>
    </div>

  );
}

export default Calendar;