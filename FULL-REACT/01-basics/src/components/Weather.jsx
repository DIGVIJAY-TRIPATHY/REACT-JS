import React from 'react'

function Weather() {

    const randomdata=[10,20,30,40,50,60,70,80,90,100]

  return (
    <div>
      <h1>the temparrature is</h1>
      
        
      <ul>
        {randomdata.map((temp)=>(
            <li key={Math.random()}>{temp>30 ? <h2>{temp} is hot</h2> : <h2>{temp} is cold</h2>}</li>
        ))}
      </ul>

    </div>
  )
}

export default Weather
