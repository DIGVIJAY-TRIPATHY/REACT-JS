import React from 'react'
import { useState } from 'react'

function App() {
  
  const [count, setCount] = useState(0)
  const [friend , setFriend] = useState(["John","alex","mary"])
  const [movie ,setMovie]=useState([
    {name:"abc",rating:4.5},
    {name:"def",rating:3.5},
    {name:"ghi",rating:4.0}

  ])

  const increment = ()=> setCount(count+1)
  const decrement = ()=> setCount(count-1)
  const removefriend=()=> setFriend(friend.filter(f => f !== "alex"))

  const handleclick = ()=>{
    setMovie(
      movie.map((m) => (m.name === "abc" ? {...m, name: "XYZ"} : m))
    )
  }

  return (
    <>
      <h1>{count}</h1>

      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>

      {/* this is some another way to use usetState */}
      <button onClick={() => setCount(count - 2)}>--</button>

      <h2>Friends List</h2>
      <ul>
        {friend.map((f)=>(
          <li key={Math.random()}>{f}</li>
        ))}
      </ul>

      <button onClick={()=> setFriend([...friend,"digvijay"])}>add friend</button>
      <button onClick={removefriend}>removefriend</button>


      <button onClick={()=>setFriend(friend.filter(f => f !== "digvijay"))}>removefriend</button>

      <button onClick={()=>setFriend(friend.map(f => f==='digvijay' ? 'DIGVIJAY TRIPATHY' : f))}>updateName</button>

      <h2>Movies List</h2>
      <ul>
        {movie.map(m=>(
          <li key={Math.random()}>
            {m.name}
          </li>
        ))}
      </ul>

      <button onClick={handleclick}>change name</button>

    </>
  )
}

export default App
