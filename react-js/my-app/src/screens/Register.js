import React from 'react'

const Register = () => {
    function handleRegister(e){
        e.preventDefault()//it handles the auto reload case
        console.log("Hello World")
    }
    let age= 19
  return (
    <form>
        {age>=18?(
            <div>
             <input type='email' placeholder='enter email'></input>
             <button onClick={handleRegister}>Submit</button>
            </div>
        ):(
            <p>you are underage. Your email is not verified</p>
        )}
    </form>
  )
}

export default Register
