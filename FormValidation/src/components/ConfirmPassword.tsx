import React from 'react'
import { useState } from 'react'
import Notification from './Notification'
import './input.css'
const ConfirmPassword = ({value, setValue, password}) => {
    const [message, setMessage] = useState('')
    const [visible, setVisible] = useState(false)
    if(password.length<0){
        setMessage('')
        setVisible(false)
    }
    const handleChange =(e)=>{
        const currentValue = e.target.value;
        e.preventDefault() 
        setValue(currentValue)
        
        
        if(password != currentValue){
         setVisible(true)
         setMessage('Password do not match')
        }
        else{
         setMessage('')
         setVisible(false)
        }
        
    }
     
  return (
    <div>
            <label for="username">Confirm Password</label>
            <input className={` 'inputField' ${visible ? 'hoveredInput': ''} ` } type='text' value={value} onChange={handleChange} />
            <Notification message={message} />
    </div>
  )
}

export default ConfirmPassword
