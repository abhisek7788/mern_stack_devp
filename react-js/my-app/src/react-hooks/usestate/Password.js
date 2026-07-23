import React from 'react'
import { useState } from 'react'
const Password = () => {
    const[showPassword,setshowPassword]= useState(false)
  return (
    <div>
        <h3>Password Feild</h3>
      <input 
      type={showPassword?"text":"password"}
      placeholder="Enter password"/>
      <button onClick={()=>setshowPassword(prev=> !prev)}>
           {showPassword?'hide':'show'}
      </button>
     
   
    </div>
  )
}

export default Password
