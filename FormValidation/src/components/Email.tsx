import React from 'react'
import { useState } from 'react'
import Notification from './Notification'
import './input.css'
const Email = ({email,setEmail}) => {
    const [message, setMessage] = useState('')
    const [visible, setVisible] = useState(false)
    const handleChange =(e)=>{
        e.preventDefault()
        const currentValue =e.target.value
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setEmail(currentValue)
        if(!emailRegex.test(currentValue)){
         console.log('less than 3')
         setVisible(true)
         setMessage('It should be a valid email address')
        }
        
        else{
         setMessage('')
         setVisible(false)
        }
       
     }
  return (
    <div>
            <label >Email</label>
            <input className={` 'inputField' ${visible ? 'hoveredInput': ''} ` } type='email' value={email} onChange={handleChange} />
            <Notification message={message} />
    </div>
  )
}

export default Email
