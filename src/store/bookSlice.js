import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { logInsert } from "./reportSlice";
// import axios from "axios";

// thunk to get books from data
export const getbooks = createAsyncThunk('book/getbooks', async(_, thunkAPI)=>{
    const {rejectWithValue} = thunkAPI; 
    try{

        // const res = await axios.get('http://localhost:3005/books')
        // console.log(res)
        // console.log(res.data)
        // return res.data

        const res = await fetch('http://localhost:3005/books');
        // console.log(res)
        const data = await res.json();
        // console.log(data)
        return data;


    }catch(error){
        console.log(error)
        return rejectWithValue(error.message);
    }
    
})

// thunk to insert books
export const insertbook = createAsyncThunk('book/insertbook', async(bookdata, thunkAPI)=>{
    const {rejectWithValue , getState , dispatch} = thunkAPI; 
    try{
        bookdata.userName = getState().auth.name;
        // dispatch
        dispatch(deletebook({id: 4}));
        const res = await fetch('http://localhost:3005/books', { method: 'POST', body: JSON.stringify(bookdata), headers: {'Content-Type': 'application/json; charset=UTF-8'},});
        // report
        const data = await res.json();
        dispatch(logInsert({name: 'insertBook', status:'success'}));
        return data;
        // console.log(getState().auth.name)
    }catch(error){
        dispatch(logInsert({name: 'insertBook', status:'failed'}));
       return rejectWithValue(error.message);
    }
})

// thunk to delete books
export const deletebook = createAsyncThunk('book/deletebook', async(e, thunkAPI)=>{
    const {rejectWithValue } = thunkAPI; 
    try{        
        // const res = await fetch(`http://localhost:3005/books/${id}`, { method: 'DELETE', headers: {'Content-Type': 'application/json; charset=UTF-8'} });
        // console.log(res);        
        await fetch(`http://localhost:3005/books/${e.id}`, { method: 'DELETE', headers: {'Content-Type': 'application/json; charset=UTF-8'} });
        return e;
        // console.log(getState().auth.name)
    }catch(error){
       return rejectWithValue(error.message);
    }
})


export const bookSlice = createSlice({
    name: "book",
    initialState: {
        // books : null,
        books : [],
        isLoading: false,
        error: null
    },
    reducers: {
    },
    extraReducers: {
        // get books
        [getbooks.pending]: (state, action) => {
             state.isLoading = true;
             state.error = null;
             console.log(action);
        },
        [getbooks.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.books = action.payload;
            console.log(action);
        },
        [getbooks.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
            console.log(action);
        },

        // insert book
        [insertbook.pending]: (state, action) => {
            state.isLoading = true;
            state.error = null;
            console.log(action);
        },
        [insertbook.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.books.push(action.payload);

            console.log(action);
        },
        [insertbook.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
            console.log(action);
        },

        // delete book 
        [deletebook.pending]:(state , action)=>{
            state.isLoading = true;
            state.error = null;
            console.log(action);
        },
        [deletebook.fulfilled]:(state , action)=>{
            state.isLoading = false;
            state.books = state.books.filter(el => el.id!== action.payload.id);

            console.log(action);
        },
        [deletebook.rejected]:(state , action)=>{
            state.isLoading = false;
            state.error = null;
            console.log(action);
        }
    }
})


export default bookSlice.reducer