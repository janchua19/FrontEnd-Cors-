export function getAllTodoIds(todos) {
    return todos.map(todo => todo.id);
}

export function getTodoById(todos, id){
    return todos.find((todo) => todo.id === id);
}