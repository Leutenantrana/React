import { useState } from "react";
import './formInput.css'
import React from 'react'

const FormInput = (props) => {
    const [focused, setFocused] = useState(false)
    const { label , errorMessage, onChange, id, ...inputProps} = props;
    
    const handleFocus =(e)=>{
        e.preventDefault()
        setFocused(true)
    }

  return (
    <div className="formInput">
      <label>{label}</label>
      <input 
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={()=>
            inputProps.name === 'confirmPassowrd' && setFocused(true)
        }
        focused ={focused.toString()}

      />
      <span>{errorMessage}</span>
    </div>
  )
}

export default FormInput
