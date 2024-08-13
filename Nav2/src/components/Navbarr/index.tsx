import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'
const Navbar = () => {
  return (
    <div>
      <header className='header'>
         <Link to="/" className='header__logo'>Sagar.me</Link>
         <nav className='header__nav'>
            <ul>
              <li>
                <Link className='a' to="/home">Home</Link>
              </li>
              <li>
                <Link className='a' to="/projects">Projects</Link>
              </li>
              <li>
                <Link className='a' to="/contacts">Contact</Link>
              </li>


            </ul>
         </nav>
         <div className='header__button'>
            <button className='searchBtn' aria-expanded="">
              Search
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.79167 13.4583C10.9213 13.4583 13.4583 10.9213 13.4583 7.79167C13.4583 4.66205 10.9213 2.125 7.79167 2.125C4.66205 2.125 2.125 4.66205 2.125 7.79167C2.125 10.9213 4.66205 13.4583 7.79167 13.4583Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14.875 14.875L11.7938 11.7938" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>  
            </button>

         </div>
      </header>
    </div>
  )
}

export default Navbar
