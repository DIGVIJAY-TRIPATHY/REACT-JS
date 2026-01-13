import React from 'react'

function Basic() {
  const name="digvijay"
  const multiply =(a,b)=> a*b
  


  return (
    <div>

        <h1>2+2</h1>
        <h1>with curly braces inside any element is considered as javascript so here the result is  :-  {2 + 2}</h1>
        <h1>my name is {name}</h1>
        <h1>multiply of 2 and 3 is {multiply(2,3)}</h1>

    </div>
  )
}

export default Basic
