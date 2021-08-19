import React from 'react'
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux';
import { selectTodoIds } from '../reducers/todosSlice';
import TodoForm from './TodoForm';

function TodoGroup() {
    const todoIds = useSelector(selectTodoIds);
    return (
        <React.Fragment>
            <div>
            {
                todoIds.map(id => (
                    <TodoItem key={id} itemId={id}/>
                ))
            }
            </div>
            <TodoForm/>
        </React.Fragment>
    );
}

export default TodoGroup;
