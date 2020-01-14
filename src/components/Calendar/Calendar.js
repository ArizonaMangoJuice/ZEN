import React from 'react'
import CalendarDay from '../CalendarDay/CalendarDay'

export default class Calendar extends React.Component{
    daysinMonth(){
        let date = new Date();
        let months = date.getMonth() + 1;
        let year = date.getFullYear(); 
        let daysInMonth = new Date(year, months, 0).getDate();
        return daysInMonth
    }

    getDayName(){
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let d = new Date();
        let dayName = days[d.getDay()];
        return dayName;
    }

    render(){
        
        // console.log(this.getDayName())
        // let this.daysinMonth())

        return (
            <>
                <div className='calendar-container'>
                    <div className='month'>
                        <p className ='month'> January </p>
                        <p className='year'> 2020 </p>
                    </div>
                    <div className='day-name-container'>
                        <p className='day-name'>Monday</p>
                        <p className='day-name'>Tuesday</p>
                        <p className='day-name'>Wednesday</p>
                        <p className='day-name'>Thursday</p>
                        <p className='day-name'>Friday</p>
                        <p className='day-name'>Saturday</p>
                        <p className='day-name'>Sunday</p>
                    </div>
                    <CalendarDay dayNumber='1'/>
                </div>
            </>
        )
    }
}