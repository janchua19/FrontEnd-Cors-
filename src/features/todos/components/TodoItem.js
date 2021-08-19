import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteFromList, updateTodo } from '../../apis/todos';
import {selectTodoById, ToggleTodo, DeleteTodo } from "../reducers/todosSlice";
import "../styles/TodoItem.css";
import { useState } from 'react';
import { Modal} from 'antd';

function TodoItem(props) {
    const todo = useSelector (state => selectTodoById(state, props.itemId));
    const dispatch = useDispatch();
    const [isModalVisible, setIsModalVisible] = useState(false);

    function handleClick() {
        updateTodo(props.itemId, {done: !todo.done}).then((response) => {
            dispatch(ToggleTodo(props.itemId, response.data));
        });
    }

    function onClickDelete(event) {
        event.stopPropagation();
        deleteFromList(props.itemId).then((response) => {
            dispatch(DeleteTodo(props.itemId, response.data));
        });
    }

    const showModal = () => {
        setIsModalVisible(true);
    };
    
    const handleOk = () => {
        setIsModalVisible(false);
    };
    
    const handleCancel = () => {
        setIsModalVisible(false);
    };

    
    
    const todoStatus = todo.done ? "done" : ""; // if done will name done if not will be blank

    return (<div className = "TodoItem-Table">
            <span className= {`TodoItem-todo ${todoStatus}`} onClick = {handleClick}>{todo.text}</span>
            <button className= {`Edit ${todoStatus}`} onClick = {showModal}>Edit</button>
            <button className= "Delete" onClick = {onClickDelete}>X</button>

            <Modal title="Edit Todo" type="primary" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <textarea className="text-area">{todo.text}</textarea>
            </Modal>
    </div>);
}

export default TodoItem;
