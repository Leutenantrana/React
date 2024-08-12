import React from 'react'
import { useState } from 'react'
import Notification from './Notification'
import './input.css'
const Password = ({name,value, setValue}) => {
    const [message, setMessage] = useState('')
    const [visible, setVisible] = useState(false)
    const handleChange =(e)=>{
        e.preventDefault()
        const currentValue =e.target.value
        setValue(currentValue)
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        if(!passwordRegex.test(currentValue)){
         console.log('less than 3')
         setVisible(true)
         setMessage('Password must contain at least one letter, one number, and one special character.');
        }
        else{
         setMessage('')
         setVisible(false)
        }
     }
  return (
    <div>
            <label for="username">{name}</label>
            <input className={` 'inputField' ${visible ? 'hoveredInput': ''} ` } type='text' value={value} onChange={handleChange} />
            <Notification message={message} />
    </div>
  )
}

export default Password
