//יצירת החנות וההגדרה שלה ,מה שייצור לנו את האופציה להשתמש בפרוביידר 

import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './slices/todoSlice.js'

export const store = configureStore({
    reducer: {
        //רק המפתח כדי לגשת אל הסטייט
        todo: todoReducer  //הרדיוסר הזה מטפל בסטייט של טודוצstate. the name that given here
    }
})