import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTodo } from '../../apis/todos';
import { AddTodo } from '../reducers/todosSlice';
import "../styles/TodoForm.css";

function TodoForm() {
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    function handleChange(event){
        setText(event.target.value);
    }

    function handleAdd() {
        if(text)
            createTodo(text).then((response) => {
                dispatch(AddTodo(response.data));
            });
            setText(""); //clear text field every add
    }

    return (
        <div className = "TodoForm">
            <input className= "InputTextBox" type = "text" placeholder = "List item" value={text} onChange= {handleChange}/>
            <button className="Add" onClick = {handleAdd}>Add</button>
        </div>
    );
}

export default TodoForm;
