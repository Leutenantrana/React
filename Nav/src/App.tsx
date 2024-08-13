import {Link } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
const App = () => {
  const [visible , setVisible] = useState(false);

  const handleClick =(e)=>{
    e.preventDefault();
    setVisible(!visible)
  }
  const linkStyle = {
    animation: visible ? 'navLinkFade 0.5s ease forwards 0.5s' : 'none',
  };
  return (

    <div>
      <nav>
        <div className='logo'>
           The Nav
        </div>
        <ul className={`nav-links ${visible? 'nav-active' : ''}`}>
          <li style={linkStyle}>
            <Link  className='a' to='/home' >Home</Link>
          </li>
          <li style={linkStyle}>
            <Link className='a' to='/register' >Register</Link>
          </li>
          <li style={linkStyle}>
             <Link className='a' to='/services' >Work</Link>
          </li>
          <li style={linkStyle}>
            <Link className='a' to='/projects' >Project</Link>
          </li>
        </ul>
        <div className={`burger ${visible? 'toggle': '' }`} onClick={handleClick}>
           <div className='line1'></div>
           <div className='line2'></div>
           <div className='line3'></div>

        </div>
      </nav>
      
    </div>
  )
}

export default App
