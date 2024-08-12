import React from 'react'
import { useState } from 'react'
import Notification from './Notification'
import './input.css'
const Username = ({value, setValue}) => {
    const [message, setMessage] = useState('')
    const [visible, setVisible] = useState(false)
    const handleChange =(e)=>{
        e.preventDefault()
        const currentValue =e.target.value
        setValue(currentValue)
        if(currentValue.length<3){
         console.log('less than 3')
         setVisible(true)
         setMessage('Username should be 3-16 characters long and must not have any special character');
        }
        else{
         setMessage('')
         setVisible(false)
        }
     }
  return (
    <div>
            <label for="username">Username</label>
            <input className={` 'inputField' ${visible ? 'hoveredInput': ''} ` } type='text' value={value} onChange={handleChange} />
            <Notification message={message} />
    </div>
  )
}

export default Username
