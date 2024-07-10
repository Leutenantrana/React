import React from 'react'
import {useState, useEffect} from 'react'
import '../App.css'

const AgeCalci = () => {
    const[day, setDay] = useState('0')
    const[month, setMonth] = useState('0')
    const[year, setYear] = useState('0')

    const [totDays, setTotDays] = useState('0')
    const [totMonths, setTotMonths] = useState('0')
    const [totYears, setTotYears] = useState('0')


    useEffect(() => {
        const currentDate = new Date();
        let presentDay = currentDate.getDate();
        let presentMonth = currentDate.getMonth() + 1;
        let presentYear = currentDate.getFullYear();
    
        const days = Number(day);
        const months = Number(month);
        const years = Number(year);
    
        if (presentDay < days) {
          presentDay = presentDay + 31;
          presentMonth = presentMonth - 1;
        }
    
        const totalDays = presentDay - days;
        setTotDays(totalDays.toString());
    
        if (presentMonth < months) {
          presentMonth = presentMonth + 12;
          presentYear = presentYear - 1;
        }
    
        const totalMonths = presentMonth - months;
        setTotMonths(totalMonths.toString());
    
        const totalYears = presentYear - years;
        setTotYears(totalYears.toString());
      }, [day, month, year]);

  return (
    <div className='rounded-md rounded-bl-3xl w-80 h-80 bg-gray-800 flex flex-col items-center shadow-2xl shadow-blue-600 hover:shadow-red-500 '>
        <div className='flex justify-center mt-3 w-72 h-16 rounded-lg bg-white '>
          
            <input id='date' className='mx-2 mt-2 mb-2 bg-gray-100 rounded-md text-center hover:placeholder:text-gray-700 hover:bg-slate-300 hover:shadow-red-500 focus:outline-none focus:ring focus:border-blue-300 ' placeholder='    day' type='number' min={0} max={31} onChange={({target})=>{setDay(target.value)}}/>
            <input className='mx-2 mt-2 mb-2 bg-gray-100 rounded-md text-center hover:placeholder:text-gray-700 hover:bg-slate-300 focus:outline-none focus:ring focus:border-blue-300 ' placeholder='    month' type='number' min={0} max={12} onChange={({target})=>{setMonth(target.value)}}/>
            <input className='mx-2 mt-2 mb-2 bg-gray-100 rounded-md text-center hover:placeholder:text-gray-700 hover:bg-slate-300 focus:outline-none focus:ring focus:border-blue-300 ' placeholder='    year' type='number' min={1950} max={2024} onChange={({target})=>{setYear(target.value)}}/>

        </div>
        <div className='mt-7'>
            <p className='text-6xl text-white'>{totDays} - Days</p>
            <p className='text-6xl text-white'>{totMonths} - Months</p>
            <p className='text-6xl text-white'>{totYears} - Years</p>

        </div>

      
       
    </div>
  )
}

export default AgeCalci
