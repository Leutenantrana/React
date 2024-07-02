import React from 'react'

const Search = ({searchTerm , setSearchTerm}) => {

  function handleChange(e){
     e.preventDefault();
     setSearchTerm(e.target.value)
  }  
  
  return (
    <div>
      
        <input value={searchTerm} onChange={handleChange} />
    
    </div>
  )
}

export default Search
