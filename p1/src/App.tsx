import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import Search from './components/Search'
import Country from './components/Country'


function App() {
  const [data , setData] = useState([])
  const [searchTerm , setSearchTerm] = useState(' ')

  const url =  `https://studies.cs.helsinki.fi/restcountries/api/all`
  useEffect(()=>{
    axios
      .get(url)
      .then(response =>{
        console.log(response)
        setData(response.data)
      })
  })
  console.log(data)

  const countriestoshow = data.filter(country => country.name.common.toLowerCase().includes(searchTerm.toLowerCase()))

  
  console.log(countriestoshow)
  return (
    <>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      { countriestoshow.length > 100 ? <h2>Too many matches, specify another filters</h2>: 
       <div className='container'>
          {countriestoshow.map(country => (
            <Country country={country} />
          ))}
        </div> }
    </>      
   )
}     
   


export default App
