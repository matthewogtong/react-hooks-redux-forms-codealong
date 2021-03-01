import React, { useState } from "react";
import { useDispatch } from "react-redux"
import { todoAdded } from "./todosSlice"

function CreateTodo() {

  const [text, setText] = useState("")
  const dispatch = useDispatch()
  

  const handleChange = (event) => {
    setText(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(todoAdded(text))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>
          <label>add todo</label>
          <input type="text" value={text} onChange={handleChange}/>
        </p>
        <input type="submit"/>
      </form>
      <p>Form Text: {text}</p>
    </div>
  )
}

export default CreateTodo;
