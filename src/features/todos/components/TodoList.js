import React from 'react';
import TodoForm from './TodoForm';
import TodoGroup from './TodoGroup';
import "../styles/TodoList.css";
import { useEffect } from 'react';
import { getTodos } from '../../apis/todos';
import { useDispatch } from 'react-redux';
import { AddTodos } from '../reducers/todosSlice';


    
    function TodoList() {

        const dispatch = useDispatch();

        useEffect(() => {
            getTodos().then((response) => {
                dispatch(AddTodos(response.data));
            })
        }, [dispatch])
        
        return (
            <React.Fragment>
                <ul className="TodoList-Header">Todo List</ul>
                <div className = "TodoList-Container">
                    <TodoGroup/>
                    <TodoForm className="TodoList"/>            
                </div>
            </React.Fragment>
        );
    };


export default TodoList;
