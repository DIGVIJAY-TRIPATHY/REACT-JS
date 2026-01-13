import React from 'react'

function Propsss() {
  return (
    <div>
      <User
        name  = "digvijay"
        age   = {23}
        isMarried = {false}
        skills = {["html","css","js","react"]}
      />
    </div>
  )
}

const User= (props)=>{
  return(
    <section>
      <h1>name: {props.name}</h1>
      <h1>age: {props.age}</h1>
      <h1>isMarried: {props.isMarried}</h1>
      <h1>skills: {props.skills.join(', ')}</h1>
    </section>
  )
}

export default Propsss
