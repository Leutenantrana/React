import React from 'react'
import { useState } from 'react'
import Notification from './Notification'
import './input.css'
const DateOfBirth = ({date,setDate}) => {
    const [message, setMessage] = useState('')
    const [visible, setVisible] = useState(false)
    const handleChange =(e)=>{
        e.preventDefault()
        setDate(e.target.value)
        const dateByUser = new Date(date);
        const comparisonDate = new Date('2007-07-01');

        if(dateByUser > comparisonDate){
         
         setVisible(true)
         setMessage('you are underage')
        }
        else{
         setMessage('')
         setVisible(false)
        }
       
     }
  return (
    <div>
            <label >Date Of Birth</label>
            <input className={` 'inputField' ${visible ? 'hoveredInput': ''} ` } type='date' value={date} onChange={handleChange} />
            <Notification message={message} />
    </div>
  )
}

export default DateOfBirth
