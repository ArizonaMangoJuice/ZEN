import React from 'react'
import CalendarDay from '../CalendarDay/CalendarDay'

export default class Calendar extends React.Component{
    render(){
        return (
            <>
                <p>Hello from Calendar</p>
                <CalendarDay />
            </>
        )
    }
}