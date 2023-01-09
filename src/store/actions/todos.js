import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const token = `eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxNDYsImV4cCI6MTY4MTc0NTkzNX0.muWViMFDTxZFW92_AxQCmEPOoOauuA-GT8i_55VRRBM`

export const getDataTodos = createAsyncThunk(
    "todo/getTodo",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`https://todo-api-18-140-52-65.rakamin.com/todos`, {
                headers: {
                    'Authorization': `Basic ${token}`
                }
            })
            return response.data
        } catch (err) {
            return rejectWithValue(err.response.data)
        }
    }
)

export const getMultiItems = createAsyncThunk(
    "todo/multiTodo",
    async (items, { rejectWithValue }) => {
        try {
            const urlData = items?.map((item) => `https://todo-api-18-140-52-65.rakamin.com/todos/${item.id}/items`)
            const response = await axios.all(urlData.map(l => axios.get(l, {
                headers: {
                    'Authorization': `Basic ${token}`
                }
            })))
            .then(axios.spread((...res) => {
                console.log('res', res);
                return res
            })) 
            return response?.map(res => res.data).flat(1)
        } catch (err) {
            return rejectWithValue(err.response.data)
        }
    }
)

export const createDataItems = createAsyncThunk(
    "todo/createItems",
    async ({ id, data }, { rejectWithValue }) => {
        try {
            const response = await axios.post(`https://todo-api-18-140-52-65.rakamin.com/todos/${id}/items`, data, {
                headers: {
                    'Authorization': `Basic ${token}`
                }
            })
            return response.data
        } catch (err) {
            return rejectWithValue(err.response.data)
        }
    }
)

export const deleteDataItems = createAsyncThunk(
    "todo/deleteItems",
    async ({ id, idItem }, { rejectWithValue }) => {
        try {
            const response = await axios.delete(`https://todo-api-18-140-52-65.rakamin.com/todos/${id}/items/${idItem}`, {
                headers: {
                    'Authorization': `Basic ${token}`
                }
            })
            return response.data
        } catch (err) {
            return rejectWithValue(err.response.data)
        }
    }
)