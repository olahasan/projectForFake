import { configureStore } from "@reduxjs/toolkit";
import  bookSlice  from './bookSlice';
import  authSlice  from './authSlice';
import  reportSlice  from './reportSlice';

const store = configureStore({
    reducer: {
       books : bookSlice,
       auth: authSlice,
       report: reportSlice
    }
})
export default store;