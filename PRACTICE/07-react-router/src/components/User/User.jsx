import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId} = useParams()
  return (
    <div>
      <h1 className='bg-gray-600 text-white p-4 text-center text-3xl'>user : {userId}
      </h1>
    </div>
  )
}

export default User
