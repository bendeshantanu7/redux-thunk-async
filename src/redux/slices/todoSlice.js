import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk('fetchTodos', async () => {
    console.log('Async thunk')
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    return response.json()
})

const todoSlice = createSlice({
    initialState: {
        data: null,
        isLoading: false,
        isError: false
    },
    name: 'todos',
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
        })
        builder.addCase(fetchTodos.pending, (state, actions) => {
            state.isLoading = true;
        })
        builder.addCase(fetchTodos.rejected,(state, actions) => {
            state.isError = true
        })
    }
})

export default todoSlice.reducer