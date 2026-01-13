import React from 'react'

function List() {

    const numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]

    const user=[
        {id:1, name:"digvijay", age:23},
        {id:2, name:"rahul", age:24},
        {id:3, name:"sachin", age:25},
        {id:4, name:"rohit", age:26},
        {id:5, name:"virat", age:27},
        {id:6, name:"shikhar", age:28},
        {id:7, name:"ajinkya", age:29},
        {id:8, name:"ravindra", age:30},
        {id:9, name:"suryakumar", age:31},
        {id:10, name:"hardik", age:32}
    ]

    const products=[
        {number:1, product:"laptop", price:50000},
        {number:2, product:"mobile", price:20000},
        {number:3, product:"tablet", price:15000},
        {number:4, product:"watch", price:10000},
        {number:5, product:"headphone", price:5000},
        {number:6, product:"speaker", price:2000},
        {number:7, product:"camera", price:1500},
        {number:8, product:"printer", price:1000},
        {number:9, product:"keyboard", price:500},
        {number:10, product:"mouse", price:200}
    ]

  return (
    <div>
      {numbers.map(number=>(
        <ul key={number}>
            <li>{number}</li>
        </ul>
      ))}

      {user.map(({id,name,age})=>(
        <ul key={Math.random()}>
            <li>{name}</li>
            <li>{id}</li>
            <li>{age}</li>
        </ul>   
      ))}

      {products.map(({number,product,price})=>(
        <ul key={Math.random}>
            <li>{product}</li>
            <li>{price}</li>
            <li>{number}</li>
        </ul>
      ))}
    </div>
  )
}

export default List
