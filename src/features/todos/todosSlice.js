import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchTodos } from "./todosAPI";

const initialState = {
  status: 'idle',
  entities: [],
  form: {
    author: '',
    title: ''
  }
}

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    todoFormChanged(state, action) {
      // { type: "todos/todoAdded", payload: { name, value } } 
      state.form[action.payload.name] = action.payload.value
    },
    todoAdded(state, action) {
      // { type: "todos/todoAdded", payload: { id, author, desc, isDone } } 
      state.entities.push(action.payload)
      state.form = { author: '', title: '' }
    },
    todoToggled(state, action) {
      // { type: "todos/todoToggled", payload: id } 
      const index = state.entities.findIndex((item) => item.id === action.payload)
      if(index >= 0) {
        state.entities[index].isDone = !state.entities[index].isDone
      }
    },
    todoDeleted(state, action) {
      // { type: "todos/todoDeleted", payload: id } 
      const index = state.entities.findIndex((item) => item.id === action.payload)
      if(index >= 0) {
        state.entities.splice(index, 1)
      }
    }
  },
  extraReducers: builder => {
    builder
      .addCase(getTodos.pending, (state) => {
        // { type: "todos/fetchTodos/pending" } 
        state.status = 'loading'
      })
      .addCase(getTodos.fulfilled, (state, action) => {
        // { type: "todos/fetchTodos/fulfilled" } 
        state.status = 'completed'
        state.entities = action.payload
      })
      .addCase(getTodos.rejected, (state) => {
        // { type: "todos/fetchTodos/rejected" } 
        state.status = 'error'
        state.entities = []
      })
  }
})

export const getTodos = createAsyncThunk('todos/fetchTodos', async (payload, thunkAPI) => {
  // const { dispatch, getState } = thunkAPI
  const { param, num } = payload;
  const todos = await fetchTodos()
  return todos
})

export const { todoAdded, todoToggled, todoDeleted, todoFormChanged } = todosSlice.actions

export default todosSlice.reducer

export const getItemEntities = (state) => state.todos.entities