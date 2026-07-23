import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Runonlyonce = () => {
    // //example-1
    useEffect(()=>{
        console.log("it primts only once")
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>res.json())
        .then((data)=>console.log(data))
    },[])
    // //example-2
     const [count,setCount]= useState(0)
    //   useEffect(()=>{
    //     console.log("component render")
    //   })
  return (
    <div>
      <p>Current Count: {count}</p>
      <button onClick={()=>setCount(count + 1)}>Increment</button>
      
    </div>
  )
}

export default Runonlyonce
