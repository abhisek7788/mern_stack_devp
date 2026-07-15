import React from 'react'

const Userlist = () => {
    let data= [
        {
            name: "Braja",
            email: "braja@gmail.com",
            rollno: 17
        },
        {
            name: "Mantu",
            email: "mantu@gmail.com",
            rollno: 19
        },
        {
            name: "Sanju",
            email: "sanju@gmail.com",
            rollno: 58
        },
        {
            name: "Gaura",
            email: "gaura@gmail.com",
            rollno: 25
        },
        {
            name: "Malaya",
            email: "malay@gmail.com",
            rollno: 35
        }
    ]
  return (
    <div>
      {data.map(({name,email,rollno})=>{
        return(
            <div>
                <h1>{name}</h1>
                <p>{email}</p>
                <p>{rollno}</p>
            </div>
        )
      })}
    </div>
  )
}

export default Userlist
