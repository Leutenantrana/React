import React from 'react'
import './notification.css'

const Notification = ({message}) => {
    if(!message){
        return
    }
  return (
    <div className='notification'>
      {message}
    </div>
  )
}

export default Notification
