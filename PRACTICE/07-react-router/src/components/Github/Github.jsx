// import {React , useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
    const data=useLoaderData()
  
  /*const [data , setData] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/DIGVIJAY-TRIPATHY')
        .then(response=>response.json())
        .then(data=>{
            console.log(data)
            setData(data)
        })
    },[])*/


  return (
    <div className='flex flex-col items-center justify-center bg-gray-600'>
        <h1 className=' text-white text-3xl p-4 m-2'>FOLLOWERS : {data.followers}</h1>
        <img src={data.avatar_url} alt="" className='w-100 h-100 m-3'/>
    </div>
  )
}

export default Github


export const githubloaderdata= async () => {
  const response = await fetch('https://api.github.com/users/DIGVIJAY-TRIPATHY');
  return response.json();
}