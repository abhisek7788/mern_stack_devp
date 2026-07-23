import React from 'react'
import { useEffect } from 'react'
import { useState} from 'react'

const Runeveryrender = () => {
  const [count,setCount]= useState(0)
  useEffect(()=>{
    console.log("component render")
  })
  return (
    <div>
      <p>Current Count: {count}</p>
      <button onClick={()=>setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default Runeveryrender
