import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    AddTodo: (state, action) => {
      const newTodo = {
        text: action.payload.text,
        id: new Date().getTime(),
      };
      state.todos = [...state.todos, newTodo];
    },
    DeleteTodo: (state, action) => {
      const deleteTodoID = action.payload.id;
      state.todos = state.todos.filter((todo) => todo.id !== deleteTodoID);
    },
  },
});

// Action creator
export const { AddTodo, DeleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
