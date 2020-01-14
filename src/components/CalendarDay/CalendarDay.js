import React from 'react'

// Switch from using class to hook functional components

export default function CalendarDay(props){
        return (
            <div className={props.notDay ? 'not-day day' : 'day'}>
                <p className='day-number'>{props.dayNumber}</p>
            </div>
        )
}