import React from 'react'
import { useMemo,useState } from 'react'
const Calc1 = () => {
    const [num,setnum]=useState(1)
    const [text,settext]=useState("")

    const heavycalc=(n)=>{
        console.log("heavy calculation running")
        for(let i=0;i<1000;i++){
            return n*2
        }
    }
    const result=useMemo(()=>{
        return heavycalc(num)
    },[num])
    
  return (
    <div>
      <h2>Result:{result}</h2>
      <button onClick={()=> setnum(num+1)}>Increase no.</button>
      <input value={text} onChange={(e)=>settext(e.target.value)} placeholder='Type here'></input>
    </div>
  )
}

export default Calc1
