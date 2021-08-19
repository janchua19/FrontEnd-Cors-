import api from "./api";

export const getTodos = () => {
    return api.get("/todos");
}

export const createTodo = (text) => {
    return api.post("/todos",{text});
}

export const updateTodo = (itemId, updateTodo) => {
    return api.put(`/todos/${itemId}`, {updateTodo});
}

export const deleteFromList = (itemId) => {
    return api.delete(`/todos/${itemId}`);
}