import React from 'react'
import { FaCartArrowDown } from 'react-icons/fa'

function Inlinecss() {
    const styles={
        color:"aqua",
        backgroundColor:"black",
        fontSize:"50px",
        textAlign:"center"
    }
  return (
    <div>
      <h1 style={{color:"red", backgroundColor:"black", fontSize:"50px", textAlign:"center"}}>INLINE STYLE</h1>

      <h1 style={styles}>this is const styling not exaxt iinline</h1>
      <FaCartArrowDown style={{color:"gold", fontSize:"50px"}}/>
    </div>
  )
}

export default Inlinecss
