import React from 'react'
import { useState,useRef } from 'react'

const StoreValue = () => {

    const countRef = useRef(0);

    const [stateCount, setStateCount] = useState(0);

    const increaseRef = () => {
        countRef.current++;
        console.log("ref count: ", countRef.current)
    }
    //  it does not re-render but still increment the count
    const increaseState = () => {
        setStateCount(stateCount + 1)
    }
    //  it render & increment the count
  return (
    <div>
      <h2>State Count: {stateCount}</h2>
      <button onClick={increaseState}>Increase State</button>
      <button onClick={increaseRef}>Increase Ref</button>
    </div>
  )
}

export default StoreValue