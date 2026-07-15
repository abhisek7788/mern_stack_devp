import React from 'react'

const Title = ({name,contactno,schoolname,collegename,rollno}) => {
  return (
    <>
    <div>
      <div>
        <div>
          <h1 style={{fontSize:50,color:"red"}}>{name}</h1>
        </div>
      </div>
    </div>
    <h1 style={{fontSize:50,color:"red"}}>{contactno}</h1>
    <h1 style={{fontSize:50,color:"red"}}>{schoolname}</h1>
    <h1 style={{fontSize:50,color:"red"}}>{collegename}</h1>
    <h1 style={{fontSize:50,color:"red"}}>{rollno}</h1>
    {/* <h1>this is a good day</h1>
    <h2>{props.name}</h2>
    <h1>{props.demo}</h1> */}
    {/* <h3>{props.test}</h3> */}
    </>
  )
}

export default Title
