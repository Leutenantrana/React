import React from 'react'

const Country = ({country}) => {
  return (
    <div className='main'>
           
            
            
            <img src={country.flags.png} />
            <h2>{country.name.common}</h2>
            <p>Capital : {country.capital}</p>
            
            <h3> Languages :</h3>
            {Object.values(country.languages).map((language)=>(
                <p> {language}</p>
            ))}

    </div>
  )
}

export default Country
