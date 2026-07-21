import React from 'react'
import { useState } from 'react'
const Todo = () => {
    const[input,setInput]= useState('')
    //state for store the todos
    const[todos,setTodos]=useState([])
    //function for add task
    const addTodo=()=>{
        if(input.trim()===''){
            setTodos([...todos,input])
            setInput('')
        }
    }
    //delete task
    const deleteTodo= (index)=>{
        const newTodos= todos.filter((_,i)=>i!==index)
        setTodos(newTodos)
    }
  return (
    <div>
      <h2>Todo App</h2>
      <input
      type='text'
      value={input}
      onChange={(e)=> setInput(e.target.value)}
      placeholder='Enter task'/>
      <button onClick={addTodo} style={}>
        Add task</button>
      {/* todo list */}
      <ul style={{liststyle:"none",padding:0}}>
        {todos.map((todo,index)=>(
            <li key={index}>
                {index+1}.{todo}
                <button style={{marginLeft:10, marginTop:10}} onClick={()=>deleteTodo(index)}>Delete</button>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo
