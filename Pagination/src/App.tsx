import React from 'react'
import Pagination from './components/Pagination'
import { useState } from 'react'
import helper from './helper/constant'
import Filter from './components/Filter'
import './App.css'

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState('')
  let courses = helper.freeCSCourses
  
  courses = courses.filter(course => course.type.trim().toLowerCase().includes(filter))
  console.log(courses)
 
  const itemsPerPage = 6;
  const endIndex = currentPage * itemsPerPage;
  const startIndex = endIndex - itemsPerPage;

  const handlePageChange =(page)=>{
     setCurrentPage(page)
  }
  const setFilterTerm =(filter) =>{
    setFilter(filter.trim().toLowerCase())
  }
  
  const showCourses = courses.slice(startIndex, endIndex);

  return (
    <div className='main'>
      <div className='header'>
        <h2 className='title'>Free Courses over the internet</h2>
        <div className='underline'></div>
      </div>
      <Filter setFilter={setFilterTerm} />
      <ul className='ullu'>
      {showCourses.map((course, index)=>(
        <li key={index} className='course'>
          <h2>{course.name}</h2>
          <div>
            <p>{course.description}</p>
            <a href={course.link}>link</a>
          </div>
          <div className='bottom'>
            <div><span className='span'> rating </span>: {course.rating}</div>
            <div><span> time period </span> : {course.time}</div>
          </div>
        </li>
      ))}

      </ul>

      <Pagination
       totalItems={courses.length}
       itemsPerPage={itemsPerPage}
       currentPage={currentPage}
       onPageChange={handlePageChange}
       />
    </div>
  )
}

export default App
