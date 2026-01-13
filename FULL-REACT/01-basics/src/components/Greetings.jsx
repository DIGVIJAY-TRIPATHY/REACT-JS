import React from 'react'

const Greetings=(props)=>{
    if(props.timeofDay==="morning"){
        return <h1>Good Morning!</h1>
    }
    else if(props.timeofDay==="afternoon"){
        return <h1>Good Afternoon!</h1>
    }
    else if(props.timeofDay==="evening"){
        return <h1>Good Evening!</h1>
    }
    else if(props.timeofDay==="night"){
        return <h1>Good Night!</h1>
    }
}

export default Greetings
