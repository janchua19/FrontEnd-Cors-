import { createSlice, createEntityAdapter, createSelector } from "@reduxjs/toolkit";

const todosAdapter = createEntityAdapter();
const initialState = todosAdapter.getInitialState({
});

const todosSlice = createSlice({
    name: "todos",
    initialState: initialState,
    reducers: {
        AddTodo(state, action) {
            todosAdapter.addOne(state, action.payload);
        },

        UpdateTodo(state,action) {
            console.log("ActionPayloadUpdate:", action.payload)
            todosAdapter.updateOne(state, {
                id: action.payload.id,
                changes: action.payload,
            })
        },

        DeleteTodo(state, action) {
            console.log("ActionPayloadDelete:",action.payload);
           todosAdapter.removeOne(state, action.payload)
        },

        AddTodos(state, action){
            todosAdapter.addMany(state, action.payload);
        },
    },
});


export const { AddTodo, DeleteTodo, AddTodos, UpdateTodo} = todosSlice.actions;
export default todosSlice.reducer;
export const {selectAll: selectTodos, selectIds: selectTodoIds, selectById: selectTodoById} = todosAdapter.getSelectors((state) => state.todoList);
export const selectDoneList = createSelector ([selectTodos], (todos) => todos.filter((todo) => todo.done));