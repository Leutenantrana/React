import React from 'react'
import { useState } from 'react'
import styles from './styles.module.css'
import './style.css'
import Notification from './components/Notification'
import Email from './components/Email'
import Password from './components/Passowrd'
import DateOfBirth from './components/DateOfBirth'
import ConfirmPassword from './components/ConfirmPassword'
import delay from './components/delay'; // Ensure this path is correct
import Username from './components/Username'


const App = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [active ,setActive]  = useState(false)
  const [activeRing ,setActiveRing]  = useState(false)
  const [date, setDate] = useState('')
  const [message, setMessage] = useState('')

  const submitForm =async(e)=>{
    e.preventDefault()
    setActiveRing(true)
    await delay(2000);
    setActiveRing(false)
    console.log('submit')
    setUsername('')
    setPassword('')
    setDate('')
    setConfirmPassword('')
    setEmail('')
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
          <img className={styles.image} src='/images/coffe.jpeg' />
      </div>
      <div className={styles.right}>
          <h2>Register</h2>
          <form onSubmit={submitForm}>
            <Username value={username} setValue={setUsername} />
            <Email email={email} setEmail={setEmail} />
            <DateOfBirth date={date} setDate={setDate}/>
            <Password name='password' value={password} setValue={setPassword} />
            <ConfirmPassword value={confirmPassword} setValue={setConfirmPassword} password={password}  />
            <div className={activeRing? 'ring': ''}></div>
            <button type='Submit'> Submit</button>

          </form>
      </div>
    </div>
  )
}

export default App
