import React from 'react'
import { useState } from 'react';
import './Filter.css'
const Filter = ({setFilter}) => {
    const [search, setSearch] = useState('')
    const handleClick =(filter)=>{
        setFilter(filter);
    }
  
  return (
    <div className='filterMain'>
       <button 
        onClick={()=>handleClick('')}
      >All</button>
      <button 
        onClick={()=>handleClick('Data Structures & Algorithms')}
      >DSA</button>
      
      <button
            onClick={()=>handleClick('Web Development')}

      >WEB DEVELOPMENT</button>
      <button
            onClick={()=>handleClick('Machine Learning')}

      >MACHINELEARNING</button>
      <button
             onClick={()=>handleClick('Artificial Intelligence')}

      >ARTIFICIAL INTELLIGENCE</button>

      <button
             onClick={()=>handleClick('Programming')}

      >PROGRAMMING</button>

      <button 
        onClick={()=>handleClick('data science')}
      >Data Science</button>
      <form className='form' onSubmit={()=>handleClick(search)}>
        <input
            type='text'
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
        />
        <button type='submit'>Search</button>
      </form>
     

    </div>
  )
}

export default Filter
