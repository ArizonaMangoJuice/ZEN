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

    getfirstDayNameOfMonth(){
        let date = new Date();
        let month = date.getMonth();
        let year = date.getFullYear(); 

        let firstDay = new Date(year, month, 1);

        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        
        return [firstDay.getDay(), days[firstDay.getDay()]];

    }

    createCalendarDay(){
        let daysinMonth = this.daysinMonth();
        let output = [];
        let firstDay = this.getfirstDayNameOfMonth();

        for(let i = 0; i < firstDay[0]; i++){
            output.push(
                <CalendarDay dayNumber='x' key={i} notDay={true}/>
            );
        }

        for(let i = 1; i <= daysinMonth ; i++){
            output.push(
                <CalendarDay dayNumber={i} key={i}/>
            );
        }

        while(output.length < 35){
            let newDate = 1;
            output.push(
                <CalendarDay dayNumber={newDate} key={newDate + 1}/>
            );
        }

        return output;
    }

    render(){
        
        let calendarDays = this.createCalendarDay();
        console.log(this.getfirstDayNameOfMonth())

        return (
            <>
                <div className='calendar-container'>
                    <div className='month'>
                        <p className ='month'> January </p>
                        <p className='year'> 2020 </p>
                    </div>
                    <div className='day-name-container'>
                        <p className='day-name'>Sunday</p>
                        <p className='day-name'>Monday</p>
                        <p className='day-name'>Tuesday</p>
                        <p className='day-name'>Wednesday</p>
                        <p className='day-name'>Thursday</p>
                        <p className='day-name'>Friday</p>
                        <p className='day-name'>Saturday</p>
                    </div>
                    <div className='days-section'>
                      {calendarDays}
                    </div>
                </div>
            </>
        )
    }
}