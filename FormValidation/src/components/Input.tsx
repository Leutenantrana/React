import React from 'react'
import { useState } from 'react'
import Notification from './Notification'
import './input.css'
const Input = ({name,value, setValue}) => {
    const [message, setMessage] = useState('')
    const [visible, setVisible] = useState(false)
    const handleChange =(e)=>{
        e.preventDefault()
        if(value.length<3){
         console.log('less than 3')
         setVisible(true)
         setMessage('Username should be 3-16 characters long and must not have any special character')
        }
        else{
         setMessage('')
         setVisible(false)
        }
        setValue(e.target.value)
     }
  return (
    <div>
            <label for="username">{name}</label>
            <input className={` 'inputField' ${visible ? 'hoveredInput': ''} ` } type='text' value={value} onChange={handleChange} />
            <Notification message={message} />
    </div>
  )
}

export default Input
