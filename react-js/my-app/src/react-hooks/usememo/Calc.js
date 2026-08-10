import React from 'react'
import { useMemo,useState } from 'react'

const Calc = () => {
    const [count,setcount]=useState(0)
    const square=useMemo(()=>{
        console.log("calculating")
        return count*count;
    },[count])
  return (
    <div>
      
    </div>
  )
}

export default Calc
