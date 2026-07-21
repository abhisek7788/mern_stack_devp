import React from 'react'
import { useState } from 'react'
const Toggle = () => {
    const[setON,setOFF]= useState(false);
    console.log("SetON state" , setON);
  return (
    <div><h2>status:{setON?"ON": "OFF"}</h2>
      <button onClick={()=> setOFF(!setON)}>
        {setON?'turn off': 'turn on'}
      </button>
    </div>
  )
}

export default Toggle
