import React from 'react'
import { useState } from 'react'

const Child = ({handleClick}) => {
    console.log("Child re-Rendered");
    return <button onClick={handleClick}>Click</button>
}

const PreventChildReRender = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        console.log("Clicked")
    }
  return (
    <div>
      <Child handleClick={handleClick}/>
      <button onClick={() => setCount(count+1)}>Count: {count}</button>
    </div>
  )
}

export default PreventChildReRender