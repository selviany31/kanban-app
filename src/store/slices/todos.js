import { createSlice } from "@reduxjs/toolkit"
import { createDataItems, deleteDataItems, getDataTodos, getMultiItems, updateDataItems } from "../actions/todos";

const initialState = {
    todos: [],
    items: [],
    loading: false,
    loadingItem: false,
    loadingCreate: false,
    loadingDelete: false,
    successCreate: false,
    successDelete: false
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        dragItem: (state, action) => {
            const objIndex = state.items.findIndex(item => item.id === action.payload.id)
            state.items[objIndex].todo_id = action.payload.todo_id
        },
        dragItemColumn: (state, action) => {
            console.log(action.payload);
            const copiedItems = state.items.filter(el => el.todo_id === action.payload.destination)
            const [removed] = copiedItems.splice(action.payload.sourceIndex, 1);
            copiedItems.splice(action.payload.destinationIndex, 0, removed);
            console.log(copiedItems);
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getDataTodos.pending, (state) => {
            state.loading = true;
        })
        .addCase(getDataTodos.fulfilled, (state, action) => {
            state.loading = false
            state.todos = action.payload
        })
        .addCase(getDataTodos.rejected, (state) => {
            state.loading = false;
            state.todos = [];
        })
        .addCase(getMultiItems.pending, (state) => {
            state.loadingItem = true;
            state.successCreate = false
            state.successDelete = false
        })
        .addCase(getMultiItems.fulfilled, (state, action) => {
            state.loadingItem = false
            state.items = action.payload
            state.successCreate = false
            state.successDelete = false
        })
        .addCase(getMultiItems.rejected, (state) => {
            state.loadingItem = false;
            state.items = [];
        })
        .addCase(createDataItems.pending, (state) => {
            state.loadingCreate = true;
            state.successCreate = false;
        })
        .addCase(createDataItems.fulfilled, (state, action) => {
            state.loadingCreate = false;
            state.successCreate = true;
        })
        .addCase(createDataItems.rejected, (state, action) => {
            state.loadingCreate = false;
            state.successCreate = false;
        })
        .addCase(updateDataItems.pending, (state) => {
            state.loadingCreate = true;
            state.successCreate = false;
        })
        .addCase(updateDataItems.fulfilled, (state, action) => {
            state.loadingCreate = false;
            state.successCreate = true;
        })
        .addCase(updateDataItems.rejected, (state, action) => {
            state.loadingCreate = false;
            state.successCreate = false;
        })
        .addCase(deleteDataItems.pending, (state) => {
            state.loadingDelete = true;
            state.successDelete = false;
        })
        .addCase(deleteDataItems.fulfilled, (state, action) => {
            state.loadingDelete = false;
            state.successDelete = true;
        })
        .addCase(deleteDataItems.rejected, (state, action) => {
            state.loadingDelete = false;
            state.successDelete = false;
        })
    }
})

export const { dragItem, dragItemColumn } = todoSlice.actions

export default todoSlice.reducer