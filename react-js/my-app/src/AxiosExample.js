import React from 'react'
import { useEffect,useState } from 'react'
import axios from "axios"

const AxiosExample = () => {
    const [user,setuser]=useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{})
        .catch((error)=>{
            console.log("error:",error)
        })
    },[])
  return (
    <div style={{textAlign:"center"}}>
      <h1>User list</h1>
      {user.map((user)=>{
        <div key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
        </div>
      })}
    </div>
  )
}

export default AxiosExample
