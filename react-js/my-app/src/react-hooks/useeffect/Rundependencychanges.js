import React from 'react'
import { useState,useEffect } from 'react'

const Rundependencychanges = () => {
    const [count,setCount]= useState(0)
    useEffect(()=>{
        console.log(`count changes to ${count}`)
    },[count]);
  return (
    <div>
      <button onClick={()=>setCount(count + 1)}>{count}</button>
    </div>
  )
}

export default Rundependencychanges
