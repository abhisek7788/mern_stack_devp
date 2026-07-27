import React from 'react'
import { useRef } from 'react'

const Accessdomele = () => {
    const inputRef=useRef(null)//initial value is null
    const handleFocous=()=>{
        inputRef.current.focous()
        // focous->it is a prebuild function that focoses on a point
        // .current is a container to store
    }
  return (
    <div>
      <input ref={inputRef} type='text' placeholder='enter name'></input>
      <button></button>
    </div>
  )
}

export default Accessdomele
