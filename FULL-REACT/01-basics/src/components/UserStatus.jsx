import React from 'react'

const UserStatus= (props)=>{

    if(props.loggedin && props.isAdmin){
        return <h1>Admin User</h1>
    }
    else if(props.loggedin && !props.isAdmin){
        return <h1>Regular User</h1>
    }
    else{
        return <h1>Guest User</h1>
    }
}

export default UserStatus
