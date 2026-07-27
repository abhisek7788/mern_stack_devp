import React, { useRef, useState,useEffect } from 'react'

const Storeprev = () => {
    const [count,setcount]=useState(0);
    // this store the current count
    const prevcountref=useRef(0);
    //store previous value
    //
    useEffect(()=>{
        prevcountref.current=count
    },[count])
  return (
    <div>
      <h3>current count:{count}</h3>
      <h3>previous count:{prevcountref.current}</h3>
      <button onClick={()=>setcount(count+1)}>click yar</button>
      
    </div>
  )
}
export default Storeprev
